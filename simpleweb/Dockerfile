# Specify a base image
FROM node:alpine

# Define a working directory
WORKDIR /usr/app

# Specify that npm install will run only if this is changed or above
# It will clear the cache and re-run only if this will change (remove unnecessary rebuilds and re-running commands)
COPY ./package.json ./

# Install some dependencies
RUN npm install

# Copying from this directory to the container directory 
COPY ./ ./

# Default Command
CMD ["npm", "start"]
