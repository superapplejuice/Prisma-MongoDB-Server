import { GraphQLServer } from 'graphql-yoga'
import db from './db'

import * as resolvers from '@resolvers'

const createServer = () =>
  new GraphQLServer({
    typeDefs: 'src/schemas/schema.graphql',
    resolvers,
    resolverValidationOptions: { requireResolversForResolveType: false },
    context: req => ({ ...req, db }),
  })

export default createServer
