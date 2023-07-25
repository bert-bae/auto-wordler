# Auto Wordle

Automatically solves the wordle problems

## Setup

1. Install dependencies: `npm i`
2. Install docker.
3. Run postgres w/ `docker compose up`
4. Install sequelize CLI with: `npm i -g sequelize-cli`
5. Run migration: `sequelize db:migrate`
6. Copy `.env-template` to `.env` with database connection values.
7. Start: `npm run start`
8. Provide a 5 letter word. The application will solve it on its own.

# Sequelize commands

- sequelize db:migrate # Run pending migrations.
- sequelize db:migrate:undo # Revert the last migration run.
- sequelize help # Display this help text.
- sequelize init # Initializes the project.
- sequelize migration:create # Generates a new migration file.
- sequelize version # Prints the version number.
