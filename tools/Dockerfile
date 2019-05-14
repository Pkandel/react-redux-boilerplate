FROM node:10.15.3

WORKDIR /app

COPY package*.json .
RUN npm install

ENV PATH="/app/node_modules/.bin:${PATH}"
COPY . .
EXPOSE 9000

CMD ["npm", "run", "dev"]