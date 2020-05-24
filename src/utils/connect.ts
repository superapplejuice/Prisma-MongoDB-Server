export const itemResolveInfo = `
  {
    id
    name
    description
    price
    images
    createdAt
    updatedAt
    user {
      id
    }
  }
` as const

export const cartResolveInfo = `
  {
    id
    item {
      id
    }
    user {
      id
    }
  }
` as const

export const userResolveInfo = `
  {
    id
    username
    email
    password
    joined
    items {
      id
    }
    cart {
      id
    }
  }
` as const
