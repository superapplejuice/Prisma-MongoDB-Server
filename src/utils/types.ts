import { Request as BaseRequest, Response as BaseResponse } from 'express'
import { User } from '../resolvers/types'

export interface Request extends BaseRequest {
  cookies: { token: string }
  userId: string
  currentUser: User
}

export type Response = BaseResponse
