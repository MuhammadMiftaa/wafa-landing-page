# ─────────────────────────────────────────────────────────────────────────────
# Stage 1: deps
# ─────────────────────────────────────────────────────────────────────────────
FROM oven/bun:1.2-alpine AS deps

WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2: builder
# ─────────────────────────────────────────────────────────────────────────────
FROM oven/bun:1.2-alpine AS builder

WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# ─────────────────────────────────────────────────────────────────────────────
# Stage 3: runner
# ─────────────────────────────────────────────────────────────────────────────
FROM oven/bun:1.2-alpine

RUN apk add --no-cache nginx

# Hapus semua config bawaan Alpine Nginx
RUN rm -rf /etc/nginx/http.d/ && mkdir -p /etc/nginx/http.d/

WORKDIR /app

COPY --from=builder /app/dist         ./dist
COPY --from=deps    /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

COPY default.conf /etc/nginx/http.d/default.conf
COPY start.sh     /start.sh

# Verifikasi isi config saat build — kalau masih listen 80 berarti COPY gagal
RUN echo "=== nginx config ===" && cat /etc/nginx/http.d/default.conf

RUN chmod +x /start.sh

EXPOSE 3000

ENV NODE_ENV=production

CMD ["/start.sh"]