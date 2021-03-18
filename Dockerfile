FROM node:15.10.0-alpine as dev

ARG TYPEORM_PASSWORD
ARG TYPEORM_DATABASE
ARG TYPEORM_USERNAME
ARG TYPEORM_HOST
ARG TYPEORM_PORT

ENV NODE_ENV=development
ENV TYPEORM_PASSWORD=$TYPEORM_PASSWORD
ENV TYPEORM_DATABASE=$TYPEORM_DATABASE
ENV TYPEORM_USERNAME=$TYPEORM_USERNAME
ENV TYPEORM_HOST=$TYPEORM_HOST
ENV TYPEORM_PORT=$TYPEORM_PORT

ENV TYPEORM_CONNECTION=postgres

ENV TYPEORM_ENTITIES=dist/db/entity/**/*.js
ENV TYPEORM_SUBSCRIBERS=dist/db/subscriber/**/*.js
ENV TYPEORM_MIGRATIONS=dist/db/migration/**/*.js
ENV TYPEORM_ENTITIES_DIR=src/db/entity
ENV TYPEORM_MIGRATIONS_DIR=src/db/migration
ENV TYPEORM_SUBSCRIBERS_DIR=src/db/subscriber

COPY package.json /usr/src/app/package.json
WORKDIR /usr/src/app
RUN yarn

COPY . .

RUN chmod +x wait-for-it.sh
RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "docker-entrypoint.sh" ]
CMD yarn start:dev

FROM node:15.10.0-alpine as ci

ARG TYPEORM_PASSWORD
ARG TYPEORM_DATABASE
ARG TYPEORM_USERNAME
ARG TYPEORM_HOST
ARG TYPEORM_PORT

ENV NODE_ENV=production
ENV TYPEORM_PASSWORD=$TYPEORM_PASSWORD
ENV TYPEORM_DATABASE=$TYPEORM_DATABASE
ENV TYPEORM_USERNAME=$TYPEORM_USERNAME
ENV TYPEORM_HOST=$TYPEORM_HOST
ENV TYPEORM_PORT=$TYPEORM_PORT

ENV TYPEORM_CONNECTION=postgres

ENV TYPEORM_ENTITIES=dist/db/entity/**/*.js
ENV TYPEORM_SUBSCRIBERS=dist/db/subscriber/**/*.js
ENV TYPEORM_MIGRATIONS=dist/db/migration/**/*.js
ENV TYPEORM_ENTITIES_DIR=src/db/entity
ENV TYPEORM_MIGRATIONS_DIR=src/db/migration
ENV TYPEORM_SUBSCRIBERS_DIR=src/db/subscriber
ENV TYPEORM_DRIVER_EXTRA='{ "ssl": true }'

WORKDIR /usr/src/app

COPY --from=dev /usr/src/app/dist ./dist
COPY --from=dev /usr/src/app/package.json .

RUN yarn --only=prod

ENTRYPOINT [ "docker-entrypoint.sh" ]
CMD yarn start:ci