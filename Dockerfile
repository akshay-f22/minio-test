FROM node:18-alpine
RUN chmod -R 777 /usr/node/app
WORKDIR /usr/node/app
COPY ./package*.json yarn* ./
RUN yarn
COPY . .
CMD ["node", "index.js"]
