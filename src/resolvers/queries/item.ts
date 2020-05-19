import { QueryResolvers } from '../types'

import { NO_ITEM } from '../../utils/messages'

const ItemQueries: QueryResolvers = {
  fetchItems: {
    fragment: '',
    resolve: async (parent, { data }, ctx, info) =>
      await ctx.db.query.items({ ...data }, info),
  },
  fetchItem: {
    fragment: '',
    resolve: async (parent, { id }, ctx, info) => {
      const fetchedItem = await ctx.db.query.item(
        {
          where: {
            id,
          },
        },
        info
      )

      if (!fetchedItem) {
        throw new Error(NO_ITEM)
      }

      return fetchedItem
    },
  },
}

export default ItemQueries
