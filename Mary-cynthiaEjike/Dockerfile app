FROM node:20-alpine AS build
# Use Node.js 20.x

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Set the environment variable to use the legacy OpenSSL provider
ENV NODE_OPTIONS=--openssl-legacy-provider

# Copy the rest of the application code
COPY . .

# Build the React.js application
RUN npm run build

# Stage 2: Use a lightweight Nginx image to serve the React build files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to communicate with the host
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]