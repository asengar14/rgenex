# rgenex

[![npm version](https://img.shields.io/npm/v/rgenex)](https://www.npmjs.com/package/rgenex)
[![license](https://img.shields.io/npm/l/rgenex)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/rgenex)](https://www.npmjs.com/package/rgenex)

**Config-driven React architecture scaffolding for teams.**  
Define your project structure once in `rgenex.config.js` and generate code consistently across your entire team.

---

## 🚀 Quick Start

```bash
npm install --save-dev rgenex
```

![Install](https://raw.githubusercontent.com/asengar14/rgenex/aabd830e50a104529db511b61d211b4c125f5e55/demo/install.gif)

```bash
npx rgenex init
# Creates rgenex.config.js based on your detected stack
```

![Init](https://github.com/asengar14/rgenex/blob/aabd830e50a104529db511b61d211b4c125f5e55/demo/rgenex_init.gif?raw=true)

```bash
npx rgenex generate component Button
# shorthand
npx rgenex g component Button
```

![Generate](https://github.com/asengar14/rgenex/blob/aabd830e50a104529db511b61d211b4c125f5e55/demo/rgenex_component_generate.gif?raw=true)

---

## ✨ Core Features

- 🎯 **Config-Driven Generation** — Define structure, naming conventions, and file patterns once in `rgenex.config.js`
- 👥 **Team Standardization** — Enforce consistent React architecture across your team
- ⚡ **Instant Scaffolding** — Generate components, hooks, and pages in one command
- 🛡️ **Safe Generation** — Preview output before writing and prevent accidental overwrites
- 🧪 **Built-in Test Support** — Auto-generate test files (Vitest, Jest)
- 🎨 **Smart Stack Detection** — Detects TypeScript, styling, and testing setup automatically
- 📦 **Zero Bundle Impact** — Dev-only tool, excluded from production builds
- 🔧 **Configurable Structure** — Adapt templates, paths, and conventions to your architecture

---

## 🆕 New in v1.1.0

### Preview Before Generating

```bash
npx rgenex g component Button --dry
```

Preview files before writing them to disk.

---

### Safe Overwrite Protection

```bash
npx rgenex g component Button
```

If files already exist, rgenex prompts before overwriting.

---

### Force Overwrite

```bash
npx rgenex g component Button --force
```

Skip overwrite prompts when needed.

---

### List Available Generators

```bash
npx rgenex list
```

View all configured generators in your project.

---

## 📖 Documentation

- **[QUICK_START.md](./QUICK_START.md)** — Complete guide with examples
- **[CHANGELOG.md](./CHANGELOG.md)** — Release history
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** — Contributing guidelines

---

## 💡 What It Generates

### Components

```bash
npx rgenex g component Button
```

Creates:

- `Button.tsx`
- `Button.test.tsx`
- `Button.module.scss`
- `index.ts`

*(Structure depends on your config)*

---

### Hooks

```bash
npx rgenex g hook useCounter
```

Creates:

- `useCounter.ts`
- `useCounter.test.ts`

---

### Pages

```bash
npx rgenex g page Dashboard
```

Creates:

- `Dashboard.tsx`
- `Dashboard.test.tsx`

---

## ⚙️ Configuration — The Real Power

After running `npx rgenex init`, configure your team’s standards once:

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
      updateBarrel: true, // Auto-update index.ts exports
    },
  },
};
```

---

### Define Once. Enforce Everywhere.

Every team member uses the same configuration.

No more debates about:

- Folder structure
- Naming conventions
- Test file placement
- Style file conventions

---

## 🛠️ Requirements

- Node.js >= 16.0.0
- npm or yarn

---

## 📝 License

MIT

---

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

---

**Built by [Aditya Singh Sengar](https://github.com/asengar14)**
