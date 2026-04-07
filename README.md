# rgenex

`rgenex` is an Angular CLI-inspired code generator for React that scaffolds components, hooks, pages, and other boilerplate from configurable templates.

> ⚠️ This package is still in development. Use it for experimentation only.

## Features

- Generate React components, hooks, and pages
- Supports TypeScript and JavaScript
- Configurable folder structure and templates
- Detects common project stacks during `rgenex init`

## Usage

```bash
npx rgenex init
npx rgenex generate component Button
```

## Local development

If you want to test locally while developing the CLI:

```bash
cd /path/to/rgenex
npm link
```

Then in your test project:

```bash
npm link rgenex
npx rgenex generate component Button
```

## Notes

Because this package is still under active development, the API and generated output may change.
