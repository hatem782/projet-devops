# Stage 1: Build React app with Webpack
FROM node:latest as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app using Webpack
RUN npm run build

# Stage 2: Use Nginx to serve the built app
FROM nginx:alpine

# Copy the built assets from the build stage to Nginx's default HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Nginx is automatically started by the base image