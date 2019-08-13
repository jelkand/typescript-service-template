FROM node:12.8.0-alpine


ENTRYPOINT [ "docker-entrypoint.sh" ]
CMD "npm run start:dev"