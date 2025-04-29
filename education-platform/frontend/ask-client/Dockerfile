# Dockerfile for Next.js (dev mode)
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Start the dev server
CMD ["npm", "run", "dev"]
