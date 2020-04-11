FROM node:12.8.0-alpine as dev

COPY package.json /usr/src/app/package.json
WORKDIR /usr/src/app

RUN npm i

COPY . .

RUN chmod +x wait-for-it.sh
RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "docker-entrypoint.sh" ]
CMD npm run start:dev

FROM node:12.8.0-alpine as ci


WORKDIR /usr/src/app

COPY --from=dev /usr/src/app/dist ./dist
COPY --from=dev /usr/src/app/package.json .

RUN npm i --only=prod

ENTRYPOINT [ "docker-entrypoint.sh" ]
CMD npm run start:ci