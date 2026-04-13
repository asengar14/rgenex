const { cosmiconfig } = require('cosmiconfig');

const explorer = cosmiconfig('rgenex');

async function loadConfig() {
  try {
    const result = await explorer.search();
    return result ? result.config : null;
  } catch (error) {
    console.error('Error loading config:', error);
    return null;
  }
}

function getDefaultConfig() {
  return {
    language: 'typescript',
    styling: 'scss-modules',
    testing: 'vitest',
    paths: {
      components: 'src/components',
      pages: 'src/pages',
      hooks: 'src/hooks',
    },
    generators: {
      component: {
        structure: 'grouped',
        includeTest: true,
        includeStyle: true,
        updateBarrel: true,
      },
      page: {
        includeTest: true,
      },
      hook: {
        includeTest: true,
      },
    },
  };
}

module.exports = { loadConfig, getDefaultConfig };