var fs = require('fs');
fs.renameSync('welcome.txt', 'hello.txt'),'utf8';
console.log('File Renamed.');
