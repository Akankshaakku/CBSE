# Guide to Push Code to GitHub

This guide will walk you through the process of pushing your code to GitHub step-by-step.

## Prerequisites

1. **Git installed** - Download from [git-scm.com](https://git-scm.com/download/win) if not already installed
2. **GitHub account** - Create one at [github.com](https://github.com) if you don't have one
3. **Git configured** - Set up your name and email (instructions below)

---

## Step 1: Configure Git (First Time Only)

If this is your first time using Git on this computer, configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## Step 2: Initialize Git Repository

Navigate to your project root directory (`D:\shivam`) and initialize Git:

```bash
cd D:\shivam
git init
```

---

## Step 3: Create/Check .gitignore File

Make sure you have a `.gitignore` file in the root directory to exclude unnecessary files. Your project already has one in `frontend/.gitignore`, but you should create one at the root level.

Create a root-level `.gitignore` file with the following content:

```
# Node modules
node_modules/
frontend/node_modules/

# Build outputs
frontend/build/
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE/Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
.DS_Store
Thumbs.db
desktop.ini

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Temporary files
*.tmp
*.temp
```

---

## Step 4: Add Files to Git

Add all files to Git staging area:

```bash
git add .
```

To see what files will be committed:
```bash
git status
```

---

## Step 5: Create Initial Commit

Commit your files with a descriptive message:

```bash
git commit -m "Initial commit: CPPS School Website Frontend"
```

---

## Step 6: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `cpps-frontend` (or your preferred name)
   - **Description**: "CPPS School Website Frontend"
   - **Visibility**: Choose Public or Private
   - **DO NOT** check "Initialize with README", "Add .gitignore", or "Choose a license" (since you already have code)
5. Click **"Create repository"**

---

## Step 7: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use the commands for "push an existing repository":

**Option A: Using HTTPS** (Easier, requires GitHub username/password or Personal Access Token)
```bash
git remote add origin https://github.com/Akankshaakku/CBSE.git
git branch -M main
git push -u origin main
```

**Option B: Using SSH** (More secure, requires SSH key setup)
```bash
git remote add origin git@github.com:Akankshaakku/CBSE.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with your repository name.

---

## Step 8: Authenticate and Push

- **HTTPS**: You'll be prompted for your GitHub username and password (or Personal Access Token if 2FA is enabled)
- **SSH**: If your SSH key is set up, it should work automatically

---

## Troubleshooting

### Issue: "Remote origin already exists"
If you get this error, remove the existing remote and add it again:
```bash
git remote remove origin
git remote add origin https://github.com/Akankshaakku/CBSE.git
```

### Issue: "Authentication failed"
- For HTTPS: Use a Personal Access Token instead of password
  - Go to GitHub Settings > Developer settings > Personal access tokens > Generate new token
  - Give it `repo` permissions
  - Use this token as your password
- For SSH: Set up SSH keys following [GitHub's guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Issue: "Branch 'main' does not exist"
If your default branch is named something else (like `master`), use:
```bash
git branch -M master
```

Or keep your current branch name:
```bash
git push -u origin YOUR_BRANCH_NAME
```

### Issue: Large file errors
If you have very large files, consider using Git LFS (Large File Storage) or remove them from the repository.

---

## Future Updates

After the initial push, to update your GitHub repository with new changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

---

## Quick Command Summary

```bash
# 1. Initialize Git
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "Initial commit"

# 4. Add remote repository (replace with your repo URL)
git remote add origin https://github.com/Akankshaakku/CBSE.git

# 5. Rename branch to main (if needed)
git branch -M main

# 6. Push to GitHub
git push -u origin main
```

---

## Additional Resources

- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Desktop](https://desktop.github.com) - Alternative GUI tool if you prefer visual interface

