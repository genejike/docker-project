FROM node:16-alpine AS build

RUN mkdir /app

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]

