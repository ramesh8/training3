const Logger = require('./logger.js')
// console.log(module);
// console.log(logger);
// logger.log("So this is it, Huh!!!")
// logger.hello("And here i am...");
// logger("so what is it?");

// user-defined modules

// built-in modules

// http
// url
// query strings
// filesystem
// os
// path
// events
// stream


// community modules
// express
// ...



// const EventEmitter = require('events');
// const emitter = new EventEmitter();

const logger = new Logger();

logger.on('messageLogged', (arg)=>{
    console.log("Message from EE : ", arg);
});

logger.log('how are you?')


