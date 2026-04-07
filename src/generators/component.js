const path = require('path');

function getComponentGenerator(config) {
  const basePath = path.join(process.cwd(), config.paths.components);
  const structure = config.generators.component.structure;
  const templateDir = path.join(__dirname, '../templates/component', structure);

  const actions = [];

  if (structure === 'grouped') {
    actions.push({
      type: 'add',
      path: path.join(basePath, '{{pascalCase name}}/{{name}}.tsx'),
      templateFile: path.join(templateDir, '__name__.tsx.hbs'),
    });
    actions.push({
      type: 'add',
      path: path.join(basePath, '{{pascalCase name}}/index.ts'),
      templateFile: path.join(templateDir, 'index.ts.hbs'),
    });
    if (config.generators.component.includeTest) {
      actions.push({
        type: 'add',
        path: path.join(basePath, '{{pascalCase name}}/{{name}}.test.tsx'),
        templateFile: path.join(templateDir, '__name__.test.tsx.hbs'),
      });
    }
    if (config.generators.component.includeStyle) {
      actions.push({
        type: 'add',
        path: path.join(basePath, '{{pascalCase name}}/{{name}}.module.scss'),
        templateFile: path.join(templateDir, '__name__.module.scss.hbs'),
      });
    }
  } else if (structure === 'flat') {
    actions.push({
      type: 'add',
      path: path.join(basePath, '{{pascalCase name}}.tsx'),
      templateFile: path.join(templateDir, '__name__.tsx.hbs'),
    });
    if (config.generators.component.includeTest) {
      actions.push({
        type: 'add',
        path: path.join(basePath, '{{pascalCase name}}.test.tsx'),
        templateFile: path.join(templateDir, '__name__.test.tsx.hbs'),
      });
    }
    if (config.generators.component.includeStyle) {
      actions.push({
        type: 'add',
        path: path.join(basePath, '{{pascalCase name}}.module.scss'),
        templateFile: path.join(templateDir, '__name__.module.scss.hbs'),
      });
    }
  }

  return {
    description: 'Generate a React component',
    prompts: [], // No prompts, name from CLI
    actions,
  };
}

module.exports = getComponentGenerator;