import { Bouncer } from '@adonisjs/bouncer'
import Corso from '#models/corso'
import Prenotazione from '#models/prenotazione'

export const checkIfInsegnante = Bouncer.ability(({ user }, corso: Corso) => {
  return user.role === 'insegnante' && user.id === corso.istruttoreId
})

export const checkIfStudent = Bouncer.ability(({ user }, prenotazione: Prenotazione) => {
  return user.role === 'studente' && user.id === prenotazione.utenteId
})
