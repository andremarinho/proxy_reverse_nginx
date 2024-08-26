FROM node:18-alpine

WORKDIR /usr/src/app

RUN npm init -y
RUN npm install express && npm install mysql && npm update -y

COPY . .

ENTRYPOINT [ "node", "index.js" ]

EXPOSE 3000