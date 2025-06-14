import type { HttpContext } from '@adonisjs/core/http'
import Corso from '#models/corso'
import { checkIfInsegnante } from '#abilities/main'
export default class CorsosController {
  async index({}: HttpContext) {
    return Corso.all()
  }

  async store({ auth, request, response }: HttpContext) {
    await auth.authenticate()

    if (auth.user?.role !== 'insegnante') {
      return response.unauthorized({ message: 'Solo gli insegnanti possono creare corsi' })
    }

    const data = request.only(['titolo', 'descrizioneCorso', 'capacita'])

    const corso = await Corso.create({
      ...data,
      istruttoreId: auth.user.id, // assegna l'insegnante corrente
    })

    return response.created(corso)
  }

  async show({ params, response }: HttpContext) {
    const corso = await Corso.findByOrFail(params.id)
    return corso
  }

  async update({ auth, params, request, bouncer }: HttpContext) {
    await auth.authenticate()

    const corso = await Corso.findByOrFail(params.id)

    // Verifica permesso tramite Bouncer
    await bouncer.allows(checkIfInsegnante, corso)

    const data = request.only(['titolo', 'descrizioneCorso', 'capacita'])
    corso.merge(data)
    await corso.save()

    return corso
  }

  async destroy({ auth, params, bouncer }: HttpContext) {
    await auth.authenticate()

    const corso = await Corso.findByOrFail(params.id)

    // Verifica permesso tramite Bouncer
    await bouncer.allows(checkIfInsegnante, corso)

    await corso.delete()
    return { message: 'Corso eliminato con successo' }
  }
}
