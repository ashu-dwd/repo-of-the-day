# ----------------------------------------------------------
# Dockerfile for repo-of-the-day (Express, Node.js, cron)
# Clean, robust, and beginner-friendly: npm-based only
# ----------------------------------------------------------

# Use official Node LTS base image
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package.json and your lockfile (pnpm for this project)
COPY package.json ./
COPY pnpm-lock.yaml ./  # For pnpm users

# Install dependencies (production)
RUN npm install --production

# Copy all other source code (but .dockerignore will skip unnecessary files)
COPY . .

# .env should NOT be baked in; mount an actual .env at runtime

EXPOSE 3000

CMD ["node", "index.js"]

# ---------- INSTRUCTIONS ----------
# Build: docker build -t repo-of-the-day .
# Run:   docker run --env-file .env -p 3000:3000 repo-of-the-day
# Or use docker-compose as documented.
