const path = require('path'); 
const os = require("os");
const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();
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

// Register a listener
emitter.on('messageLogged', arg => {
    console.log('Listener Called', arg)
})
// Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });

// Raise: logging (date: message);

emitter.on('logging', eventArg => {
    console.log('Logging Called: ', eventArg);
});

emitter.emit('logging', { id: 2, msg: "Here's some data" });


console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(files);