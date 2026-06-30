const fs = require('fs');
const path = require('path');

const dirs = [
  'app/(public)',
  'app/(auth)/login',
  'app/(auth)/signup',
  'app/dashboard',
  'app/dashboard/clubs',
  'app/dashboard/events',
  'app/dashboard/tasks',
  'app/dashboard/team',
  'app/dashboard/mentor',
  'app/dashboard/profile',
  'app/clubs',
  'app/events',
  'app/research',
  'app/industry-lab',
  'app/api'
];

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  fs.mkdirSync(fullPath, { recursive: true });
  console.log(`✓ Created: ${dir}`);
});

console.log('\n✓ All directories created successfully!');
