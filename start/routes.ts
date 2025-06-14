import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router
  .group(() => {
    router.resource('corsi', 'corsos_controller').apiOnly()
  })
  .use(middleware.isInsegnante())

router.resource('user', 'UsersController').apiOnly()
router.resource('prenotaziones', 'PrenotazionesController').apiOnly()
