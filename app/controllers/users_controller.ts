import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  public async index() {
    //GET - ritorna tutti gli utenti con il .all
    return User.all()
  }

  //POST - crea utenza
  public async store({ request }: HttpContext) {
    const data = request.only(['full_name', 'email', 'password'])
    return User.create(data)
  }

  //GET - Otteniamo uno specifico user
  public async show({ params }: HttpContext) {
    return User.findByOrFail(params.id)
  }

  //PUT - modifichiamo lo specifico user
  public async edit({ params, request }: HttpContext) {
    const user = await User.findByOrFail(params.id)
    const data = request.only(['full_name', 'email', 'password'])
    user.merge(data)
    await user.save()
    return user
  }

  //DELETE - cancello uno specifico
  public async destroy({ params }: HttpContext) {
    const user = await User.findByOrFail(params.id)
    await user.delete()
    return { message: 'Utente cancellato con successo' }
  }
}
