import setupKnex, { Knex } from 'knex'
import { env } from './env'

export const config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    database: env.DATABASE_NAME,
    user: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
  },

  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
} as Knex.Config

export const knex = setupKnex(config)
