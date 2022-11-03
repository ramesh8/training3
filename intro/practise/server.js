const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url=='/hello/'){
        res.write('Hello World');
        res.end();
    }else if(req.url=='/api/fruits'){
        var keywords = ['apple','banana','cherry','dragonfruit','eggfruit','fig','grapes'];
        res.writeHead(200, {'Content-Type':'application/json'})
        res.write(JSON.stringify(keywords));
        res.end();
    } else {
        res.write('page not found');
        res.end();
    }
});

server.listen(3000);
console.log('listening on port 3000...');

// server.on('connection', (socket)=> {
//     console.log('new connection...')
// })

