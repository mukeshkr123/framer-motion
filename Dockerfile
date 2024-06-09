# Use node base image with a specified version
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory inside the container
COPY . .

# Build your React app
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app, you might want to change this based on your npm script
CMD ["npm", "run", "serve"]
