# Use the official Node.js runtime as the base image
FROM node 

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev"]