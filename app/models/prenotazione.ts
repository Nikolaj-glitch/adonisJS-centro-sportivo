import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import Corso from './corso.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Prenotazione extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare utenteId: number

  @column()
  declare corsoId: number

  @column.date()
  declare dataPrenotazione: DateTime

  @belongsTo(() => User)
  declare utente: BelongsTo<typeof User>

  @belongsTo(() => Corso)
  declare corso: BelongsTo<typeof Corso>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
