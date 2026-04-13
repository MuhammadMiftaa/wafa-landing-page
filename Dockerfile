# ─────────────────────────────────────────────────────────────────────────────
# Stage 1: deps — production dependencies saja
# ─────────────────────────────────────────────────────────────────────────────
FROM oven/bun:1.2-alpine AS deps

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile --production

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2: builder
# ─────────────────────────────────────────────────────────────────────────────
FROM oven/bun:1.2-alpine AS builder

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun --bun run build

# Normalize output dir → /app/out
RUN if [ -d ".output" ]; then \
        cp -r .output /app/out; \
    elif [ -d "dist" ]; then \
        cp -r dist /app/out; \
    else \
        echo "ERROR: Build output tidak ditemukan!" && exit 1; \
    fi

# ─────────────────────────────────────────────────────────────────────────────
# Stage 3: compress
# ─────────────────────────────────────────────────────────────────────────────
FROM alpine:3.20 AS compress

RUN apk add --no-cache brotli pigz findutils

WORKDIR /app/out
COPY --from=builder /app/out .

# Pre-compress static client assets saja (bukan server JS)
# Server JS tidak perlu di-compress karena dibaca langsung oleh Bun
RUN find ./client -type f \( \
      -name "*.js"   -o -name "*.mjs"  -o -name "*.cjs" \
      -o -name "*.css"  -o -name "*.html" -o -name "*.svg" \
      -o -name "*.json" -o -name "*.xml"  -o -name "*.txt" \
      -o -name "*.wasm" -o -name "*.ico" -o -name "*.png" \
      -o -name "*.webp" \
    \) \
    -size +1k \
    | while read f; do \
        brotli --quality=11 --force --keep "$f"; \
        pigz --best --keep --force "$f"; \
      done

# ─────────────────────────────────────────────────────────────────────────────
# Stage 4: runner
# ─────────────────────────────────────────────────────────────────────────────
FROM oven/bun:1.2-alpine AS runner

RUN addgroup -g 1001 -S nodejs && \
    adduser  -S -u 1001 -G nodejs nodejs

WORKDIR /app

# Build output (server + client assets)
COPY --from=compress --chown=nodejs:nodejs /app/out .

# node_modules production — dibutuhkan karena h3-v2 dan deps lain
# tidak di-bundle oleh TanStack Start ke server.js
COPY --from=deps --chown=nodejs:nodejs /app/node_modules ./node_modules

COPY --chown=nodejs:nodejs package.json ./

USER nodejs

EXPOSE 3000

ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/ || exit 1

CMD ["bun", "run", "./server/server.js"]