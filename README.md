# Typescript Service Template

An opinionated template for spinning up typescript services.

## Why?

It's often useful to have a consolidated template for spinning up services, in order to skip configuration and boilerplate.

## Getting started:

Running locally, quickly:

- `docker-compose run --dev yarn migrate` to get the database ready.
- `docker-compose up dev` to run the service at `localhost:3000`
- `docker-compose down` to clean up when you're done.

To fully set up (see more in the 'What's Needed' section below):

1. Instantiate a new repository using this as a template.
2. Replace all instances of `typescript-service-template` with the name of your project.
3. In your database server, create a new database for your service.
4. Replace all instances of `typescript_service_template` with the name of your database.
5. Add the following github secrets to your repository:

- POSTGRES_HOST
- POSTGRES_USER
- POSTGRES_PASSWORD
- POSTGRES_DB
- POSTGRES_PORT
- AZURE_CREDENTIALS
- REGISTRY_USERNAME
- REGISTRY_PASSWORD
- AZURE_CREDENTIALS
- REGISTRY_USERNAME
- REGISTRY_PASSWORD

6. Let CI/CD do the magic. Probably. I wrote this over a few weekends and may have forgotten something...

## What's included?

This repository contains:

- Typescript
- Apollo Server 2.0
- Dockerized local development through docker-compose, including a database.
- Prisma, and configuration + connections, assuming postgres.
- Tests, through Jest.
- A CI/CD pipeline through Github Actions.
- Deployment to a kubernetes cluster on Azure, including an ingress service.

## What needs to be set up for this to work end-to-end:

- A pile of Github Secrets
- An AKS resource on Azure
- A container registry
- A postgres database
