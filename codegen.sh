docker-compose up -d
prisma deploy --env-file .env
graphql-codegen --config codegen.yml

prettier --write "src/generated/*.ts"