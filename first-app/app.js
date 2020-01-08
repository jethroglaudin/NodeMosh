const path = require('path'); 
const os = require("os");

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
let pathObj = path.parse(__filename);

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
