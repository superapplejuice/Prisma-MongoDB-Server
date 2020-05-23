import { Request as BaseRequest } from 'express'

export interface Request extends BaseRequest {
  cookies: { token: string }
  userId: string
}
