FROM node:16-alpine

# Set working directory
WORKDIR /usr/zipbora-service-app

# Install yarn
RUN apk add yarn

# Install PM2 globally
RUN yarn global add pm2

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN yarn

# Copy all files
COPY ./ ./

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
CMD [ "pm2-runtime", "dev", "yarn", "--", "start" ]