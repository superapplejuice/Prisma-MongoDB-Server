import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { CookieOptions } from 'express'
import { MutationResolvers } from '../types'

import { usernameRegex, passwordRegex } from '@utils/regex'
import {
  INVALID_USERNAME,
  INVALID_PASSWORD,
  WRONG_CREDENTIALS,
  REQUIRE_AUTH,
} from '@utils/messages'
import { createAlert } from '@utils/functions'

const cookieOptions: CookieOptions = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 7,
}

const parseString = (value: string) => value.toLowerCase()

const UserMutations: MutationResolvers = {
  registerUser: async (parent, { data }, ctx, info) => {
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
  loginUser: async (parent, { data }, ctx) => {
    const { email, password } = data

    const parsedEmail = parseString(email)

    const existingUser = await ctx.db.query.user({
      where: { email: parsedEmail },
    })
    const correctPassword = await compare(password, existingUser.password)

    if (!existingUser || !correctPassword) {
      throw new Error(WRONG_CREDENTIALS)
    }

    const token = sign({ userId: existingUser.id }, process.env.APP_SECRET)
    ctx.response.cookie('token', token, cookieOptions)

    return existingUser
  },
  logoutUser: (parent, args, ctx) => {
    if (!ctx.request.userId) {
      throw new Error(REQUIRE_AUTH)
    }

    ctx.response.clearCookie('token')

    return createAlert(false, 'Logged out successfully!')
  },
}

export default UserMutations
