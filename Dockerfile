FROM node:22.12.0 AS builder

# Declare build time environment variables
ARG REACT_APP_NODE_ENV
ARG REACT_APP_SERVER_BASE_URL

# Set default values for environment variables
ENV REACT_APP_NODE_ENV=$REACT_APP_NODE_ENV
ENV REACT_APP_SERVER_BASE_URL=$REACT_APP_SERVER_BASE_URL

# Build App
WORKDIR /app
COPY package.json .
RUN npm install --force
COPY . .
RUN npm run build

# Serve stage with SPA support
FROM socialengine/nginx-spa
COPY --from=builder /app/dist /app
EXPOSE 80

