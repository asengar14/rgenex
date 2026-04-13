const fs = require('fs');
const path = require('path');
const { loadConfig } = require('../config');
const Handlebars = require('../utils/helpers');
const chalk = require('chalk');

async function generateCommand(type, name) {
  const config = await loadConfig();
  if (!config) {
    console.error(chalk.red('No rgenex.config.js found. Run "rgenex init" first.'));
    return;
  }

  if (type === 'component') {
    await generateComponent(name, config);
  } else if (type === 'page') {
    await generatePage(name, config);
  } else if (type === 'hook') {
    await generateHook(name, config);
  } else {
    console.error(`Unknown type: ${type}`);
  }
}

async function generateComponent(name, config) {
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

  for (const file of files) {
    const templateContent = fs.readFileSync(file.template, 'utf-8');
    const compiled = Handlebars.compile(templateContent)(data);
    const outputDir = path.dirname(file.output);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(file.output, compiled);
    
    const relativePath = path.relative(process.cwd(), file.output);
    console.log(`${chalk.green('✔ Created')} ${chalk.dim(relativePath)}`);
  }
  printFooter();
}

async function generatePage(name, config) {
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

  for (const file of files) {
    const templateContent = fs.readFileSync(file.template, 'utf-8');
    const compiled = Handlebars.compile(templateContent)(data);
    const outputDir = path.dirname(file.output);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(file.output, compiled);
    const relativePath = path.relative(process.cwd(), file.output);
    console.log(`${chalk.green('✔ Created')} ${chalk.dim(relativePath)}`);
  }
  printFooter();
}

async function generateHook(name, config) {
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

  for (const file of files) {
    const templateContent = fs.readFileSync(file.template, 'utf-8');
    const compiled = Handlebars.compile(templateContent)(data);
    const outputDir = path.dirname(file.output);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(file.output, compiled);
    const relativePath = path.relative(process.cwd(), file.output);
    console.log(`${chalk.green('✔ Created')} ${chalk.dim(relativePath)}`);
  }
  printFooter();
}

async function printFooter() {
  console.log(chalk.gray('\n────────────────────────'));

console.log(`${chalk.yellow('✨')} ${chalk.dim('Generated with')} ${chalk.cyan('rgenex')}\n`);
}

module.exports = { generateCommand };