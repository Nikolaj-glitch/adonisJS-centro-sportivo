import factory from '@adonisjs/lucid/factories'
import Prenotazione from '#models/prenotazione'
import { UserFactory } from './user_factory.js'
import { CorsoFactory } from './corso_factory.js'
import { DateTime } from 'luxon'

export const PrenotazioneFactory = factory
  .define(Prenotazione, async ({ faker }) => {
    return {
      dataPrenotazione: DateTime.fromJSDate(faker.date.recent()),
    }
  })
  .relation('utente', () => UserFactory)
  .relation('corso', () => CorsoFactory)
  .build()
