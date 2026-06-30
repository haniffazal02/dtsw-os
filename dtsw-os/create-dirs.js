const fs = require("fs");
const path = require("path");

const baseDir = process.cwd();
const appDir = path.join(baseDir, "app");

const dirs = [
  "(public)",
  "(auth)",
  "dashboard",
  "clubs",
  "events",
  "research",
  "industry-lab",
];

dirs.forEach((dir) => {
  const fullPath = path.join(appDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created: ${dir}`);
  }
});

console.log("Directory structure created successfully!");
