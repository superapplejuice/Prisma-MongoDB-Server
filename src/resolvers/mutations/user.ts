import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { CookieOptions } from 'express'
import { MutationResolvers } from '../types'

import { usernameRegex, passwordRegex } from '../../utils/regex'
import {
  INVALID_USERNAME,
  INVALID_PASSWORD,
  WRONG_CREDENTIALS,
} from '../../utils/messages'

const cookieOptions: CookieOptions = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 7,
}

const parseString = (value: string) => value.toLowerCase()

const UserMutations: MutationResolvers = {
  registerUser: {
    fragment: '',
    resolve: async (parent, { data }, ctx, info) => {
      const { username, email, password } = data

      const parsedUsername = parseString(username)
      const parsedEmail = parseString(email)

      if (!parsedUsername.match(usernameRegex)) {
        throw new Error(INVALID_USERNAME)
      }
      if (!password.match(passwordRegex)) {
        throw new Error(INVALID_PASSWORD)
      }

      const existingUsername = await ctx.db.query.user({
        where: { username: parsedUsername },
      })
      if (existingUsername) {
        throw new Error('Username already taken!')
      }

      const existingEmail = await ctx.db.query.user({
        where: { email: parsedEmail },
      })
      if (existingEmail) {
        throw new Error('Email already taken!')
      }

      const hashedPassword = await hash(password, 12)

      return await ctx.db.mutation.createUser(
        {
          data: {
            username: parsedUsername,
            email: parsedEmail,
            password: hashedPassword,
          },
        },
        info
      )
    },
  },
  loginUser: {
    fragment: '',
    resolve: async (parent, { data }, ctx, info) => {
      const { email, password } = data

      const parsedEmail = parseString(email)

      const existingEmail = await ctx.db.query.user({
        where: { email: parsedEmail },
      })
      const correctPassword = await compare(password, existingEmail.password)

      if (!existingEmail || !correctPassword) {
        throw new Error(WRONG_CREDENTIALS)
      }

      const token = sign({ userId: existingEmail.id }, process.env.APP_SECRET)
      ctx.response.cookie('token', token, cookieOptions)

      return existingEmail
    },
  },
}

export default UserMutations