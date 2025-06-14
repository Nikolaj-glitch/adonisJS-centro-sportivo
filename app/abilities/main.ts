import { Bouncer } from '@adonisjs/bouncer'
import Corso from '#models/corso'

export const checkIfInsegnante = Bouncer.ability(({ user }, corso: Corso) => {
  return user.role === 'insegnante' && user.id === corso.istruttoreId
})
