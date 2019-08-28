import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from '../graphql/typeDefs'
import resolvers from '../graphql/resolvers'

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
const port = process.env.port || 3000

server.applyMiddleware({ app })

app.listen(port, () =>
  console.log(`Typescript template app listening on port ${port}!`),
)
