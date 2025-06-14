import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import Corso from './corso.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Prenotazione from './prenotazione.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'full_name' })
  declare fullName: string | null

  @column()
  declare email: string

  @column()
  declare role: string

  @column({ serializeAs: null })
  declare password: string

  @hasMany(() => Corso, { foreignKey: 'istruttoreId' })
  declare corsi: HasMany<typeof Corso>

  @hasMany(() => Prenotazione, { foreignKey: 'utenteId' })
  declare prenotazioni: HasMany<typeof Prenotazione>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(User)
}
