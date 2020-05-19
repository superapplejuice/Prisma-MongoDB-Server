# Prisma MongoDB Server

This is a GraphQL server initialised by Prisma, with MongoDB as the database. The GraphQL server runs on GraphQL Yoga.

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

Next feature(s) to add:

- Stripe payments

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
```

3. Run `yarn codegen` to create the Docker container, and generate the Prisma schema and GraphQL resolver types

4. ???

5. Profit
