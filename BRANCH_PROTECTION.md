# Branch Protection Rules

This repository enforces strict branch protection to prevent accidental commits/merges to the `main` branch.

## How It Works

Git hooks are configured to block:

- ❌ Direct commits to `main` branch
- ❌ Direct pushes to `main` branch

## Proper Workflow

Always follow this branching strategy:

### 1. Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make your changes

```bash
git add .
git commit -m "Your commit message"
```

### 3. Push to remote

```bash
git push origin feature/your-feature-name
```

### 4. Create a Pull Request

Open a PR on GitHub/GitLab for code review before merging to main.

## Emergency Override (Author Only)

If you're the author and need to merge directly to main **in case of emergency**:

### Recommended Method (All Platforms)

**For emergency commits:**

```bash
git config --local hooks.emergencymerge true
git commit -m "Emergency fix"
```

**Combined in one command:**

```bash
git config --local hooks.emergencymerge true && git commit -m "Emergency fix"
```

**For emergency pushes:**

```bash
git config --local hooks.emergencymerge true
git push origin main
```

**Combined in one command:**

```bash
git config --local hooks.emergencymerge true && git push origin main
```

> **Note:** The flag automatically resets to `false` after the first commit/push, so you only need to set it once per operation.

### Requirements for Emergency Override

- You MUST be the repository author/maintainer
- Document the reason for emergency merge in commit message
- Only use in actual emergencies (e.g., critical security fixes)
- Notify other team members after emergency merge

## Technical Details

### Hook Files Available

| Platform                     | Pre-commit Hook             | Pre-push Hook             |
| ---------------------------- | --------------------------- | ------------------------- |
| **Linux/macOS (Bash)**       | `.git/hooks/pre-commit`     | `.git/hooks/pre-push`     |
| **Windows (CMD/PowerShell)** | `.git/hooks/pre-commit.bat` | `.git/hooks/pre-push.bat` |

> **How it works:** Git automatically selects the appropriate hook based on your platform and shell.

### Emergency Override Method

- **Bypass flag**: `git config --local hooks.emergencymerge true`
- **Flag scope**: Local repository only (doesn't affect other repos)
- **Auto-reset**: Flag automatically resets to `false` after first use
- **Cross-platform**: Works on Windows, macOS, and Linux

- **Bypass method**: Set environment variable `EMERGENCY_MERGE=true`

## Troubleshooting

If you accidentally committed to main without the flag:

### Undo and move to a new branch

```bash
# Undo the last commit but keep changes
git reset --soft HEAD~1

# Create a new branch
git checkout -b bugfix/your-fix

# Commit on the new branch
git commit -m "Your commit message"

# Push the new branch
git push origin bugfix/your-fix
```

## Additional Server-Side Protection (Recommended)

For maximum security, configure branch protection rules on GitHub/GitLab:

- Require pull request reviews before merging
- Require status checks to pass
- Require branches to be up to date before merging
- Dismiss stale review approvals
