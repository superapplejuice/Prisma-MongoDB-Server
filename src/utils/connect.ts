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
`
