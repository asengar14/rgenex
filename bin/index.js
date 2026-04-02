#!/usr/bin/env node

const { Command } = require('commander');
const { initCommand } = require('../src/commands/init');
const { generateCommand } = require('../src/commands/generate');

const program = new Command();

program
  .name('rgenex')
  .description('Angular CLI-style code generator for React')
  .version('0.0.1');

program
  .command('init')
  .description('Initialize rgenex configuration for your project')
  .action(initCommand);

program
  .command('generate <type> <name>')
  .description('Generate a new component, hook, page, etc.')
  .action(generateCommand);

program.parse();