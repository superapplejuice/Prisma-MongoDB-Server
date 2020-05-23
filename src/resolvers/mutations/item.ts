import { MutationResolvers } from '../types'

import { uploadImages } from '@utils/functions'
import { NO_ITEM, NOT_OWNER, REQUIRE_AUTH } from '@utils/messages'
import { itemResolveInfo } from '@utils/connect'

const ItemMutations: MutationResolvers = {
  createItem: async (parent, { data }, ctx, info) => {
    if (!ctx.request.userId) {
      throw new Error(REQUIRE_AUTH)
    }

    const { name, description, price, images } = data
    const uploadURLs = await uploadImages(images)

    return await ctx.db.mutation.createItem(
      {
        data: {
          name,
          description,
          price,
          images: {
            set: uploadURLs,
          },
          user: {
            connect: {
              id: ctx.request.userId,
            },
          },
        },
      },
      info
    )
  },
  updateItem: async (parent, { data }, ctx, info) => {
    if (!ctx.request.userId) {
      throw new Error(REQUIRE_AUTH)
    }

    const { id, name, description, price, images } = data
    let newUploadURLs: string[]

    const itemToUpdate = await ctx.db.query.item(
      {
        where: { id },
      },
      itemResolveInfo
    )

    if (!itemToUpdate) {
      throw new Error(NO_ITEM)
    }
    if (ctx.request.userId !== itemToUpdate.user.id) {
      throw new Error(NOT_OWNER)
    }

    if (images.length > 0) {
      newUploadURLs = await uploadImages(images)
    }

    return await ctx.db.mutation.updateItem(
      {
        data: {
          name,
          description,
          price,
          images: {
            set: newUploadURLs,
          },
        },
        where: { id },
      },
      info
    )
  },
  deleteItem: async (parent, { id }, ctx, info) => {
    if (!ctx.request.userId) {
      throw new Error(REQUIRE_AUTH)
    }

    const itemToDelete = await ctx.db.query.item({ where: { id } })

    if (!itemToDelete) {
      throw new Error(NO_ITEM)
    }
    if (ctx.request.userId !== itemToDelete.user.id) {
      throw new Error(NOT_OWNER)
    }

    await ctx.db.mutation.deleteItem({ where: { id } }, info)

    return itemToDelete
  },
}

export default ItemMutations
