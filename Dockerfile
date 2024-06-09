# Use Node.js LTS version as the base image
FROM node:14 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the React app
RUN yarn build

# Create a new image with only the production assets
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=builder /app/build ./build

# Expose the port that the app runs on
EXPOSE 3000

# Serve the app
CMD ["npx", "serve", "-s", "build"]
