import { GraphQLServer } from 'graphql-yoga'
import * as resolvers from './resolvers'
import dataloader from './dataloader'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({ ...req, dataloader }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
