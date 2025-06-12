import Factory from '@adonisjs/lucid/factories'
import Corso from '#models/corso'
import { UserFactory } from './user_factory.js'

export const CorsoFactory = Factory.define(Corso, async ({ faker }) => {
  return {
    titolo: faker.lorem.words(), //Di base 3
    descrizioneCorso: faker.lorem.sentence(),
    capacita: faker.number.int({ min: 10, max: 30 }),
  }
})
  .relation('istruttore', () => UserFactory)
  .build()
