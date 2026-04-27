const fs = require('fs');
const path = require('path');
const { loadConfig, getDefaultConfig } = require('../config');
const { printFooter } = require('../utils/printFooter');
const chalk = require('chalk');

async function detectProjectStack() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    return {};
  }
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

  const detection = {
    language: deps.typescript ? 'typescript' : 'javascript',
    styling: 'none',
    testing: 'none',
  };

  if (deps['sass'] || deps['scss']) {
    detection.styling = 'scss-modules';
  } else if (deps['tailwindcss']) {
    detection.styling = 'tailwind';
  }

  if (deps['vitest']) {
    detection.testing = 'vitest';
  } else if (deps['jest']) {
    detection.testing = 'jest';
  }

  return detection;
}

async function initCommand() {
  console.log(`${chalk.cyan('⚙')} ${chalk.dim('Initializing')} ${chalk.cyan('rgenex')}...`);

  const existingConfig = await loadConfig();
  if (existingConfig) {
    console.log(`${chalk.yellow('⚠')} ${chalk.dim('rgenex.config.js already exists.')}`);
    return;
  }

  const detected = await detectProjectStack();
  console.log(`${chalk.cyan('🔍 Detected:')} ${chalk.dim(`${detected.language}, ${detected.styling}, ${detected.testing}`)}`);

  // For now, use defaults; later add prompts
  const config = getDefaultConfig();
  // Merge detected
  config.language = detected.language;
  config.styling = detected.styling;
  config.testing = detected.testing;

  const packageJsonPath = path.join(process.cwd(), 'package.json');
  let configFilename = 'rgenex.config.js';
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    if (packageJson.type === 'module') {
      configFilename = 'rgenex.config.cjs';
    }
  }

  const configPath = path.join(process.cwd(), configFilename);
  const configContent = `module.exports = ${JSON.stringify(config, null, 2)};`;

  fs.writeFileSync(configPath, configContent);
  printFooter();
}

module.exports = { initCommand };