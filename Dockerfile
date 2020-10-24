# The base image
FROM node:latest

ARG workingDir=/opt/auth/

# Set a directory for the app (created by root)
# Must run before changing user else permission will be denied since only
# root can write to /opt
RUN mkdir ${workingDir}
WORKDIR ${workingDir}

# Copy production files to the container
COPY package.json server.js ${workingDir}
COPY models ${workingDir}/models
COPY src/routes ${workingDir}/routes

# Give the 'node' user directory access permissions, install dependencies and build app
RUN chown -R node:node ${workingDir} && npm install #  --only=prod

# Configure the environment
USER node
ARG tcpPort=3000
EXPOSE ${tcpPort}/tcp

#ENV NODE_ENV production
ENV DATA_SRC_HOST localhost
ENV DATA_SRC_PORT 3306
ENV DATA_SRC_USER daniel
ENV DATA_SRC_PASSWORD Password1
ENV DATA_SRC_DATABASE auth

# Start the app
CMD ["node","server.js"]
