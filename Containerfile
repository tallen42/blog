FROM docker.io/node:24-slim AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml .npmrc* ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm run build


# Production image, copy all the files and run next
FROM docker.io/caddy:latest AS runner
WORKDIR /app
COPY --from=builder /app/dist ./
EXPOSE 8000
# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
CMD ["caddy", "file-server", "--listen", ":8000"]