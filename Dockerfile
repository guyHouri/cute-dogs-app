# buster is a version of linux. slim installs the minimal packages needed to run
FROM node:14.13.1-buster-slim

RUN npm i -g npm@latest expo-cli@latest

RUN mkdir /opt/cute_dogs_app

# copy our source code
WORKDIR /opt/cute_dogs_app
COPY ./ .

ENTRYPOINT ["npm", "run", "web"]