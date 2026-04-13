# rgenex - Angular CLI-Style Code Generator for React

## 📋 What is rgenex?

**rgenex** is a powerful CLI tool that brings Angular-style scaffolding to React projects. It automatically generates boilerplate code for React components, hooks, and pages based on customizable templates and your project configuration.

Instead of manually creating multiple files every time you need a new component, simply run a command and rgenex handles everything—creating the component file, test file, styles, barrel exports, and more—in seconds.

### Key Features

- ⚡ **Instant Scaffolding** - Generate complete components, hooks, and pages with a single command
- 🎨 **Configurable Templates** - Customize folder structures and file templates to match your conventions
- 🧪 **Built-in Testing** - Automatically generate test files (Vitest, Jest support)
- 🎯 **Smart Detection** - Auto-detects your project stack (TypeScript, styling frameworks, testing libraries)
- 📦 **Framework-Agnostic** - Works with any React setup (CRA, Vite, Next.js, etc.)
- 🚀 **Zero Production Impact** - Dev-only tool, doesn't affect your bundle size

---

## 🚀 Getting Started

### Installation

Install rgenex as a development dependency:

```bash
npm install --save-dev rgenex
# or
yarn add --dev rgenex
# or globally
npm install -g rgenex
```

### Initial Setup

Run the initialization command to create a configuration file for your project:

```bash
npx rgenex init
```

This generates a `rgenex.config.js` file that auto-detects:

- **Language**: TypeScript or JavaScript
- **Styling**: SCSS Modules, Tailwind CSS, or plain CSS
- **Testing Framework**: Vitest, Jest, or none

You can then customize the configuration based on your needs.

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

## ✨ Why Use rgenex?

### 🎯 **Key Benefits**

1. **Consistency**
   - Enforces consistent file structures across your project
   - All team members generate code the same way
   - Reduces "structure debates" in code reviews

2. **Speed & Productivity**
   - Generate a component with tests and styles in seconds
   - No more copy-pasting boilerplate code
   - Estimate: **5-10 minutes saved per component**

3. **Best Practices Built-In**
   - Auto-generated test files encourage test-driven development
   - Follows React conventions and React.FC patterns
   - Scoped styles prevent CSS conflicts

4. **Zero Production Overhead**
   - Dev-only tool—completely removed after build
   - **No impact on your app's bundle size**
   - ~4.2 KB when published to npm

5. **Smart Configuration**
   - Auto-detects your tech stack (TypeScript, Jest, Tailwind, etc.)
   - Run `npx rgenex init` once, then forget about it
   - Override defaults in config if needed

6. **Scalability**
   - Handles both small projects and enterprise applications
   - Easily customize templates to match your design system
   - Perfect for component libraries

7. **Angular Developers Love It**
   - Familiar DX for teams migrating from Angular
   - Brings `ng generate` power to React
   - Lower learning curve for Angular background developers

---

## 📊 Real-World Example

### Without rgenex (Manual)

```bash
# Create component folder
mkdir src/components/UserCard

# Create component file (copy from another component)
# Create test file (copy from another test)
# Create styles file (copy from another component)
# Create index file (copy from another)
# Update barrel exports in parent index.ts

# ⏱️ ~5-10 minutes of repetitive work
```

### With rgenex (Automated)

```bash
npx rgenex generate component UserCard

# ✨ All files created instantly!
# ⏱️ ~3 seconds
```

---

## 🔄 Workflow Example

### Complete Workflow

```bash
# 1. Initialize project (one-time setup)
npx rgenex init

# 2. Create a component
npx rgenex g component Card

# 3. Create a page
npx rgenex g page Products

# 4. Create a custom hook
npx rgenex g hook useProducts

# Result: Fully scaffolded, tested component ready for implementation!
```

---

## 💡 Developer Tips

### Naming Conventions

- **Components**: PascalCase (e.g., `UserCard`, `ProductList`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAuth`, `useFetch`)
- **Pages**: PascalCase (e.g., `Dashboard`, `ProductDetails`)

### Best Practices

1. Run `npx rgenex init` when setting up a new project
2. Commit `rgenex.config.js` to version control
3. Customize config to match your team's conventions
4. Use grouped structure for larger components, flat for smaller ones
5. Always implement the generated test files to catch bugs early

### Customizing Templates

Advanced users can customize templates in `src/templates/` to match your design system or specific requirements.

---

## 🚀 Performance & Size Impact

| Metric                | Value                        |
| --------------------- | ---------------------------- |
| **Package Size**      | 4.2 KB (compressed)          |
| **Unpacked Size**     | 16.9 KB                      |
| **Dev Dependency**    | ✅ Doesn't affect production |
| **Build Impact**      | Zero—removed after build     |
| **Time per Generate** | ~1-2 seconds                 |

---

## 📚 Common Commands Reference

```bash
# Initialize configuration
npx rgenex init

# Generate component
npx rgenex generate component Button
npx rgenex g component Button

# Generate page
npx rgenex generate page Dashboard
npx rgenex g page Dashboard

# Generate hook
npx rgenex generate hook useCounter
npx rgenex g hook useCounter

# View installed version
npx rgenex --version
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
