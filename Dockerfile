FROM node:12.8.0-alpine as dev

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN chmod +x wait-for-it.sh

# ENV 

RUN npm i
RUN npm run build

ENTRYPOINT [ "docker-entrypoint.sh" ]
CMD npm run start:dev

# FROM node:12.8.0-alpine as ci

# WORKDIR /usr/src/app

# COPY --from=dev /usr/src/app/dist ./dist
# COPY --from=dev /usr/src/app/node_modules ./node_modules
# COPY --from=dev /usr/src/app/package.json .

# ENTRYPOINT [ "docker-entrypoint.sh" ]
# CMD npm run start:ci