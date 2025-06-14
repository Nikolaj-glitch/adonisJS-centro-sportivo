import { HttpContext } from '@adonisjs/core/http'

export default class IsInsegnante {
  public async handle({ auth, response }: HttpContext, next: () => Promise<void>) {
    await auth.authenticate()
    if (auth.user?.role !== 'insegnante') {
      return response.unauthorized({ message: 'Accesso riservato agli insegnanti' })
    }
    await next()
  }
}
