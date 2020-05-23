require('dotenv').config({ path: '.env' })

import { GraphQLServer, Options } from 'graphql-yoga'
import cookieParser from 'cookie-parser'
import { verify } from 'jsonwebtoken'

import { Request } from '@utils/types'

import * as resolvers from '@resolvers'
import db from '@lib/db'

const server = new GraphQLServer({
  typeDefs: 'src/schemas/schema.graphql',
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
  context: req => ({ ...req, db }),
})

server.express.use(cookieParser())

// verify the cookie token on every request
server.express.use((req: Request, res, next) => {
  if (req.cookies.token) {
    const { userId } = verify(req.cookies.token, process.env.APP_SECRET) as {
      userId: string
    }

    req.userId = userId
  }

  return next()
})

// populate `currentUser`, if available, on every request
server.express.use(async (req: Request, res, next) => {
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
  endpoint: '/graphql',
  playground: '/playground',
}
server.start(options, ({ port, endpoint }) =>
  // eslint-disable-next-line no-console
  console.log(
    `🚀 GraphQL server running on http://localhost:${port}${endpoint}`
  )
)
