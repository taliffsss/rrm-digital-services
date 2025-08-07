#!/bin/bash

# Husky Setup Script for Next.js Project
# This script initializes Husky and sets up pre-commit hooks

set -e  # Exit on any error

echo "🐺 Setting up Husky for your Next.js project..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Please run 'git init' first."
    exit 1
fi

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root."
    exit 1
fi

# Initialize Husky
echo "📦 Initializing Husky..."
npx husky init

if [ $? -eq 0 ]; then
    echo "✅ Husky initialized successfully"
else
    echo "❌ Failed to initialize Husky"
    exit 1
fi

# Create pre-commit hook with custom commands
echo "🔧 Setting up pre-commit hook..."
cat > .husky/pre-commit << 'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run format
npm run type-check
npx lint-staged
EOF

# Make the pre-commit hook executable
chmod +x .husky/pre-commit

echo "✅ Pre-commit hook created with:"
echo "   - npm run format"
echo "   - npm run type-check" 
echo "   - npx lint-staged"

# Check if lint-staged config exists in package.json
if ! grep -q "lint-staged" package.json; then
    echo "⚠️  Warning: No lint-staged configuration found in package.json"
    echo "   Consider adding a lint-staged configuration like:"
    echo '   "lint-staged": {'
    echo '     "**/*.{js,jsx,ts,tsx}": ['
    echo '       "prettier --write",'
    echo '       "eslint --fix"'
    echo '     ]'
    echo '   }'
fi

# Check if required scripts exist in package.json
echo "🔍 Checking for required npm scripts..."

missing_scripts=()

if ! grep -q '"format"' package.json; then
    missing_scripts+=("format")
fi

if ! grep -q '"type-check"' package.json; then
    missing_scripts+=("type-check")
fi

if [ ${#missing_scripts[@]} -gt 0 ]; then
    echo "⚠️  Warning: Missing npm scripts in package.json:"
    for script in "${missing_scripts[@]}"; do
        echo "   - $script"
    done
    echo ""
    echo "   Suggested scripts to add:"
    if [[ " ${missing_scripts[@]} " =~ " format " ]]; then
        echo '   "format": "prettier --write ."'
    fi
    if [[ " ${missing_scripts[@]} " =~ " type-check " ]]; then
        echo '   "type-check": "tsc --noEmit"'
    fi
else
    echo "✅ All required npm scripts found"
fi

# Run prepare script to ensure Husky is properly set up
echo "🚀 Running prepare script..."
npm run prepare

echo ""
echo "🎉 Husky setup complete!"
echo ""
echo "Your pre-commit hook will now run:"
echo "1. npm run format (format code with Prettier)"
echo "2. npm run type-check (TypeScript type checking)"
echo "3. npx lint-staged (lint and format staged files)"
echo ""
echo "To test the setup, try making a commit!"