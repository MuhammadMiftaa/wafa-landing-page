# ─────────────────────────────────────────────────────────────────────────────
# STRATEGI UKURAN IMAGE:
#
# SPA/PWA (nginx):     ~45MB  (no runtime needed)
# SSR naive:           ~450MB (bun + node_modules)
# SSR optimized ini:   ~120MB (bun + NO node_modules — Nitro self-contained)
#
# Kunci: Nitro/Vinxi sudah mem-bundle SEMUA server dependencies ke dalam
# dist/server/index.mjs saat build. node_modules TIDAK dibutuhkan di runtime.
# ─────────────────────────────────────────────────────────────────────────────

# ─────────────────────────────────────────────────────────────────────────────
# Stage 1: builder — install semua deps + build
# (Stage deps terpisah dihapus karena kita tidak copy node_modules ke runner)
# ─────────────────────────────────────────────────────────────────────────────
FROM oven/bun:1.2-alpine AS builder

WORKDIR /app

COPY package.json bun.lockb* ./

# Full install (dev deps dibutuhkan untuk build)
RUN bun install --frozen-lockfile

COPY . .

RUN bun --bun run build

# Verifikasi output & tampilkan ukuran
RUN echo "=== Build output ===" && \
    ls -la && \
    echo "" && \
    echo "--- Output dir ---" && \
    (ls -la dist/ 2>/dev/null || ls -la .output/ 2>/dev/null || echo "WARNING: no output found") && \
    echo "" && \
    echo "--- Server bundle ---" && \
    (ls -lah dist/server/ 2>/dev/null || ls -lah .output/server/ 2>/dev/null || echo "no server/") && \
    echo "" && \
    echo "--- Client assets ---" && \
    (ls -lah dist/client/ 2>/dev/null || ls -lah .output/public/ 2>/dev/null || echo "no client/") && \
    echo "" && \
    echo "--- Total output size ---" && \
    (du -sh dist/ 2>/dev/null || du -sh .output/ 2>/dev/null)

# Normalize output dir → /app/out
RUN if [ -d ".output" ]; then \
        echo "Detected: .output/" && cp -r .output /app/out; \
    elif [ -d "dist" ]; then \
        echo "Detected: dist/" && cp -r dist /app/out; \
    else \
        echo "ERROR: Build output tidak ditemukan!" && exit 1; \
    fi

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2: compress — pre-compress static assets sekali saat build
# ─────────────────────────────────────────────────────────────────────────────
FROM alpine:3.20 AS compress

RUN apk add --no-cache brotli pigz findutils

WORKDIR /app/out

COPY --from=builder /app/out .

# Brotli q=11 + Gzip q=9 untuk semua static asset > 1KB
# File .br dan .gz disimpan di samping file asli
# Reverse proxy (Caddy/Nginx) serve langsung tanpa CPU overhead per-request
RUN find . -type f \( \
      -name "*.js"   -o -name "*.mjs"  -o -name "*.cjs" \
      -o -name "*.css"  -o -name "*.html" -o -name "*.svg" \
      -o -name "*.json" -o -name "*.xml"  -o -name "*.txt" \
      -o -name "*.wasm" -o -name "*.ico" \
    \) \
    -size +1k \
    | while read f; do \
        brotli --quality=11 --force --keep "$f"; \
        pigz --best --keep --force "$f"; \
      done && \
    echo "=== Compression stats ===" && \
    echo "Original files:" && find . -not \( -name "*.br" -o -name "*.gz" \) -type f | wc -l && \
    echo "Brotli files:"   && find . -name "*.br" | wc -l && \
    echo "Gzip files:"     && find . -name "*.gz" | wc -l && \
    echo "Total size:"     && du -sh .

# ─────────────────────────────────────────────────────────────────────────────
# Stage 3: runner — image seminimal mungkin
# TIDAK membawa node_modules — Nitro server bundle sudah self-contained
# ─────────────────────────────────────────────────────────────────────────────
FROM oven/bun:1.2-alpine AS runner

# Non-root user untuk keamanan
RUN addgroup -g 1001 -S nodejs && \
    adduser  -S -u 1001 -G nodejs nodejs

WORKDIR /app

# Hanya copy build output — TANPA node_modules
# Nitro mem-bundle semua server dependencies saat build
COPY --from=compress --chown=nodejs:nodejs /app/out .

# package.json tetap diperlukan untuk "type": "module"
COPY --chown=nodejs:nodejs package.json ./

USER nodejs

EXPOSE 3000

ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/ || exit 1

# Deteksi entrypoint otomatis
# Jika server tidak start karena missing module → node_modules masih dibutuhkan,
# uncomment bagian COPY node_modules di atas dan tambahkan stage deps kembali
CMD ["sh", "-c", "\
  if   [ -f server/index.mjs ]; then exec bun run server/index.mjs; \
  elif [ -f server/index.js  ]; then exec bun run server/index.js; \
  elif [ -f index.mjs        ]; then exec bun run index.mjs; \
  elif [ -f index.js         ]; then exec bun run index.js; \
  else \
    echo '=== ERROR: Server entrypoint tidak ditemukan ===' && \
    find . -name 'index.*' -not -path '*/node_modules/*' && \
    exit 1; \
  fi"]