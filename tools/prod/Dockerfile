FROM node:latest AS builder

RUN apt-get update \
 && DEBIAN_FRONTEND=noninteractive apt-get install -y \
        curl jq rsync
        
WORKDIR /app

COPY package*.json ./
RUN npm install -q
ENV PATH="/app/node_modules/.bin:${PATH}"

COPY . .
RUN npm run build


FROM nginx:mainline

RUN apt-get update \
 && DEBIAN_FRONTEND=noninteractive apt-get install -y \
        curl

COPY ./tools/prod/nginx.conf /etc/nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# pre-compress everything
RUN find /usr/share/nginx/html \! -name "*.png" \! -name "*.ico" -size +1k -type f -exec gzip -9k {} \;

EXPOSE 80
CMD ["nginx"]
