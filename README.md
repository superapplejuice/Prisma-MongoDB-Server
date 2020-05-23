# Prisma MongoDB Server

This is a GraphQL server running on a Prisma client, with MongoDB as the database.

## Features

- Users
  - Register
  - Authentication
- Items
  - Create/read/update/delete items
- Cart
  - Add to cart
  - Remove from cart
  - Clear entire cart
- Single payments with [Stripe](https://stripe.com)
  - This requires a client application

### Next feature(s) to add:

- Testing
- Deployment

## Setup

1. Run `yarn install` to install package dependencies.

2. Create a `.env` file and add the following configurations:

```
PORT=9999 <- the port the server runs on

PRISMA_ENDPOINT=http://localhost:4466 <- Docker container port
PRISMA_MANAGEMENT_API_SECRET=<some_secret_key>
PRISMA_SECRET=<some_secret_key>

INITDB_USERNAME=<some_secret_admin>
INITDB_PASSWORD=<some_secret_password>

CLOUDINARY_PRESET=<your_cloudinary_preset>
CLOUDINARY_UPLOAD_URL=<your_cloudinary_upload_url>

MONGO_URI=mongodb+srv://<db_user_here>:<db_user_password>@cluster01.mongodb.net/

APP_SECRET=<some_secret_key>

STRIPE_SKEY=<your_stripe_secret_key>
```

**Note:** any changes to the `endpoint: '/graphql'` server options at the root `index.ts` or `PORT` in the `.env` file needs to be reflected in the `.graphqlconfig.yml` file.

3. Run `yarn prisma` to create the Docker container, and generate the Prisma schema

4. Run `yarn codegen` to generate the GraphQL resolver types

5. Run `yarn dev` to start the server. A message in the terminal will tell you where the GraphQL server endpoint is running.

6. ???

7. Profit
