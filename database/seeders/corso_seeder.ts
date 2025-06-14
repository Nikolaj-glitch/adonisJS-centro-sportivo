import { CorsoFactory } from '#database/factories/corso_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class CorsoSeeder extends BaseSeeder {
  async run() {
    await CorsoFactory.createMany(5)
  }
}
