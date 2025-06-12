import type { HttpContext } from '@adonisjs/core/http'
import Prenotazione from '#models/prenotazione'

export default class PrenotazionesController {
  /**
   * GET /prenotaziones - List all prenotazioni
   */
  async index({}: HttpContext) {
    return Prenotazione.all()
  }

  /**
   * Crea una nuova prenotazione
   */
  async store({ request, response }: HttpContext) {
    const data = request.only(['dataPrenotazione'])
    const prenotazione = await Prenotazione.create(data)
    return response.created(prenotazione)
  }

  /**
   * Mostra una specifica prenotazione
   */
  async show({ params, response }: HttpContext) {
    const prenotazione = await Prenotazione.find(params.id)
    if (!prenotazione) {
      return response.notFound({ message: 'Prenotazione non trovata' })
    }
    return prenotazione
  }

  /**
   * Update a prenotazione
   */
  async update({ params, request, response }: HttpContext) {
    const prenotazione = await Prenotazione.find(params.id)
    if (!prenotazione) {
      return response.notFound({ message: 'Prenotazione non trovata' })
    }

    const data = request.only(['dataPrenotazione'])
    prenotazione.merge(data)
    await prenotazione.save()

    return prenotazione
  }

  /**
   * Delete prenotazione
   */
  async destroy({ params, response }: HttpContext) {
    const prenotazione = await Prenotazione.find(params.id)
    if (!prenotazione) {
      return response.notFound({ message: 'Impossibile cancellare la prenotazione' })
    }

    await prenotazione.delete()
    return { message: 'Prenotazione eliminata con successo' }
  }
}
