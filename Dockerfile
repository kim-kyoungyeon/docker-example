FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY  package-lock.json package.json ./

ENTRYPOINT [ "node","index.js" ]