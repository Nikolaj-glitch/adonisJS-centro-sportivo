import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
export default class UsersController {
  public async index() {
    //GET - ritorna tutti gli utenti con il .all
    return User.all()
  }

  //POST - crea utenza
  public async store({ request, response }: HttpContext) {
    const data = request.only(['full_name', 'email', 'password'])
    const user = await User.create(data)
    return response.created(user)
  }

  //GET - Otteniamo uno specifico user
  public async show({ params, response }: HttpContext) {
    const user = User.findByOrFail(params.id)
    if (!user) {
      return response.notFound({ message: 'Utente non trovato' })
    }
    return user
  }

  //PUT - modifichiamo lo specifico user
  public async update({ params, request, response }: HttpContext) {
    const user = await User.findByOrFail(params.id)
    if (!user) {
      return response.notFound({ message: 'Utente non trovato' })
    }
    const data = request.only(['full_name', 'email', 'password'])
    user.merge(data)
    await user.save()
    return user
  }

  //DELETE - cancello uno specifico
  public async destroy({ params, response }: HttpContext) {
    const user = await User.findByOrFail(params.id)
    if (!user) {
      return response.notFound({ message: 'Utente non trovato' })
    }
    await user.delete()
    return { message: 'Utente cancellato con successo' }
  }
}
