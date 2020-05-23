import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import { Context } from './context'
export type Maybe<T> = T | null
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
  /**
   * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
   */
  Long: any
}

export type AggregateCartItem = {
  __typename?: 'AggregateCartItem'
  count: Scalars['Int']
}

export type AggregateItem = {
  __typename?: 'AggregateItem'
  count: Scalars['Int']
}

export type AggregateUser = {
  __typename?: 'AggregateUser'
  count: Scalars['Int']
}

export type Alert = {
  __typename?: 'Alert'
  error: Scalars['Boolean']
  message: Scalars['String']
}

export type CartItem = Node & {
  __typename?: 'CartItem'
  id: Scalars['ID']
  item: Item
  user: User
}

/** An edge in a connection. */
export type CartItemEdge = {
  __typename?: 'CartItemEdge'
  /** The item at the end of the edge. */
  node: CartItem
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export type CartItemPreviousValues = {
  __typename?: 'CartItemPreviousValues'
  id: Scalars['ID']
}

export type CartItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CartItemWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  item?: Maybe<ItemWhereInput>
  user?: Maybe<UserWhereInput>
}

export type CreateItemInput = {
  name: Scalars['String']
  description: Scalars['String']
  price: Scalars['Int']
  images: Array<Scalars['Upload']>
}

export type FetchItemsInput = {
  where?: Maybe<ItemWhereInput>
  orderBy?: Maybe<ItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type Item = Node & {
  __typename?: 'Item'
  id: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  price: Scalars['Int']
  images: Array<Scalars['String']>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  user?: Maybe<User>
}

/** An edge in a connection. */
export type ItemEdge = {
  __typename?: 'ItemEdge'
  /** The item at the end of the edge. */
  node: Item
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum ItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ItemPreviousValues = {
  __typename?: 'ItemPreviousValues'
  id: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  price: Scalars['Int']
  images: Array<Scalars['String']>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type ItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ItemWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  user?: Maybe<UserWhereInput>
}

export type LoginUserInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MakePaymentInput = {
  amount: Scalars['Int']
  paymentMethodId: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createItem: Item
  updateItem: Item
  deleteItem?: Maybe<Item>
  registerUser: User
  loginUser: User
  logoutUser: Alert
  addToCart: CartItem
  removeFromCart?: Maybe<CartItem>
  clearCart: Array<Maybe<CartItem>>
  makePayment: Alert
}

export type MutationCreateItemArgs = {
  data: CreateItemInput
}

export type MutationUpdateItemArgs = {
  data: UpdateItemInput
}

export type MutationDeleteItemArgs = {
  id: Scalars['ID']
}

export type MutationRegisterUserArgs = {
  data: RegisterUserInput
}

export type MutationLoginUserArgs = {
  data: LoginUserInput
}

export type MutationAddToCartArgs = {
  id: Scalars['ID']
}

export type MutationRemoveFromCartArgs = {
  id: Scalars['ID']
}

export type MutationMakePaymentArgs = {
  data: MakePaymentInput
}

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED',
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  fetchItems: Array<Maybe<Item>>
  fetchItem: Item
  fetchCurrentUser?: Maybe<User>
  fetchUser?: Maybe<User>
  fetchCart: Array<Maybe<CartItem>>
}

export type QueryFetchItemsArgs = {
  data?: Maybe<FetchItemsInput>
}

export type QueryFetchItemArgs = {
  id: Scalars['ID']
}

export type QueryFetchUserArgs = {
  id: Scalars['ID']
}

export type RegisterUserInput = {
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type UpdateItemInput = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  images?: Maybe<Array<Scalars['Upload']>>
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  username: Scalars['String']
  email: Scalars['String']
  joined: Scalars['DateTime']
}

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** The item at the end of the edge. */
  node: User
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export type UserPreviousValues = {
  __typename?: 'UserPreviousValues'
  id: Scalars['ID']
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  joined: Scalars['DateTime']
}

export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  username?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  username_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  username_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  username_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  username_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  username_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  username_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  username_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  username_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  username_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  username_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  username_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  username_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  username_not_ends_with?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>
  joined?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  joined_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  joined_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  joined_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  joined_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  joined_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  joined_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  joined_gte?: Maybe<Scalars['DateTime']>
  items_some?: Maybe<ItemWhereInput>
  cart_some?: Maybe<CartItemWhereInput>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type Resolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> = ResolverFn<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type isTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>
  fetchItemsInput: FetchItemsInput
  ItemWhereInput: ItemWhereInput
  ID: ResolverTypeWrapper<Scalars['ID']>
  String: ResolverTypeWrapper<Scalars['String']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>
  UserWhereInput: UserWhereInput
  CartItemWhereInput: CartItemWhereInput
  ItemOrderByInput: ItemOrderByInput
  Item: ResolverTypeWrapper<Item>
  Node: ResolversTypes['Item'] | ResolversTypes['CartItem']
  User: ResolverTypeWrapper<User>
  CartItem: ResolverTypeWrapper<CartItem>
  Mutation: ResolverTypeWrapper<{}>
  createItemInput: CreateItemInput
  Upload: ResolverTypeWrapper<Scalars['Upload']>
  updateItemInput: UpdateItemInput
  registerUserInput: RegisterUserInput
  loginUserInput: LoginUserInput
  Alert: ResolverTypeWrapper<Alert>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  makePaymentInput: MakePaymentInput
  Long: ResolverTypeWrapper<Scalars['Long']>
  PageInfo: ResolverTypeWrapper<PageInfo>
  CartItemEdge: ResolverTypeWrapper<CartItemEdge>
  AggregateCartItem: ResolverTypeWrapper<AggregateCartItem>
  MutationType: MutationType
  CartItemPreviousValues: ResolverTypeWrapper<CartItemPreviousValues>
  ItemEdge: ResolverTypeWrapper<ItemEdge>
  AggregateItem: ResolverTypeWrapper<AggregateItem>
  ItemPreviousValues: ResolverTypeWrapper<ItemPreviousValues>
  UserEdge: ResolverTypeWrapper<UserEdge>
  AggregateUser: ResolverTypeWrapper<AggregateUser>
  UserPreviousValues: ResolverTypeWrapper<UserPreviousValues>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {}
  fetchItemsInput: FetchItemsInput
  ItemWhereInput: ItemWhereInput
  ID: Scalars['ID']
  String: Scalars['String']
  Int: Scalars['Int']
  DateTime: Scalars['DateTime']
  UserWhereInput: UserWhereInput
  CartItemWhereInput: CartItemWhereInput
  ItemOrderByInput: ItemOrderByInput
  Item: Item
  Node: ResolversParentTypes['Item'] | ResolversParentTypes['CartItem']
  User: User
  CartItem: CartItem
  Mutation: {}
  createItemInput: CreateItemInput
  Upload: Scalars['Upload']
  updateItemInput: UpdateItemInput
  registerUserInput: RegisterUserInput
  loginUserInput: LoginUserInput
  Alert: Alert
  Boolean: Scalars['Boolean']
  makePaymentInput: MakePaymentInput
  Long: Scalars['Long']
  PageInfo: PageInfo
  CartItemEdge: CartItemEdge
  AggregateCartItem: AggregateCartItem
  MutationType: MutationType
  CartItemPreviousValues: CartItemPreviousValues
  ItemEdge: ItemEdge
  AggregateItem: AggregateItem
  ItemPreviousValues: ItemPreviousValues
  UserEdge: UserEdge
  AggregateUser: AggregateUser
  UserPreviousValues: UserPreviousValues
}

export type AggregateCartItemResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['AggregateCartItem'] = ResolversParentTypes['AggregateCartItem']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AggregateItemResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['AggregateItem'] = ResolversParentTypes['AggregateItem']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AggregateUserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['AggregateUser'] = ResolversParentTypes['AggregateUser']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AlertResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Alert'] = ResolversParentTypes['Alert']
> = {
  error?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type CartItemResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type CartItemEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['CartItemEdge'] = ResolversParentTypes['CartItemEdge']
> = {
  node?: Resolver<ResolversTypes['CartItem'], ParentType, ContextType>
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type CartItemPreviousValuesResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['CartItemPreviousValues'] = ResolversParentTypes['CartItemPreviousValues']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type ItemResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  images?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type ItemEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ItemEdge'] = ResolversParentTypes['ItemEdge']
> = {
  node?: Resolver<ResolversTypes['Item'], ParentType, ContextType>
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type ItemPreviousValuesResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ItemPreviousValues'] = ResolversParentTypes['ItemPreviousValues']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  images?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export interface LongScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long'
}

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createItem?: Resolver<
    ResolversTypes['Item'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateItemArgs, 'data'>
  >
  updateItem?: Resolver<
    ResolversTypes['Item'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateItemArgs, 'data'>
  >
  deleteItem?: Resolver<
    Maybe<ResolversTypes['Item']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteItemArgs, 'id'>
  >
  registerUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationRegisterUserArgs, 'data'>
  >
  loginUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationLoginUserArgs, 'data'>
  >
  logoutUser?: Resolver<ResolversTypes['Alert'], ParentType, ContextType>
  addToCart?: Resolver<
    ResolversTypes['CartItem'],
    ParentType,
    ContextType,
    RequireFields<MutationAddToCartArgs, 'id'>
  >
  removeFromCart?: Resolver<
    Maybe<ResolversTypes['CartItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveFromCartArgs, 'id'>
  >
  clearCart?: Resolver<
    Array<Maybe<ResolversTypes['CartItem']>>,
    ParentType,
    ContextType
  >
  makePayment?: Resolver<
    ResolversTypes['Alert'],
    ParentType,
    ContextType,
    RequireFields<MutationMakePaymentArgs, 'data'>
  >
}

export type NodeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']
> = {
  __resolveType: TypeResolveFn<'Item' | 'CartItem', ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
}

export type PageInfoResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  startCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  fetchItems?: Resolver<
    Array<Maybe<ResolversTypes['Item']>>,
    ParentType,
    ContextType,
    RequireFields<QueryFetchItemsArgs, never>
  >
  fetchItem?: Resolver<
    ResolversTypes['Item'],
    ParentType,
    ContextType,
    RequireFields<QueryFetchItemArgs, 'id'>
  >
  fetchCurrentUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType
  >
  fetchUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryFetchUserArgs, 'id'>
  >
  fetchCart?: Resolver<
    Array<Maybe<ResolversTypes['CartItem']>>,
    ParentType,
    ContextType
  >
}

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  joined?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type UserEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']
> = {
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type UserPreviousValuesResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['UserPreviousValues'] = ResolversParentTypes['UserPreviousValues']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  joined?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type Resolvers<ContextType = Context> = {
  AggregateCartItem?: AggregateCartItemResolvers<ContextType>
  AggregateItem?: AggregateItemResolvers<ContextType>
  AggregateUser?: AggregateUserResolvers<ContextType>
  Alert?: AlertResolvers<ContextType>
  CartItem?: CartItemResolvers<ContextType>
  CartItemEdge?: CartItemEdgeResolvers<ContextType>
  CartItemPreviousValues?: CartItemPreviousValuesResolvers<ContextType>
  DateTime?: GraphQLScalarType
  Item?: ItemResolvers<ContextType>
  ItemEdge?: ItemEdgeResolvers<ContextType>
  ItemPreviousValues?: ItemPreviousValuesResolvers<ContextType>
  Long?: GraphQLScalarType
  Mutation?: MutationResolvers<ContextType>
  Node?: NodeResolvers
  PageInfo?: PageInfoResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Upload?: GraphQLScalarType
  User?: UserResolvers<ContextType>
  UserEdge?: UserEdgeResolvers<ContextType>
  UserPreviousValues?: UserPreviousValuesResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>
