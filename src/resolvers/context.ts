import { Response } from 'express'

import { Prisma } from '@generated/prisma'
import { Request } from '@utils/types'

export type Context = {
  db: Prisma
  request?: Request
  response?: Response
}
