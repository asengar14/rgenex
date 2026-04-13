# rgenex

[![npm version](https://img.shields.io/npm/v/rgenex)](https://www.npmjs.com/package/rgenex)
[![license](https://img.shields.io/npm/l/rgenex)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/rgenex)](https://www.npmjs.com/package/rgenex)

**Angular CLI-style code generator for React.** Scaffold components, hooks, and pages instantly.

## 🚀 Quick Start

```bash
npm install --save-dev rgenex
npx rgenex init
npx rgenex generate component Button
# or use the shorthand alias
npx rgenex g component Button
```

## ✨ Features

- ⚡ **Instant Scaffolding** — Generate complete components, hooks, and pages in seconds
- 🎯 **Code Consistency** — Enforce uniform file structures across your project
- 🧪 **Built-in Tests** — Auto-generate test files (Vitest, Jest)
- 🎨 **Smart Detection** — Auto-detects your tech stack (TypeScript, styling, testing)
- 📦 **Zero Bundle Impact** — Dev-only tool, completely removed after build
- 🔧 **Fully Customizable** — Adapt templates and config to your needs

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

## 🛠️ Requirements

- Node.js >= 16.0.0
- npm or yarn

## 📝 License

MIT

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

**Brought to you by [Aditya Singh Sengar](https://github.com/asengar14)**
