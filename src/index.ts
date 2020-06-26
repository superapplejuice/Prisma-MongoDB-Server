require('dotenv').config({ path: '.env' })

import cookieParser from 'cookie-parser'
import { verify } from 'jsonwebtoken'

import { Options } from 'graphql-yoga'
import { Request } from '@utils/types'

import { createServer } from '@lib'

const server = createServer()

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

const options: Options = {
  cors: { credentials: true, origin: process.env.CLIENT_ENDPOINT },
  endpoint: '/graphql',
  playground: '/playground',
}
server.start(options, ({ port, endpoint }) =>
  // eslint-disable-next-line no-console
  console.log(
    `🚀 GraphQL server running on http://localhost:${port}${endpoint}`
  )
)
