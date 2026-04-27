const chalk = require('chalk');

async function printFooter(label = 'Generated with') {
  console.log(chalk.gray('\n────────────────────────'));
  console.log(
    `${chalk.yellow('✨')} ${chalk.dim(label)} ${chalk.cyan('rgenex')}\n`
  );
}

module.exports = { printFooter };