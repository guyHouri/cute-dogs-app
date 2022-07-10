# buster is a version of linux. slim installs the minimal packages needed to run
FROM node:14.13.1-buster-slim

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
# ARG NODE_ENV=production
# ENV NODE_ENV $NODE_ENV

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/cute_dogs_app
WORKDIR /opt/cute_dogs_app
ENV PATH /opt/cute_dogs_app/.bin:$PATH

# copy our source code
WORKDIR /opt/cute_dogs_app
COPY ./ .

ENTRYPOINT ["npm", "run", "web"]