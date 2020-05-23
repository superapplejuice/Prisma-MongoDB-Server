docker-compose up -d
prisma deploy --env-file .env

prettier --write "src/generated/*.ts"
