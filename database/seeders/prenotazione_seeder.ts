import { PrenotazioneFactory } from '#database/factories/prenotazione_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class PrenotazioneSeeder extends BaseSeeder {
  async run() {
    await PrenotazioneFactory.createMany(20)
  }
}
