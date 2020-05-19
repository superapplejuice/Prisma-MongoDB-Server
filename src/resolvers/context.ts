import { Prisma } from '../generated/prisma'
import { Request, Response } from '../utils/types'

export type Context = {
  db: Prisma
  request: Request
  response: Response
}
