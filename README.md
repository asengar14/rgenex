# rgenex

[![npm version](https://img.shields.io/npm/v/rgenex)](https://www.npmjs.com/package/rgenex)
[![license](https://img.shields.io/npm/l/rgenex)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/rgenex)](https://www.npmjs.com/package/rgenex)

**Configuration-driven code generator for React.** Define your code structure once in `rgenex.config.js` and enforce it across your entire team.

## 🚀 Quick Start

```bash
npm install --save-dev rgenex
npx rgenex init          # Creates rgenex.config.js based on your stack
npx rgenex generate component Button
# or use the shorthand alias
npx rgenex g component Button
```

## ✨ Core Features

- 🎯 **Config-Driven Generation** — Define your code structure, naming conventions, and file patterns once in `rgenex.config.js`
- 👥 **Team Standardization** — Enforce consistent architecture across your entire team
- ⚡ **Instant Scaffolding** — Generate complete components, hooks, and pages with one command
- 🧪 **Built-in Tests** — Auto-generate test files (Vitest, Jest)
- 🎨 **Smart Stack Detection** — Auto-detects your tech stack (TypeScript, styling, testing)
- 📦 **Zero Bundle Impact** — Dev-only tool, completely removed after build
- 🔧 **Fully Customizable** — Adapt templates, paths, naming conventions to your needs

## 📖 Documentation

- **[QUICK_START.md](./QUICK_START.md)** — Complete guide with examples for all generators
- **[CHANGELOG.md](./CHANGELOG.md)** — Release history
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** — Contributing guidelines

## 💡 What It Generates

### Components

```bash
npx rgenex generate component Button
npx rgenex g component Button
```

Creates: `Button.tsx`, `Button.test.tsx`, `Button.module.scss`, and `index.ts` (optional grouped structure)

### Hooks

```bash
npx rgenex generate hook useCounter
npx rgenex g hook useCounter
```

Creates: `useCounter.ts` and `useCounter.test.ts`

### Pages

```bash
npx rgenex generate page Dashboard
npx rgenex g page Dashboard
```

Creates: `Dashboard.tsx` and `Dashboard.test.tsx`

## ⚙️ Configuration - The Real Power

Once you create `rgenex.config.js` with `npx rgenex init`, **define once, use everywhere**:

```javascript
// rgenex.config.js - Your team's code standards
module.exports = {
  language: "typescript", // Enforce TypeScript
  styling: "scss-modules", // Your design system
  testing: "vitest", // Your test framework

  paths: {
    components: "src/components", // Where to generate
    pages: "src/pages",
    hooks: "src/hooks",
  },

  generators: {
    component: {
      structure: "grouped", // Grouped or flat structure
      includeTest: true, // Always generate tests
      includeStyle: true, // Always generate styles
    },
  },
};
```

**Every team member uses the same config.** No more debates about file structure! ✨

## 🛠️ Requirements

- Node.js >= 16.0.0
- npm or yarn

## 📝 License

MIT

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

**Brought to you by [Aditya Singh Sengar](https://github.com/asengar14)**
