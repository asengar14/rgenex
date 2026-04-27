# rgenex - Configuration-Driven Code Generator for React

## 📋 What is rgenex?

**rgenex** is a powerful CLI tool that brings Angular-style scaffolding to React projects with **configuration-driven code generation**. Define your team's code structure, naming conventions, and file patterns once in `rgenex.config.js`, and every team member will generate code consistently—automatically.

It automatically generates boilerplate code for React components, hooks, and pages based on your project configuration. Instead of manually creating multiple files every time you need a new component, simply run a command and rgenex handles everything—creating the component file, test file, styles, barrel exports, and more—in seconds.

---

## 🚀 Getting Started

### Installation

```bash
npm install --save-dev rgenex
```

### Initial Setup

```bash
npx rgenex init
```

Creates a `rgenex.config.js` file by detecting your project stack automatically.

---

## 📝 Usage Guide

### Command Syntax

```bash
npx rgenex generate <type> <name>
# or use the shorthand alias
npx rgenex g <type> <name>
```

---

## 🔧 Commands

### 1. **Generate a Component**

Create a reusable React component with optional styling and tests.

```bash
npx rgenex generate component Button
# or
npx rgenex g component Button
```

**What gets created:**

#### Grouped Structure (recommended for larger projects)

```
src/components/
├── Button/
│   ├── Button.tsx           # Main component
│   ├── Button.test.tsx      # Test file
│   ├── Button.module.scss   # Scoped styles
│   └── index.ts             # Barrel export
```

#### Flat Structure (for simpler projects)

```
src/components/
├── Button.tsx               # Main component
├── Button.test.tsx          # Test file
└── Button.module.scss       # Scoped styles
```

**Example Output:**

**Button.tsx**

```tsx
import styles from "./Button.module.scss";

interface ButtonProps {
  // Add your props here
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <button className={styles.button}>Button</button>;
};
```

**Button.test.tsx**

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
```

**index.ts** (Grouped structure only)

```ts
export { Button } from "./Button";
```

---

### 2. **Generate a Page**

Create a full page component with routing integration.

```bash
npx rgenex generate page Dashboard
# or
npx rgenex g page Dashboard
```

**What gets created:**

```
src/pages/
├── Dashboard.tsx           # Main page component
└── Dashboard.test.tsx      # Test file
```

**Example Output:**

**Dashboard.tsx**

```tsx
interface DashboardProps {
  // Add your props here
}

export const Dashboard: React.FC<DashboardProps> = (props) => {
  return <div>Dashboard Page</div>;
};
```

**Dashboard.test.tsx**

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Dashboard } from "./Dashboard";

describe("Dashboard", () => {
  it("renders", () => {
    render(<Dashboard />);
    expect(screen.getByText("Dashboard Page")).toBeInTheDocument();
  });
});
```

---

### 3. **Generate a Hook**

Create a custom React hook for reusable logic.

```bash
npx rgenex generate hook useLocalStorage
# or
npx rgenex g hook useLocalStorage
```

**What gets created:**

```
src/hooks/
├── useLocalStorage.ts      # Custom hook
└── useLocalStorage.test.ts # Test file
```

**Example Output:**

**useLocalStorage.ts**

```ts
export const useLocalStorage = () => {
  // Add your hook logic here
};
```

**useLocalStorage.test.ts**

```ts
import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  it("should work", () => {
    const { result } = renderHook(() => useLocalStorage());
    expect(result.current).toBeDefined();
  });
});
```


## 🆕 New in v1.1.0

### Preview Before Generating

```bash
npx rgenex g component Button --dry
```

Preview generated files without writing to disk.

---

### Safe Overwrite Protection

When generating into existing files, rgenex prompts before overwriting.

---

### Force Overwrite

```bash
npx rgenex g component Button --force
```

Skip overwrite prompts.

---

### List Available Generators

```bash
npx rgenex list
```

Display all configured generators.

---

## 📂 Configuration (`rgenex.config.js`)

The configuration file controls how rgenex generates files:

```javascript
module.exports = {
  // Code language
  language: "typescript", // 'typescript' | 'javascript'

  // Styling solution
  styling: "scss-modules", // 'scss-modules' | 'tailwind' | 'none'

  // Testing framework
  testing: "vitest", // 'vitest' | 'jest' | 'none'

  // Folder paths for generation
  paths: {
    components: "src/components",
    pages: "src/pages",
    hooks: "src/hooks",
  },

  // Component generator options
  generators: {
    component: {
      structure: "grouped", // 'grouped' | 'flat'
      includeTest: true, // Generate .test.tsx files
      includeStyle: true, // Generate .module.scss files
      updateBarrel: true, // Auto-update index.ts exports
    },
    page: {
      includeTest: true, // Generate .test.tsx files
    },
    hook: {
      includeTest: true, // Generate .test.ts files
    },
  },
};
```

---


## ⚙️ Troubleshooting

### "No rgenex.config.js found"

```bash
# Solution: Run initialization
npx rgenex init
```

### Generated files in wrong location

```bash
# Check and update paths in rgenex.config.js:
paths: {
  components: 'src/components',  // Verify this path
  pages: 'src/pages',
  hooks: 'src/hooks',
}
```

### Want different file structure?

```bash
# Edit the structure in config:
generators: {
  component: {
    structure: 'flat',  // Change from 'grouped' to 'flat'
  }
}
```

---

## 🤝 Next Steps

1. ✅ Install rgenex: `npm install --save-dev rgenex`
2. ✅ Run init: `npx rgenex init`
3. ✅ Create first component: `npx rgenex generate component MyComponent` (or `npx rgenex g component MyComponent`)
4. ✅ Start building! 🚀

---

## 📝 Summary

| Question                      | Answer                                               |
| ----------------------------- | ---------------------------------------------------- |
| **What is it?**               | CLI tool for instant React component scaffolding     |
| **Cost to bundle?**           | **Zero**—dev-only tool                               |
| **Time saved per component?** | 5-10 minutes of boilerplate work                     |
| **Setup complexity?**         | One-time `rgenex init` command                       |
| **Best for?**                 | Teams, large projects, consistency-focused workflows |

**Start using rgenex and focus on building great features instead of writing boilerplate!** 🎉
