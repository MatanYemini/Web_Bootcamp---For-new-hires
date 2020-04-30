# basic setup image
FROM node:alpine

# our working directory
WORKDIR /app
COPY package.json ./

# what to run if something from the above was changed
RUN npm install

# copying relevent code
COPY ./ ./ 

# running command as defined in "scripts"
CMD [ "npm", "start" ]