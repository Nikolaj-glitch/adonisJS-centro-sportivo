import Factory from '@adonisjs/lucid/factories'
import User from '#models/user'

export const UserFactory = Factory.define(User, async ({ faker }) => {
  return {
    full_name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(['utente', 'insegnante']),
    password: faker.internet.password(),
  }
}).build()
