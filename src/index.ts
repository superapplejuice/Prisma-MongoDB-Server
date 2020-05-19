require('dotenv').config({ path: '.env' })

import { GraphQLServer, Options } from 'graphql-yoga'
import cookieParser from 'cookie-parser'
import { verify } from 'jsonwebtoken'

import { Request, Response } from './utils/types'

import * as resolvers from './resolvers'
import db from './lib/db'

const server = new GraphQLServer({
  typeDefs: 'src/schemas/schema.graphql',
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
  context: req => ({ ...req, db }),
})

server.express.use(cookieParser())
server.express.use((req: Request, res, next) => {
  if (req.cookies.token) {
    const { userId } = verify(req.cookies.token, process.env.APP_SECRET) as {
      userId: string
    }

    req.userId = userId
  }

  return next()
})
server.express.use(async (req: Request, res: Response, next) => {
  if (!req.userId) {
    return next()
  }

  const currentUser = await db.query.user(
    {
      where: { id: req.userId },
    },
    `{id, username, email}`
  )

  req.currentUser = currentUser

  return next()
})

const options: Options = {
  cors: { credentials: true },
  playground: '/graphql',
}
server.start(options, ({ port }) =>
  // eslint-disable-next-line no-console
  console.log(`🚀 GraphQL Server running on http://localhost:${port}`)
)
