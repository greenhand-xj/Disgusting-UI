import { Command } from 'commander'
import inquirer from 'inquirer'

const program = new Command()
const CREATE_TYPE = ['components', 'lib-entry']

program
  .command('create')
  .description('创建一个组件的template或配置文件')
  .option('-t --type <type>', '创建类型，可选值：component，lib-entry')
  .action(async (args) => {
    let { type } = args
    if (!type) {
      const result = await inquirer.prompt([
        {
          name: 'type',
          type: 'list',
          message: '(必填) 请选择创建类型',
          choices: CREATE_TYPE,
          default: 0,
        },
      ])
      type = result.type
    }
  })
program.parse()
