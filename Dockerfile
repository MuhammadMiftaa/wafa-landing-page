# ─────────────────────────────────────────────────────────────────────────────
# Stage 1: builder
# ─────────────────────────────────────────────────────────────────────────────
FROM oven/bun:1.2-alpine AS builder

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun --bun run build

# Normalize output dir → /app/out
RUN if [ -d ".output" ]; then \
        echo "Detected: .output/" && cp -r .output /app/out; \
    elif [ -d "dist" ]; then \
        echo "Detected: dist/" && cp -r dist /app/out; \
    else \
        echo "ERROR: Build output tidak ditemukan!" && exit 1; \
    fi

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2: compress
# ─────────────────────────────────────────────────────────────────────────────
FROM alpine:3.20 AS compress

RUN apk add --no-cache brotli pigz findutils

WORKDIR /app/out
COPY --from=builder /app/out .

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
      done

# ─────────────────────────────────────────────────────────────────────────────
# Stage 3: runner
# ─────────────────────────────────────────────────────────────────────────────
FROM oven/bun:1.2-alpine AS runner

RUN addgroup -g 1001 -S nodejs && \
    adduser  -S -u 1001 -G nodejs nodejs

WORKDIR /app

COPY --from=compress --chown=nodejs:nodejs /app/out .
COPY --chown=nodejs:nodejs package.json ./

USER nodejs

EXPOSE 3000

ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/ || exit 1

# Entrypoint confirmed dari output: ./server/server.js
CMD ["bun", "run", "./server/server.js"]