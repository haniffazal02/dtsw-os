#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✓ Created: ${path.relative(__dirname, dir)}`);
  } else {
    console.log(`→ Already exists: ${path.relative(__dirname, dir)}`);
  }
}

const baseDir = path.join(__dirname, "app");

// Create route group directories
ensureDir(path.join(baseDir, "(public)"));
ensureDir(path.join(baseDir, "(auth)"));
ensureDir(path.join(baseDir, "dashboard"));
ensureDir(path.join(baseDir, "clubs"));
ensureDir(path.join(baseDir, "events"));
ensureDir(path.join(baseDir, "research"));
ensureDir(path.join(baseDir, "industry-lab"));

// Create sub-directories
ensureDir(path.join(baseDir, "(auth)", "login"));
ensureDir(path.join(baseDir, "(auth)", "signup"));
ensureDir(path.join(baseDir, "dashboard", "clubs"));
ensureDir(path.join(baseDir, "dashboard", "events"));
ensureDir(path.join(baseDir, "dashboard", "tasks"));
ensureDir(path.join(baseDir, "dashboard", "team"));
ensureDir(path.join(baseDir, "dashboard", "mentor"));
ensureDir(path.join(baseDir, "dashboard", "profile"));
ensureDir(path.join(baseDir, "api"));

console.log("✓ Directory structure initialized");
