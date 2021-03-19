FROM node:15.10.0 as dev

ARG DATABASE_URL

ENV NODE_ENV=development
ENV DATABASE_URL=$DATABASE_URL

COPY package.json /usr/src/app/package.json
WORKDIR /usr/src/app
RUN yarn

COPY . .

RUN chmod +x wait-for-it.sh
RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "docker-entrypoint.sh" ]
# RUN yarn migrate:dev
CMD yarn start:dev

FROM node:15.10.0 as ci

ARG DATABASE_URL

ENV NODE_ENV=production
ENV DATABASE_URL=$DATABASE_URL

WORKDIR /usr/src/app

COPY --from=dev /usr/src/app/dist ./dist
COPY --from=dev /usr/src/app/package.json .

RUN yarn --only=prod

ENTRYPOINT [ "docker-entrypoint.sh" ]
CMD yarn start:ci