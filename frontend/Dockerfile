# Use a Node.js base image to build the React app 
FROM node:22-alpine AS build 

# Set the working directory in the container 
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install 

# Copy the rest of the application files and build teh app 
COPY . .
RUN npm run build \
  && rm -rf node_modules

######################################################
# Use NGINX to serve the static files 
FROM nginx:alpine

COPY .docker/nginx.conf /etc/nginx/nginx.conf

# Copy the build output to the NGINX HTML directory
RUN rm -rf /usr/share/nginx/html/* 
COPY --from=build /app/build /usr/share/nginx/html

# Export port 80 for the NGINX web server
EXPOSE 80

# Start NGINX 
CMD ["nginx", "-g", "daemon off;"]
