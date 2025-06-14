import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class IndexSeeder extends BaseSeeder {
  public async run() {
    const { default: UserSeeder } = await import('#database/seeders/user_seeder')
    const { default: CorsoSeeder } = await import('#database/seeders/corso_seeder')
    const { default: PrenotazioneSeeder } = await import('#database/seeders/prenotazione_seeder')

    await new UserSeeder(this.client).run()
    await new CorsoSeeder(this.client).run()
    await new PrenotazioneSeeder(this.client).run()
  }
}
