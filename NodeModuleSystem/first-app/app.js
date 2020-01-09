const path = require('path'); 
const os = require("os");
const fs = require('fs');
const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();
const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Hello World")
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
}); 

server.listen(3000);

console.log('Listening on port 3000...');
// let pathObj = path.parse(__filename);
// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();

// // console.log(`Total Memory: ${totalMemory}`);
// // console.log(`Free Memory: ${freeMemory}`);
// // console.log(files);

// // asynchronous approach
// const files = fs.readdirSync('./');

// // synchronous approach
// fs.readdir('./', function(err, files) {
//     if (err) console.log(`Error: ${error}`)
//     console.log('Result', files)
// })

// Register a listener



// logger.on('messageLogged', arg => {
//     console.log('Listener Called', arg)
// });

// // Raise: logging (date: message);
// logger.on('logging', eventArg => {
//     console.log('Logging Called: ', eventArg);
// });

// logger.log('message');
