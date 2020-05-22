import { MutationResolvers } from '../types'

import { REQUIRE_AUTH } from '../../utils/messages'
import { cartResolveInfo } from '../../utils/connect'

const CartMutations: MutationResolvers = {
  addToCart: async (parent, { id }, ctx, info) => {
    if (!ctx.request.userId) {
      throw new Error(REQUIRE_AUTH)
    }

    const userCart = await ctx.db.query.cartItems(
      {
        where: {
          user: { id: ctx.request.userId },
        },
      },
      cartResolveInfo
    )
    const existingItem = userCart.find(cartItem => cartItem.item.id === id)
    if (existingItem) {
      return existingItem
    }

    return await ctx.db.mutation.createCartItem(
      {
        data: {
          item: {
            connect: { id },
          },
          user: {
            connect: { id: ctx.request.userId },
          },
        },
      },
      info
    )
  },
  removeFromCart: async (parent, { id }, ctx, info) => {
    if (!ctx.request.userId) {
      throw new Error(REQUIRE_AUTH)
    }

    const itemToRemove = await ctx.db.query.cartItem(
      {
        where: { id },
      },
      cartResolveInfo
    )

    const userCart = await ctx.db.query.cartItems(
      {
        where: {
          user: {
            id: ctx.request.userId,
          },
        },
      },
      cartResolveInfo
    )

    const itemInCart = userCart.find(
      cartItem => cartItem.id === itemToRemove.id
    )
    if (!itemInCart) {
      throw new Error('Item does not exist in your cart!')
    }

    return await ctx.db.mutation.deleteCartItem(
      {
        where: { id: itemToRemove.id },
      },
      info
    )
  },
  clearCart: async (parent, args, ctx, info) => {
    if (!ctx.request.userId) {
      throw new Error(REQUIRE_AUTH)
    }

    await ctx.db.mutation.deleteManyCartItems(
      {
        where: { user: { id: ctx.request.userId } },
      },
      info
    )

    return await ctx.db.query.cartItems(
      {
        where: { user: { id: ctx.request.userId } },
      },
      cartResolveInfo
    )
  },
}

export default CartMutations
