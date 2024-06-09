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
EXPOSE 5173

# Command to run your app using Vite's development server
CMD ["npm", "run", "dev"]
