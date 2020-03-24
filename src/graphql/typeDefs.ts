import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    sample(id: String!): Sample
  }

  type Mutation {
    createSample(attribute: String): Sample
    updateSample(id: String!, attribute: String): Int
    deleteSample(id: String!): Int
  }

  type Sample {
    id: ID!
    attribute: String
  }
`
