import { Response } from 'express'
import { Request } from '@utils/types'

import { db } from '@lib'

let request: Request
let response: Response

export const parent = {}
export const ctx = {
  db,
  request,
  response,
}
export const getResolveInfo = (infoString: string) => infoString as any
