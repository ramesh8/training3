const http = require('http');

// express 

const server = http.createServer((request,response)=>{
// console.log(request, response);
if(request.url=='/'){
    response.write("<h1>Welcome to my server</h1>");
    response.end();
}
if(request.url=='/books'){
    response.setHeader('Content-Type','text/html');
    response.write("<ol><li>Learning NodeJS</li> <li>Fun with Javascript</li> </ol>");
    response.end();
}
if(request.url=='/users'){
    let users = [
            {id:1, name:"Ramesh", email:"ramesh@demo.com"},
            {id:2, name:"Prasad", email:"prasad@demo.com"},
        ];
    response.setHeader('Content-Type','application/json');
    response.write(JSON.stringify(users));
    response.end();
}
if(request.url=='/fruits'){
    let fruits = [{name:"apple"}, {name:"banana"}];
    response.setHeader('Content-Type','application/json');
    response.write(JSON.stringify(fruits));
    response.end();
}


});

server.listen(3000);