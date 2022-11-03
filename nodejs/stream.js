//4 types of streams
//readbale
//writeable
//duplex
//transformation

//send a large file

const fs = require('fs')
let data ='';
const MAX_CHUNK_SIZE = 1*1024; //1 KB
let readStream = new fs.createReadStream('docs.txt','utf8',{highWaterMark: MAX_CHUNK_SIZE});

let chunkIndex = 0;
readStream.on('data',function(chunk){
    data+=chunk;
    chunkIndex += 1;
    console.log(`---------[Chunk : ${chunkIndex}]--------------`);
    // console.log(chunk);
    console.log("-----------------------");

});

readStream.on('end',function(){
    console.log("End of stream");
    console.log(`Total ${MAX_CHUNK_SIZE * chunkIndex} Kb `);
});

readStream.on('err',function(err){
    console.log("Error", err.stack);
});


