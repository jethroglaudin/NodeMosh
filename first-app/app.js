const path = require('path'); 
const os = require("os");
const fs = require('fs');

let pathObj = path.parse(__filename);

let totalMemory = os.totalmem();
let freeMemory = os.freemem();


// asynchronous approach
const files = fs.readdirSync('./');

// synchronous approach
fs.readdir('./', function(err, files) {
    if (err) console.log(`Error: ${error}`)
    console.log('Result', files)
})

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(files);