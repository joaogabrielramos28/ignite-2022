import setupKnex, { Knex } from 'knex'

export const config = {
  client: 'sqlite3',
  connection: {
    filename: './db/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
} as Knex.Config

export const knex = setupKnex(config)
