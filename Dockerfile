FROM node:9.3

RUN npm install webpack -g
RUN npm install webpack-cli -g
RUN npm install webpack-dev-server -g

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
EXPOSE 9000

CMD ["npm", "run", "dev"]