# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2026-04-13

### Added

- First stable release of rgenex (v1.0.1 was pre-release preparation)
- **Component generation** with configurable structure (grouped/flat)
  - Auto-generates component file (.tsx)
  - Auto-generates test file (.test.tsx)
  - Auto-generates styles (.module.scss)
  - Auto-generates barrel export (index.ts) for grouped structure
- **Hook generation** with TypeScript support
  - Auto-generates custom hook (.ts)
  - Auto-generates test file (.test.ts)
- **Page generation** for route-based components
  - Auto-generates page component (.tsx)
  - Auto-generates test file (.test.tsx)
- **Configuration system** (rgenex.config.js)
  - TypeScript and JavaScript support
  - SCSS Modules, Tailwind CSS, and plain CSS support
  - Vitest, Jest, and no testing framework options
  - Customizable folder paths and generation options
- **Smart stack detection** during `rgenex init`
  - Auto-detects language (TypeScript/JavaScript)
  - Auto-detects styling framework
  - Auto-detects testing framework
- **Template system** using Handlebars
  - Customizable Handlebars templates
  - PascalCase naming for components
  - camelCase naming for hooks
- **CLI commands**
  - `rgenex init` - Initialize configuration
  - `rgenex generate <type> <name>` - Generate code
  - `rgenex g <type> <name>` - Shorthand alias
- **Cross-platform support** (Windows, macOS, Linux)
- **Comprehensive documentation**
  - README.md with quick start
  - QUICK_START.md with detailed examples
  - CONTRIBUTING.md for contributors

### Features

- ✨ Instant scaffold generation with single command
- 🎯 Enforces consistent code structure
- 🧪 Built-in test file generation
- 🎨 Smart technology stack detection
- 📦 Zero production bundle impact (dev-only)
- 🔧 Fully customizable via config
- 🚀 Angular CLI-inspired developer experience

### Performance

- Package size: 4.2 KB (compressed) / 16.9 KB (unpacked)
- Generation time: ~1-2 seconds per scaffold
- No runtime dependencies in generated code

---

## [Unreleased]

Planned features for future releases:

- More scaffold types (services, utilities, etc.)
- ESLint/Prettier integration
- Custom template scaffolding
- Plugin system
- Interactive prompts for configuration
- Watch mode for auto-generation
