import type { HttpContext } from '@adonisjs/core/http'
import Corso from '#models/corso'

export default class CorsosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Corso.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.only(['titolo', 'descrizioneCorso', 'capacita'])
    const corso = await Corso.create(data)
    return response.created(corso)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const corso = await Corso.findByOrFail(params.id)
    if (!corso) {
      return response.notFound({ message: 'corso non trovato' })
    }
    return corso
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const corso = await Corso.findByOrFail(params.id)
    if (!corso) {
      return response.notFound({ message: 'Corso non trovato' })
    }
    const data = request.only(['titolo', 'descrizioneCorso', 'capacita'])
    corso.merge(data)
    await corso.save()
    return corso
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const corso = await Corso.findByOrFail(params.id)
    if (!corso) {
      return response.notFound({ message: 'Impossibile cancellare il corso' })
    }

    await corso.delete()
    return { message: 'Corso eliminato con successo' }
  }
}
