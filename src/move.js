const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, '../source');

const result = fs.readFileSync(filePath, 'utf-8');

const md5 = result.split('').map(v => v[0].charCodeAt() + 1).map(v => String.fromCharCode(v)).join('');

fs.writeFileSync(filePath, md5, 'utf-8')