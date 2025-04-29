const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'js/blog-posts');
const outputFile = path.join(postsDir, 'index.json');

// Read .md files
const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));

// Write to index.json
fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));

console.log('✅ Generated index.json successfully!');
