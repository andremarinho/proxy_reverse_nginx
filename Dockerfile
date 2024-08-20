FROM node:15

WORKDIR /usr/src/app

COPY . .

ENTRYPOINT [ "node", "index.js" ]

EXPOSE 3000