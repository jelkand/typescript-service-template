import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from '../graphql/typeDefs'
import resolvers from '../graphql/resolvers'
;(async (): Promise<void> => {
  const dbConnection = await createConnection()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      dbConnection,
    },
  })

  const app = express()
  const port = process.env.port || 3000

  server.applyMiddleware({ app })

  app.listen(port, (): void =>
    console.log(`Typescript template app listening on port ${port}!`),
  )
})()
