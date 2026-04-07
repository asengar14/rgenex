const Handlebars = require('handlebars');

Handlebars.registerHelper('pascalCase', (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toUpperCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
});

Handlebars.registerHelper('camelCase', (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
});

Handlebars.registerHelper('kebabCase', (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
});

Handlebars.registerHelper('ifEquals', function(a, b, options) {
  if (a === b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

module.exports = Handlebars;