#!/bin/sh
set -e

# Jalankan Bun SSR di background
PORT=3001 HOST=0.0.0.0 NODE_ENV=production \
    bun run /app/dist/server/server.js &
BUN_PID=$!

# Tunggu Bun siap (maksimal 10 detik)
echo "Waiting for Bun SSR to be ready..."
i=0
while [ $i -lt 10 ]; do
    if wget -qO- http://127.0.0.1:3001/ > /dev/null 2>&1; then
        echo "Bun SSR ready."
        break
    fi
    sleep 1
    i=$((i + 1))
done

# Cek apakah Bun masih hidup
if ! kill -0 $BUN_PID 2>/dev/null; then
    echo "ERROR: Bun SSR failed to start. Exiting."
    exit 1
fi

# Jalankan Nginx di foreground
echo "Starting Nginx..."
exec nginx -g 'daemon off;'