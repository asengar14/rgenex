#!/usr/bin/env node

const { Command } = require('commander');
const { initCommand } = require('../src/commands/init');
const { generateCommand } = require('../src/commands/generate');
const { listCommand } = require('../src/commands/list');

const program = new Command();

program
  .name('rgenex')
  .description('Angular CLI-style code generator for React')
  .version('1.1.0');

program
  .command('init')
  .description('Initialize rgenex configuration for your project')
  .action(initCommand);

program
  .command('generate <type> <name>')
  .alias('g')
  .description('Generate a new component, hook, page, etc.')
  .option('--dry', 'Preview generated files without writing')
  .option('--force', 'Overwrite existing files without prompting')
  .action((type, name, options) => {
    generateCommand(type, name, {
      dryRun: options.dry,
      force: options.force,
    });
  });

  program
  .command('list')
  .description('List available generators')
  .action(listCommand);

program.parse();