// First App
// For run a single file open terminal under project directory type node filename.js
console.log("this is test file");   

const fs = require('fs');
fs.writeFileSync('hello.txt','This is new text fiel generate by js file system');