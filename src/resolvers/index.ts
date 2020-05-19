// mutations
import ItemMutations from './mutations/item'
import UserMutations from './mutations/user'
import CartMutations from './mutations/cart'

// queries
import ItemQueries from './queries/item'
import UserQueries from './queries/user'
import CartQueries from './queries/cart'

const Mutation = {
  ...ItemMutations,
  ...UserMutations,
  ...CartMutations,
}

const Query = {
  ...ItemQueries,
  ...UserQueries,
  ...CartQueries,
}

export { Mutation, Query }
