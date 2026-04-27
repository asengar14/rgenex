const fs = require('fs');
const path = require('path');
const { loadConfig } = require('../config');
const Handlebars = require('../utils/helpers');
const { printFooter } = require('../utils/printFooter');
const chalk = require('chalk');
const inquirerModule = require('inquirer');
const inquirer = inquirerModule.default || inquirerModule;

async function generateCommand(type, name, options = {}) {
  const config = await loadConfig();
  if (!config) {
    console.error(chalk.red('No rgenex.config.js found. Run "rgenex init" first.'));
    return;
  }

  if (type === 'component') {
    await generateComponent(name, config, options);
  } else if (type === 'page') {
    await generatePage(name, config, options);
  } else if (type === 'hook') {
    await generateHook(name, config, options);
  } else {
    console.error(`Unknown type: ${type}`);
  }
}

async function generateComponent(name, config, options) {
  const basePath = path.join(process.cwd(), config.paths.components);
  const structure = config.generators.component.structure;
  const templateDir = path.join(__dirname, '../templates/component', structure);

  const data = {
    name,
    language: config.language,
    pascalCase: (str) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toUpperCase() : word.toUpperCase()).replace(/\s+/g, ''),
    useStyles: config.generators.component.includeStyle && config.styling !== 'none',
  };

  const files = [];

  if (structure === 'grouped') {
    files.push({
      template: path.join(templateDir, '__name__.tsx.hbs'),
      output: path.join(basePath, data.pascalCase(name), `${name}.tsx`),
    });
    files.push({
      template: path.join(templateDir, 'index.ts.hbs'),
      output: path.join(basePath, data.pascalCase(name), 'index.ts'),
    });
    if (config.generators.component.includeTest) {
      files.push({
        template: path.join(templateDir, '__name__.test.tsx.hbs'),
        output: path.join(basePath, data.pascalCase(name), `${name}.test.tsx`),
      });
    }
    if (data.useStyles) {
      files.push({
        template: path.join(templateDir, '__name__.module.scss.hbs'),
        output: path.join(basePath, data.pascalCase(name), `${name}.module.scss`),
      });
    }
  } else {
    files.push({
      template: path.join(templateDir, '__name__.tsx.hbs'),
      output: path.join(basePath, `${data.pascalCase(name)}.tsx`),
    });
    if (config.generators.component.includeTest) {
      files.push({
        template: path.join(templateDir, '__name__.test.tsx.hbs'),
        output: path.join(basePath, `${data.pascalCase(name)}.test.tsx`),
      });
    }
    if (data.useStyles) {
      files.push({
        template: path.join(templateDir, '__name__.module.scss.hbs'),
        output: path.join(basePath, `${data.pascalCase(name)}.module.scss`),
      });
    }
  }

  await executeGeneration(files, data, options);    
}

async function generatePage(name, config, options) {
  const basePath = path.join(process.cwd(), config.paths.pages);
  const templateDir = path.join(__dirname, '../templates/page');

  const data = {
    name,
    language: config.language,
    pascalCase: (str) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toUpperCase() : word.toUpperCase()).replace(/\s+/g, ''),
  };

  const files = [];

  files.push({
    template: path.join(templateDir, '__name__.tsx.hbs'),
    output: path.join(basePath, `${data.pascalCase(name)}.tsx`),
  });

  if (config.generators.component && config.generators.component.includeTest) {
    files.push({
      template: path.join(templateDir, '__name__.test.tsx.hbs'),
      output: path.join(basePath, `${data.pascalCase(name)}.test.tsx`),
    });
  }

  await executeGeneration(files, data, options);
}

async function generateHook(name, config, options) {
  const basePath = path.join(process.cwd(), config.paths.hooks);
  const templateDir = path.join(__dirname, '../templates/hook');

  const data = {
    name,
    language: config.language,
    camelCase: (str) => str.charAt(0).toLowerCase() + str.slice(1).replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word : word.toUpperCase()).replace(/\s+/g, ''),
  };

  const files = [];

  files.push({
    template: path.join(templateDir, '__name__.ts.hbs'),
    output: path.join(basePath, `${data.camelCase(name)}.ts`),
  });

  if (config.generators.hook && config.generators.hook.includeTest) {
    files.push({
      template: path.join(templateDir, '__name__.test.ts.hbs'),
      output: path.join(basePath, `${data.camelCase(name)}.test.ts`),
    });
  }

  await executeGeneration(files, data, options);
}

async function executeGeneration(files, data, options = {}) {
  // DRY RUN MODE
  if (options.dryRun) {
    console.log(chalk.cyan(`\nPreview (${files.length} file${files.length > 1 ? 's' : ''}):\n`));

    for (const file of files) {
      const relativePath = path.relative(process.cwd(), file.output);
      console.log(`${chalk.green('✔')} ${chalk.dim(relativePath)}`);
    }

    console.log(chalk.dim('\nNo files were written.'));

    console.log(chalk.gray('\n────────────────────────'));
    console.log(`${chalk.yellow('✨')} ${chalk.dim('Preview generated with')} ${chalk.cyan('rgenex')}\n`);

    return;
  }

  // CHECK EXISTING FILES
  const existingFiles = files.filter((file) => fs.existsSync(file.output));

  // PROMPT OVERWRITE IF NEEDED
  if (existingFiles.length > 0 && !options.force) {
    const { shouldOverwrite } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'shouldOverwrite',
        message: `${existingFiles.length} file(s) already exist. Overwrite all?`,
        default: false,
      },
    ]);

    if (!shouldOverwrite) {
      console.log(
        chalk.yellow('\n⚠ Generation cancelled. No files were overwritten.\n')
      );
      return;
    }
  }

  // WRITE FILES
  console.log(
    chalk.cyan(`\nGenerated (${files.length} file${files.length > 1 ? 's' : ''}):\n`)
  );

  for (const file of files) {
    const alreadyExists = fs.existsSync(file.output);

    const templateContent = fs.readFileSync(file.template, 'utf-8');
    const compiled = Handlebars.compile(templateContent)(data);

    const outputDir = path.dirname(file.output);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(file.output, compiled);

    const relativePath = path.relative(process.cwd(), file.output);

    if (alreadyExists) {
      console.log(
        `${chalk.yellow('↺ Overwritten')} ${chalk.dim(relativePath)}`
      );
    } else {
      console.log(
        `${chalk.green('✔ Created')} ${chalk.dim(relativePath)}`
      );
    }
  }

  printFooter();
}

module.exports = { generateCommand };