FROM node:20-alpine AS build

RUN mkdir /server

WORKDIR /server

COPY package*.json /server/

RUN npm install

COPY . .

EXPOSE 5050

CMD [ "npm", "run", "dev" ]