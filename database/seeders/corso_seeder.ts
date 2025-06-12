import { CorsoFactory } from '#database/factories/corso_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await CorsoFactory.makeMany(5)
  }
}
