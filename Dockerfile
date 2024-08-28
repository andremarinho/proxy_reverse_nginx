FROM node:18-alpine

WORKDIR /usr/src/app

RUN npm init -y
RUN npm install express && npm install mysql && npm update -y

ENV DOCKERIZE_VERSION v0.8.0

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

COPY . .

ENTRYPOINT [ "node", "index.js" ]

EXPOSE 3000