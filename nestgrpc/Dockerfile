FROM node:20-slim


RUN apt update -y && \
    apt install -y procps && \
    npm install -g @nestjs/cli@10.0.0

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

USER node


CMD ["npm", "run", "start:dev"]
