import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'corsi'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('istruttore_id').unsigned().notNullable().references('id').inTable('users')
      table.text('titolo').notNullable()
      table.text('descrizione_corso').notNullable()
      table.integer('capacita').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
