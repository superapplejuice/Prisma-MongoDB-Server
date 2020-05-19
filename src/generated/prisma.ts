import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
  users: <T = Array<User | null>>(
    args: {
      where?: UserWhereInput | null
      orderBy?: UserOrderByInput | null
      skip?: Int | null
      after?: String | null
      before?: String | null
      first?: Int | null
      last?: Int | null
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  cartItems: <T = Array<CartItem | null>>(
    args: {
      where?: CartItemWhereInput | null
      orderBy?: CartItemOrderByInput | null
      skip?: Int | null
      after?: String | null
      before?: String | null
      first?: Int | null
      last?: Int | null
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  items: <T = Array<Item | null>>(
    args: {
      where?: ItemWhereInput | null
      orderBy?: ItemOrderByInput | null
      skip?: Int | null
      after?: String | null
      before?: String | null
      first?: Int | null
      last?: Int | null
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  user: <T = User | null>(
    args: { where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  cartItem: <T = CartItem | null>(
    args: { where: CartItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  item: <T = Item | null>(
    args: { where: ItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  usersConnection: <T = UserConnection>(
    args: {
      where?: UserWhereInput | null
      orderBy?: UserOrderByInput | null
      skip?: Int | null
      after?: String | null
      before?: String | null
      first?: Int | null
      last?: Int | null
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  cartItemsConnection: <T = CartItemConnection>(
    args: {
      where?: CartItemWhereInput | null
      orderBy?: CartItemOrderByInput | null
      skip?: Int | null
      after?: String | null
      before?: String | null
      first?: Int | null
      last?: Int | null
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  itemsConnection: <T = ItemConnection>(
    args: {
      where?: ItemWhereInput | null
      orderBy?: ItemOrderByInput | null
      skip?: Int | null
      after?: String | null
      before?: String | null
      first?: Int | null
      last?: Int | null
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  node: <T = Node | null>(
    args: { id: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
}

export interface Mutation {
  createUser: <T = User>(
    args: { data: UserCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  createCartItem: <T = CartItem>(
    args: { data: CartItemCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  createItem: <T = Item>(
    args: { data: ItemCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  updateUser: <T = User | null>(
    args: { data: UserUpdateInput; where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  updateCartItem: <T = CartItem | null>(
    args: { data: CartItemUpdateInput; where: CartItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  updateItem: <T = Item | null>(
    args: { data: ItemUpdateInput; where: ItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  deleteUser: <T = User | null>(
    args: { where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  deleteCartItem: <T = CartItem | null>(
    args: { where: CartItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  deleteItem: <T = Item | null>(
    args: { where: ItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  upsertUser: <T = User>(
    args: {
      where: UserWhereUniqueInput
      create: UserCreateInput
      update: UserUpdateInput
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  upsertCartItem: <T = CartItem>(
    args: {
      where: CartItemWhereUniqueInput
      create: CartItemCreateInput
      update: CartItemUpdateInput
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  upsertItem: <T = Item>(
    args: {
      where: ItemWhereUniqueInput
      create: ItemCreateInput
      update: ItemUpdateInput
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  updateManyUsers: <T = BatchPayload>(
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  updateManyItems: <T = BatchPayload>(
    args: { data: ItemUpdateManyMutationInput; where?: ItemWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  deleteManyUsers: <T = BatchPayload>(
    args: { where?: UserWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  deleteManyCartItems: <T = BatchPayload>(
    args: { where?: CartItemWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  deleteManyItems: <T = BatchPayload>(
    args: { where?: ItemWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
}

export interface Subscription {
  user: <T = UserSubscriptionPayload | null>(
    args: { where?: UserSubscriptionWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T | null>>
  cartItem: <T = CartItemSubscriptionPayload | null>(
    args: { where?: CartItemSubscriptionWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T | null>>
  item: <T = ItemSubscriptionPayload | null>(
    args: { where?: ItemSubscriptionWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T | null>>
}

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  CartItem: (where?: CartItemWhereInput) => Promise<boolean>
  Item: (where?: ItemWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>
  delegate(
    operation: 'query' | 'mutation',
    fieldName: string,
    args: {
      [key: string]: any
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<any>
  delegateSubscription(
    fieldName: string,
    args?: {
      [key: string]: any
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<AsyncIterator<any>>
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers
}

export interface BindingConstructor<T> {
  new (options: BasePrismaOptions): T
}
/**
 * Type Defs
 */

const typeDefs = `type AggregateCartItem {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type CartItem implements Node {
  id: ID!
  item: Item!
  user: User!
}

"""A connection to a list of items."""
type CartItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CartItemEdge]!
  aggregate: AggregateCartItem!
}

input CartItemCreateInput {
  id: ID
  item: ItemCreateOneInput!
  user: UserCreateOneWithoutCartInput!
}

input CartItemCreateManyWithoutUserInput {
  create: [CartItemCreateWithoutUserInput!]
  connect: [CartItemWhereUniqueInput!]
}

input CartItemCreateWithoutUserInput {
  id: ID
  item: ItemCreateOneInput!
}

"""An edge in a connection."""
type CartItemEdge {
  """The item at the end of the edge."""
  node: CartItem!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CartItemOrderByInput {
  id_ASC
  id_DESC
}

type CartItemPreviousValues {
  id: ID!
}

input CartItemScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [CartItemScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartItemScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartItemScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
}

type CartItemSubscriptionPayload {
  mutation: MutationType!
  node: CartItem
  updatedFields: [String!]
  previousValues: CartItemPreviousValues
}

input CartItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CartItemSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CartItemWhereInput
}

input CartItemUpdateInput {
  item: ItemUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutCartInput
}

input CartItemUpdateManyWithoutUserInput {
  create: [CartItemCreateWithoutUserInput!]
  connect: [CartItemWhereUniqueInput!]
  set: [CartItemWhereUniqueInput!]
  disconnect: [CartItemWhereUniqueInput!]
  delete: [CartItemWhereUniqueInput!]
  update: [CartItemUpdateWithWhereUniqueWithoutUserInput!]
  deleteMany: [CartItemScalarWhereInput!]
  upsert: [CartItemUpsertWithWhereUniqueWithoutUserInput!]
}

input CartItemUpdateWithoutUserDataInput {
  item: ItemUpdateOneRequiredInput
}

input CartItemUpdateWithWhereUniqueWithoutUserInput {
  where: CartItemWhereUniqueInput!
  data: CartItemUpdateWithoutUserDataInput!
}

input CartItemUpsertWithWhereUniqueWithoutUserInput {
  where: CartItemWhereUniqueInput!
  update: CartItemUpdateWithoutUserDataInput!
  create: CartItemCreateWithoutUserInput!
}

input CartItemWhereInput {
  """Logical AND on all given filters."""
  AND: [CartItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  item: ItemWhereInput
  user: UserWhereInput
}

input CartItemWhereUniqueInput {
  id: ID
}

scalar DateTime

type Item implements Node {
  id: ID!
  name: String!
  description: String!
  price: Int!
  images: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  user: User
}

"""A connection to a list of items."""
type ItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateimagesInput {
  set: [String!]
}

input ItemCreateInput {
  id: ID
  name: String!
  description: String!
  price: Int!
  images: ItemCreateimagesInput
  user: UserCreateOneWithoutItemsInput
}

input ItemCreateManyWithoutUserInput {
  create: [ItemCreateWithoutUserInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateOneInput {
  create: ItemCreateInput
  connect: ItemWhereUniqueInput
}

input ItemCreateWithoutUserInput {
  id: ID
  name: String!
  description: String!
  price: Int!
  images: ItemCreateimagesInput
}

"""An edge in a connection."""
type ItemEdge {
  """The item at the end of the edge."""
  node: Item!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemPreviousValues {
  id: ID!
  name: String!
  description: String!
  price: Int!
  images: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ItemScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  price: Int

  """All values that are not equal to given value."""
  price_not: Int

  """All values that are contained in given list."""
  price_in: [Int!]

  """All values that are not contained in given list."""
  price_not_in: [Int!]

  """All values less than the given value."""
  price_lt: Int

  """All values less than or equal the given value."""
  price_lte: Int

  """All values greater than the given value."""
  price_gt: Int

  """All values greater than or equal the given value."""
  price_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
}

input ItemUpdateDataInput {
  name: String
  description: String
  price: Int
  images: ItemUpdateimagesInput
  user: UserUpdateOneWithoutItemsInput
}

input ItemUpdateimagesInput {
  set: [String!]
}

input ItemUpdateInput {
  name: String
  description: String
  price: Int
  images: ItemUpdateimagesInput
  user: UserUpdateOneWithoutItemsInput
}

input ItemUpdateManyDataInput {
  name: String
  description: String
  price: Int
  images: ItemUpdateimagesInput
}

input ItemUpdateManyMutationInput {
  name: String
  description: String
  price: Int
  images: ItemUpdateimagesInput
}

input ItemUpdateManyWithoutUserInput {
  create: [ItemCreateWithoutUserInput!]
  connect: [ItemWhereUniqueInput!]
  set: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
  deleteMany: [ItemScalarWhereInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutUserInput!]
}

input ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput!
  data: ItemUpdateManyDataInput!
}

input ItemUpdateOneRequiredInput {
  create: ItemCreateInput
  connect: ItemWhereUniqueInput
  update: ItemUpdateDataInput
  upsert: ItemUpsertNestedInput
}

input ItemUpdateWithoutUserDataInput {
  name: String
  description: String
  price: Int
  images: ItemUpdateimagesInput
}

input ItemUpdateWithWhereUniqueWithoutUserInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutUserDataInput!
}

input ItemUpsertNestedInput {
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemUpsertWithWhereUniqueWithoutUserInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutUserDataInput!
  create: ItemCreateWithoutUserInput!
}

input ItemWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  price: Int

  """All values that are not equal to given value."""
  price_not: Int

  """All values that are contained in given list."""
  price_in: [Int!]

  """All values that are not contained in given list."""
  price_not_in: [Int!]

  """All values less than the given value."""
  price_lt: Int

  """All values less than or equal the given value."""
  price_lte: Int

  """All values greater than the given value."""
  price_gt: Int

  """All values greater than or equal the given value."""
  price_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
}

input ItemWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createCartItem(data: CartItemCreateInput!): CartItem!
  createItem(data: ItemCreateInput!): Item!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateCartItem(data: CartItemUpdateInput!, where: CartItemWhereUniqueInput!): CartItem
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  deleteUser(where: UserWhereUniqueInput!): User
  deleteCartItem(where: CartItemWhereUniqueInput!): CartItem
  deleteItem(where: ItemWhereUniqueInput!): Item
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertCartItem(where: CartItemWhereUniqueInput!, create: CartItemCreateInput!, update: CartItemUpdateInput!): CartItem!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyCartItems(where: CartItemWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  cartItems(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartItem]!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  user(where: UserWhereUniqueInput!): User
  cartItem(where: CartItemWhereUniqueInput!): CartItem
  item(where: ItemWhereUniqueInput!): Item
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  cartItemsConnection(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartItemConnection!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  cartItem(where: CartItemSubscriptionWhereInput): CartItemSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
}

type User implements Node {
  id: ID!
  username: String!
  email: String!
  password: String!
  joined: DateTime!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  cart(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartItem!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  email: String!
  password: String!
  items: ItemCreateManyWithoutUserInput
  cart: CartItemCreateManyWithoutUserInput
}

input UserCreateOneWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutItemsInput {
  create: UserCreateWithoutItemsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCartInput {
  id: ID
  username: String!
  email: String!
  password: String!
  items: ItemCreateManyWithoutUserInput
}

input UserCreateWithoutItemsInput {
  id: ID
  username: String!
  email: String!
  password: String!
  cart: CartItemCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  joined_ASC
  joined_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  password: String!
  joined: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  username: String
  email: String
  password: String
  items: ItemUpdateManyWithoutUserInput
  cart: CartItemUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutCartDataInput
  upsert: UserUpsertWithoutCartInput
}

input UserUpdateOneWithoutItemsInput {
  create: UserCreateWithoutItemsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutItemsDataInput
  upsert: UserUpsertWithoutItemsInput
}

input UserUpdateWithoutCartDataInput {
  username: String
  email: String
  password: String
  items: ItemUpdateManyWithoutUserInput
}

input UserUpdateWithoutItemsDataInput {
  username: String
  email: String
  password: String
  cart: CartItemUpdateManyWithoutUserInput
}

input UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput!
  create: UserCreateWithoutCartInput!
}

input UserUpsertWithoutItemsInput {
  update: UserUpdateWithoutItemsDataInput!
  create: UserCreateWithoutItemsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  joined: DateTime

  """All values that are not equal to given value."""
  joined_not: DateTime

  """All values that are contained in given list."""
  joined_in: [DateTime!]

  """All values that are not contained in given list."""
  joined_not_in: [DateTime!]

  """All values less than the given value."""
  joined_lt: DateTime

  """All values less than or equal the given value."""
  joined_lte: DateTime

  """All values greater than the given value."""
  joined_gt: DateTime

  """All values greater than or equal the given value."""
  joined_gte: DateTime
  items_some: ItemWhereInput
  cart_some: CartItemWhereInput
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({
  typeDefs,
})

/**
 * Types
 */

export type CartItemOrderByInput = 'id_ASC' | 'id_DESC'

export type ItemOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export type UserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'username_ASC'
  | 'username_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'password_ASC'
  | 'password_DESC'
  | 'joined_ASC'
  | 'joined_DESC'

export interface CartItemCreateInput {
  id?: ID_Input | null
  item: ItemCreateOneInput
  user: UserCreateOneWithoutCartInput
}

export interface CartItemCreateManyWithoutUserInput {
  create?:
    | CartItemCreateWithoutUserInput[]
    | CartItemCreateWithoutUserInput
    | null
  connect?: CartItemWhereUniqueInput[] | CartItemWhereUniqueInput | null
}

export interface CartItemCreateWithoutUserInput {
  id?: ID_Input | null
  item: ItemCreateOneInput
}

export interface CartItemScalarWhereInput {
  AND?: CartItemScalarWhereInput[] | CartItemScalarWhereInput | null
  OR?: CartItemScalarWhereInput[] | CartItemScalarWhereInput | null
  NOT?: CartItemScalarWhereInput[] | CartItemScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
}

export interface CartItemSubscriptionWhereInput {
  AND?: CartItemSubscriptionWhereInput[] | CartItemSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CartItemWhereInput | null
}

export interface CartItemUpdateInput {
  item?: ItemUpdateOneRequiredInput | null
  user?: UserUpdateOneRequiredWithoutCartInput | null
}

export interface CartItemUpdateManyWithoutUserInput {
  create?:
    | CartItemCreateWithoutUserInput[]
    | CartItemCreateWithoutUserInput
    | null
  connect?: CartItemWhereUniqueInput[] | CartItemWhereUniqueInput | null
  set?: CartItemWhereUniqueInput[] | CartItemWhereUniqueInput | null
  disconnect?: CartItemWhereUniqueInput[] | CartItemWhereUniqueInput | null
  delete?: CartItemWhereUniqueInput[] | CartItemWhereUniqueInput | null
  update?:
    | CartItemUpdateWithWhereUniqueWithoutUserInput[]
    | CartItemUpdateWithWhereUniqueWithoutUserInput
    | null
  deleteMany?: CartItemScalarWhereInput[] | CartItemScalarWhereInput | null
  upsert?:
    | CartItemUpsertWithWhereUniqueWithoutUserInput[]
    | CartItemUpsertWithWhereUniqueWithoutUserInput
    | null
}

export interface CartItemUpdateWithoutUserDataInput {
  item?: ItemUpdateOneRequiredInput | null
}

export interface CartItemUpdateWithWhereUniqueWithoutUserInput {
  where: CartItemWhereUniqueInput
  data: CartItemUpdateWithoutUserDataInput
}

export interface CartItemUpsertWithWhereUniqueWithoutUserInput {
  where: CartItemWhereUniqueInput
  update: CartItemUpdateWithoutUserDataInput
  create: CartItemCreateWithoutUserInput
}

export interface CartItemWhereInput {
  AND?: CartItemWhereInput[] | CartItemWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  item?: ItemWhereInput | null
  user?: UserWhereInput | null
}

export interface CartItemWhereUniqueInput {
  id?: ID_Input | null
}

export interface ItemCreateimagesInput {
  set?: String[] | String | null
}

export interface ItemCreateInput {
  id?: ID_Input | null
  name: String
  description: String
  price: Int
  images?: ItemCreateimagesInput | null
  user?: UserCreateOneWithoutItemsInput | null
}

export interface ItemCreateManyWithoutUserInput {
  create?: ItemCreateWithoutUserInput[] | ItemCreateWithoutUserInput | null
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput | null
}

export interface ItemCreateOneInput {
  create?: ItemCreateInput | null
  connect?: ItemWhereUniqueInput | null
}

export interface ItemCreateWithoutUserInput {
  id?: ID_Input | null
  name: String
  description: String
  price: Int
  images?: ItemCreateimagesInput | null
}

export interface ItemScalarWhereInput {
  AND?: ItemScalarWhereInput[] | ItemScalarWhereInput | null
  OR?: ItemScalarWhereInput[] | ItemScalarWhereInput | null
  NOT?: ItemScalarWhereInput[] | ItemScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  price?: Int | null
  price_not?: Int | null
  price_in?: Int[] | Int | null
  price_not_in?: Int[] | Int | null
  price_lt?: Int | null
  price_lte?: Int | null
  price_gt?: Int | null
  price_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface ItemSubscriptionWhereInput {
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ItemWhereInput | null
}

export interface ItemUpdateDataInput {
  name?: String | null
  description?: String | null
  price?: Int | null
  images?: ItemUpdateimagesInput | null
  user?: UserUpdateOneWithoutItemsInput | null
}

export interface ItemUpdateimagesInput {
  set?: String[] | String | null
}

export interface ItemUpdateInput {
  name?: String | null
  description?: String | null
  price?: Int | null
  images?: ItemUpdateimagesInput | null
  user?: UserUpdateOneWithoutItemsInput | null
}

export interface ItemUpdateManyDataInput {
  name?: String | null
  description?: String | null
  price?: Int | null
  images?: ItemUpdateimagesInput | null
}

export interface ItemUpdateManyMutationInput {
  name?: String | null
  description?: String | null
  price?: Int | null
  images?: ItemUpdateimagesInput | null
}

export interface ItemUpdateManyWithoutUserInput {
  create?: ItemCreateWithoutUserInput[] | ItemCreateWithoutUserInput | null
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput | null
  set?: ItemWhereUniqueInput[] | ItemWhereUniqueInput | null
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput | null
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput | null
  update?:
    | ItemUpdateWithWhereUniqueWithoutUserInput[]
    | ItemUpdateWithWhereUniqueWithoutUserInput
    | null
  updateMany?:
    | ItemUpdateManyWithWhereNestedInput[]
    | ItemUpdateManyWithWhereNestedInput
    | null
  deleteMany?: ItemScalarWhereInput[] | ItemScalarWhereInput | null
  upsert?:
    | ItemUpsertWithWhereUniqueWithoutUserInput[]
    | ItemUpsertWithWhereUniqueWithoutUserInput
    | null
}

export interface ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput
  data: ItemUpdateManyDataInput
}

export interface ItemUpdateOneRequiredInput {
  create?: ItemCreateInput | null
  connect?: ItemWhereUniqueInput | null
  update?: ItemUpdateDataInput | null
  upsert?: ItemUpsertNestedInput | null
}

export interface ItemUpdateWithoutUserDataInput {
  name?: String | null
  description?: String | null
  price?: Int | null
  images?: ItemUpdateimagesInput | null
}

export interface ItemUpdateWithWhereUniqueWithoutUserInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateWithoutUserDataInput
}

export interface ItemUpsertNestedInput {
  update: ItemUpdateDataInput
  create: ItemCreateInput
}

export interface ItemUpsertWithWhereUniqueWithoutUserInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateWithoutUserDataInput
  create: ItemCreateWithoutUserInput
}

export interface ItemWhereInput {
  AND?: ItemWhereInput[] | ItemWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  price?: Int | null
  price_not?: Int | null
  price_in?: Int[] | Int | null
  price_not_in?: Int[] | Int | null
  price_lt?: Int | null
  price_lte?: Int | null
  price_gt?: Int | null
  price_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
}

export interface ItemWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  username: String
  email: String
  password: String
  items?: ItemCreateManyWithoutUserInput | null
  cart?: CartItemCreateManyWithoutUserInput | null
}

export interface UserCreateOneWithoutCartInput {
  create?: UserCreateWithoutCartInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutItemsInput {
  create?: UserCreateWithoutItemsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutCartInput {
  id?: ID_Input | null
  username: String
  email: String
  password: String
  items?: ItemCreateManyWithoutUserInput | null
}

export interface UserCreateWithoutItemsInput {
  id?: ID_Input | null
  username: String
  email: String
  password: String
  cart?: CartItemCreateManyWithoutUserInput | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  username?: String | null
  email?: String | null
  password?: String | null
  items?: ItemUpdateManyWithoutUserInput | null
  cart?: CartItemUpdateManyWithoutUserInput | null
}

export interface UserUpdateManyMutationInput {
  username?: String | null
  email?: String | null
  password?: String | null
}

export interface UserUpdateOneRequiredWithoutCartInput {
  create?: UserCreateWithoutCartInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutCartDataInput | null
  upsert?: UserUpsertWithoutCartInput | null
}

export interface UserUpdateOneWithoutItemsInput {
  create?: UserCreateWithoutItemsInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutItemsDataInput | null
  upsert?: UserUpsertWithoutItemsInput | null
}

export interface UserUpdateWithoutCartDataInput {
  username?: String | null
  email?: String | null
  password?: String | null
  items?: ItemUpdateManyWithoutUserInput | null
}

export interface UserUpdateWithoutItemsDataInput {
  username?: String | null
  email?: String | null
  password?: String | null
  cart?: CartItemUpdateManyWithoutUserInput | null
}

export interface UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput
  create: UserCreateWithoutCartInput
}

export interface UserUpsertWithoutItemsInput {
  update: UserUpdateWithoutItemsDataInput
  create: UserCreateWithoutItemsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  joined?: DateTime | null
  joined_not?: DateTime | null
  joined_in?: DateTime[] | DateTime | null
  joined_not_in?: DateTime[] | DateTime | null
  joined_lt?: DateTime | null
  joined_lte?: DateTime | null
  joined_gt?: DateTime | null
  joined_gte?: DateTime | null
  items_some?: ItemWhereInput | null
  cart_some?: CartItemWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  username?: String | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateCartItem {
  count: Int
}

export interface AggregateItem {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface CartItem extends Node {
  id: ID_Output
  item: Item
  user: User
}

/*
 * A connection to a list of items.

 */
export interface CartItemConnection {
  pageInfo: PageInfo
  edges: Array<CartItemEdge | null>
  aggregate: AggregateCartItem
}

/*
 * An edge in a connection.

 */
export interface CartItemEdge {
  node: CartItem
  cursor: String
}

export interface CartItemPreviousValues {
  id: ID_Output
}

export interface CartItemSubscriptionPayload {
  mutation: MutationType
  node?: CartItem | null
  updatedFields?: Array<String> | null
  previousValues?: CartItemPreviousValues | null
}

export interface Item extends Node {
  id: ID_Output
  name: String
  description: String
  price: Int
  images: Array<String>
  createdAt: DateTime
  updatedAt: DateTime
  user?: User | null
}

/*
 * A connection to a list of items.

 */
export interface ItemConnection {
  pageInfo: PageInfo
  edges: Array<ItemEdge | null>
  aggregate: AggregateItem
}

/*
 * An edge in a connection.

 */
export interface ItemEdge {
  node: Item
  cursor: String
}

export interface ItemPreviousValues {
  id: ID_Output
  name: String
  description: String
  price: Int
  images: Array<String>
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ItemSubscriptionPayload {
  mutation: MutationType
  node?: Item | null
  updatedFields?: Array<String> | null
  previousValues?: ItemPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface User extends Node {
  id: ID_Output
  username: String
  email: String
  password: String
  joined: DateTime
  items?: Array<Item> | null
  cart?: Array<CartItem> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  username: String
  email: String
  password: String
  joined: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string
