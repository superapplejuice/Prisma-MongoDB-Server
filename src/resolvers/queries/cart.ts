import { QueryResolvers } from '../types'

import { REQUIRE_AUTH } from '@utils/messages'

const CartQueries: QueryResolvers = {
  fetchCart: async (parent, args, ctx, info) => {
    if (!ctx.request.userId) {
      throw new Error(REQUIRE_AUTH)
    }

    return await ctx.db.query.cartItems(
      { where: { user: { id: ctx.request.userId } } },
      info
    )
  },
}

export default CartQueries
