const fs = require('fs');

console.log('-------------before reading the file-------------');

//* IO => SSD vs CPU
//! wait => sync
//! no wait => async => non-blocking

fs.readFile('message.txt','utf8',(err,text)=>{
    console.log(text);
});

//? text = fs.readFileSync('message.txt','utf8');
//? console.log(text);

console.log('-----------------after reading the file--------------');
