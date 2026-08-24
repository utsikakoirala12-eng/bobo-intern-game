#!/usr/bin/env bash

echo "Building Bobo Intern Game..."

# Optional: run any checks here (e.g., HTML/CSS/JS linting if you add tools)

echo "Pushing to GitHub..."
git add .
git commit -m "Auto-deploy update"
git push origin main

echo "Remember to enable GitHub Pages in repository settings."
