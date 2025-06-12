import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Prenotazione from './prenotazione.js'

export default class Corso extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare titolo: string

  @column()
  declare descrizioneCorso: string

  @column()
  declare capacita: number

  @column()
  declare istruttoreId: number

  @belongsTo(() => User, { foreignKey: 'istruttoreId' })
  declare istruttore: BelongsTo<typeof User>

  @hasMany(() => Prenotazione)
  declare prenotazione: HasMany<typeof Prenotazione>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
