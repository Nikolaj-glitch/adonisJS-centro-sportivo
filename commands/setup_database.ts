import { BaseCommand } from '@adonisjs/core/ace'

export default class SetupDatabase extends BaseCommand {
  public static commandName = 'db:setup'
  public static description = 'Run migrations and seeders to setup database'

  public async run() {
    await this.kernel.exec('migration:rollback', ['--batch', '0'])
    await this.kernel.exec('migration:run', [])

    this.logger.success('Database setup complete!')
  }
}
