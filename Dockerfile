# ----------------------------------------------------------
# Dockerfile for repo-of-the-day (Express, Node.js, cron)
# Production-grade, beginner-friendly, secure build
# ----------------------------------------------------------

# Use official Node LTS base image
FROM node:20-slim

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package files first (for efficient docker caching)
COPY package.json .
COPY pnpm-lock.yaml .  # In case you use pnpm. Remove if not.

# Install dependencies (prefer pnpm if lock present, else npm)
RUN if [ -f pnpm-lock.yaml ]; then \
      npm install -g pnpm && pnpm install --prod; \
    else \
      npm install --production; \
    fi

# Copy rest of the application code
COPY . .

# Exclude development stuff via .dockerignore!
# .env should NOT be copied; mount or inject at runtime.

# Use port 3000 for Express
EXPOSE 3000

# Run server (cron will work as Node and cron run in same process via node-cron)
CMD ["node", "index.js"]

# ---------- Instructions ----------
# 1. Build: docker build -t repo-of-the-day .
# 2. Run: docker run --env-file .env -p 3000:3000 repo-of-the-day
#    (Mount your .env file as needed. Never bake secrets into image.)
