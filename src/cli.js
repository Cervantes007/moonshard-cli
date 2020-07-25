import inquirer from 'inquirer';
import { createProject } from './main';
import chalk from 'chalk';

export async function cli(rawArgs) {
  const options = await promptForOptions();
  await createProject(options);
}

async function promptForOptions(options = {}) {
  const questions = [];

  questions.push({
    type: 'text',
    name: 'name',
    message: 'Please enter the project name:',
  });

  const answers = await inquirer.prompt(questions);
  if (!answers.name) {
    console.error('%s Project name is required', chalk.red.bold('ERROR:'));
    process.exit(1);
  }
  return {
    name: answers.name,
    template: 'typescript',
    targetDirectory: options.targetDirectory || `${process.cwd()}/${answers.name}`,
  };
}
