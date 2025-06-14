import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'sqlite',
  connections: {
    sqlite: {
      client: 'sqlite3',
      connection: {
        filename: env.get('DB_DATABASE', './db.sqlite3'),
      },
      useNullAsDefault: true,
      pool: {
        min: 2,
        max: 5,
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
      seeders: {
        paths: ['./database/seeders/main'],
      },
    },
  },
})

export default dbConfig
