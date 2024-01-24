# Step 1: Pull the base image
FROM node:14 as build

# Step 2: Set the working directory in the Docker image
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependenciesdocker
RUN npm install

# Step 5: Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Step 6: Build the application
RUN npm run build

# Step 7: Start a new stage from a smaller base image
FROM nginx:1.17.1-alpine

# Step 8: Copy the built application from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port and start the application
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]