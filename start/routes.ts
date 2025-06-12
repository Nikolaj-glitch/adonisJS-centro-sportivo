import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('user', 'UsersController').apiOnly()
router.resource('prenotaziones', 'PrenotazionesController').apiOnly()
router.resource('corsi', 'corsos_controller').apiOnly()
