const EventEmitter = require('events');

let url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send an Http Request
        console.log(message);
    
    // Raise an event
    this.emit('messageLogged', { id: 1, url: 'http://' });
    this.emit('logging', { id: 2, msg: "Here's some data" });
    }

} 



module.exports = Logger;
