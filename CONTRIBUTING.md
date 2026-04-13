# Contributing to rgenex

First off, thank you for considering contributing to rgenex! It's people like you that make rgenex such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [issue list](https://github.com/asengar14/rgenex/issues) as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Include your environment details** (OS, Node version, npm version)
- **Include error messages and stack traces**

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/asengar14/rgenex/issues). When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior** and **the expected behavior**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the required template
- Follow the [styleguides](#styleguides) below
- End all files with a newline
- Include appropriate test cases

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Examples:

```
Add support for SCSS Module generation
Fix component generation for flat structure
Improve error messaging for missing config
```

### JavaScript/Node.js Styleguide

- Use semicolons at the end of statements
- Use 2-space indentation
- Use single quotes for strings
- Use camelCase for variable names
- Use PascalCase for constructor functions and classes

### Documentation Styleguide

- Use Markdown for documentation
- Reference other documents with relative links: `[link text](./path/to/doc.md)`
- Keep lines under 100 characters
- Use clear, descriptive headings

## Local Development

### Setup

```bash
# Clone the repository
git clone https://github.com/asengar14/rgenex.git
cd rgenex

# Install dependencies
npm install

# Link locally
npm link
```

### Testing Your Changes

```bash
# Test in a new React project
# Create a test project
npx create-react-app test-app
cd test-app

# Link rgenex
npm link rgenex

# Test the commands
npx rgenex init
npx rgenex generate component TestButton
npx rgenex generate hook useTest
npx rgenex generate page TestPage

# Verify generated files are correct
```

### Running Tests

```bash
npm test
```

### Formatting Code

```bash
npm run format
```

## Project Structure

```
rgenex/
├── bin/
│   └── index.js           # CLI entry point
├── src/
│   ├── commands/          # CLI commands (init, generate)
│   ├── generators/        # Generator logic
│   ├── templates/         # Handlebars templates for scaffolding
│   ├── utils/             # Helper functions
│   └── config.js          # Configuration loading
├── QUICK_START.md         # User documentation
├── CHANGELOG.md           # Version history
├── CONTRIBUTING.md        # This file
└── README.md              # Project readme
```

## Key Files to Understand

- **bin/index.js** — CLI entry point and command definitions
- **src/commands/init.js** — Initialization logic
- **src/commands/generate.js** — Code generation logic
- **src/generators/component.js** — Component generator
- **src/config.js** — Configuration file handling
- **src/templates/** — Handlebars templates

## Making Changes

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Test thoroughly** (manual testing of generated code)
5. **Update documentation** if needed (QUICK_START.md, Comments)
6. **Commit your changes** with clear, descriptive messages
7. **Push to your fork**
8. **Open a Pull Request**

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md` with changes
3. Commit with message: `chore: release v<version>`
4. Create git tag: `git tag v<version>`
5. Push changes and tags: `git push && git push --tags`
6. Publish to npm: `npm publish`

## Additional Notes

### Issue and Pull Request Labels

- `bug` — Something isn't working
- `enhancement` — New feature or request
- `documentation` — Improvements or additions to documentation
- `good first issue` — Good for newcomers
- `help wanted` — Extra attention is needed

## Questions?

Feel free to open an issue with the question tag or contact the maintainer at asengar14@gmail.com.

---

Thank you for contributing to rgenex! 🚀
