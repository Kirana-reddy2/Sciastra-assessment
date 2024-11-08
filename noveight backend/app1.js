let http=require('http');
const server=http.createServer((request,response)=>{
    response.writeHead(200,{'Content-type':'text/plain'});
    response.end('hello,Node.js HTTP Server!');

});
server.listen(3001);
