const chalk = require('chalk');
const { loadConfig } = require('../config');

async function listCommand() {
  const config = await loadConfig();

  if (!config) {
    console.error(
      chalk.red('No rgenex.config.js found. Run "rgenex init" first.')
    );
    return;
  }

  const generators = Object.keys(config.generators || {});

  if (generators.length === 0) {
    console.log(chalk.yellow('No generators configured.'));
    return;
  }

  console.log(chalk.cyan('\nAvailable Generators:\n'));

  generators.forEach((generator) => {
    console.log(`${chalk.green('•')} ${generator}`);
  });

  console.log();
}

module.exports = { listCommand };