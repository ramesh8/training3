// const mymodule = require('./mymodule.js');
// console.log(mymodule.add(1,2));

const events = require('events');

const emitter = new events.EventEmitter();

const eventName = 'EventA';

const L1 = () => {
    console.log(`Listener 1 is called`);    
}

const L2 = () => {
    console.log(`Listener 2 is called`);    
}

const L3 = () => {
    console.log(`Listener 3 is called`);    
}

const L4 = () => {
    console.log(`Listener 4 is called`);    
}

function showListenerCount(eventName){
    const lcount = emitter.listenerCount(eventName);
    console.log(lcount);
}


emitter.addListener(eventName, L1);
emitter.addListener(eventName, L2);
emitter.on(eventName, L3);
emitter.on(eventName, L4);

showListenerCount(eventName);

// emitter.emit(eventName);

emitter.removeListener(eventName, L2);

showListenerCount(eventName);


setInterval(function(){
    emitter.emit(eventName);
},1000)







