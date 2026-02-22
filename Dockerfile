
FROM ruby:3.3-alpine

RUN apk add --no-cache npm 

WORKDIR /site


COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

