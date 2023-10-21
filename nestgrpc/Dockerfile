FROM node:20-slim


RUN apt update -y && \
    apt install -y procps && \
    npm install -g @nestjs/cli@10.0.0

WORKDIR /home/node/app

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node ./ .

RUN npm run build

USER node


CMD ["npm", "run", "start:dev"]
