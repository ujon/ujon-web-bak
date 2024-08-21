FROM node:20-alpine AS base
LABEL org.opencontainers.image.source=https://github.com/ujon/ujon-web

FROM base AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm i
COPY . .
RUN pnpm run build

FROM base AS runner
WORKDIR /app

# set new user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/package.json .
COPY --from=builder --chown=nextjs:nodejs /app/pnpm-lock.yaml .
COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

#ENV HOSTNAME=0.0.0.0
#EXPOSE 3000
ENTRYPOINT ["node","server.js"]

