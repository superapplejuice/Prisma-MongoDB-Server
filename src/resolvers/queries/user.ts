import { QueryResolvers } from '../types'

const UserQueries: QueryResolvers = {
  fetchCurrentUser: async (parent, args, ctx, info) => {
    if (!ctx.request.userId) {
      return null
    }

    return await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info
    )
  },
  fetchUser: async (parent, { id }, ctx, info) => {
    const fetchedUser = await ctx.db.query.user({ where: { id } }, info)

    if (!fetchedUser) {
      throw new Error('User does not exist!')
    }

    return fetchedUser
  },
}

export default UserQueries
