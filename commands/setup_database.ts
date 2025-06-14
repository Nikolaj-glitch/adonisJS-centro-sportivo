import { BaseCommand } from '@adonisjs/core/ace'

export default class SetupDatabase extends BaseCommand {
  public static commandName = 'db:setup'
  public static description = 'Settiamo il DB'

  public async run() {
    await this.kernel.exec('migration:rollback', ['--batch', '0'])
    await this.kernel.exec('migration:run', [])
    await this.kernel.exec('db:seed', [])
    this.logger.success('Database setup completato!')
  }
}
