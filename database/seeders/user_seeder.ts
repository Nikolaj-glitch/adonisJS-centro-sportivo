import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { UserFactory } from '#database/factories/user_factory'

export default class UserSeeder extends BaseSeeder {
  async run() {
    await UserFactory.merge({ role: 'insegnante' }).createMany(5)

    await UserFactory.merge({ role: 'studente' }).createMany(5)
  }
}
