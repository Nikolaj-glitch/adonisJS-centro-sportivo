import factory from '@adonisjs/lucid/factories'
import Corso from '#models/corso'
import User from '#models/user'

export const CorsoFactory = factory
  .define(Corso, async ({ faker }) => {
    const istruttore = await User.query()
      .where('role', 'insegnante') //Query per trovare il ruolo corretto
      .orderByRaw('RANDOM()')
      .firstOrFail()

    return {
      titolo: faker.word.noun(),
      descrizioneCorso: faker.lorem.sentence(),
      capacita: faker.number.int({ min: 10, max: 30 }),
      istruttoreId: istruttore.id,
    }
  })
  .build()
