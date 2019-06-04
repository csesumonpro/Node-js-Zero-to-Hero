const http = require('http');
const server = http.createServer((request,response)=>{
    console.log(request.url,request.method,request.headers);
   response.setHeader('Content-Type','text/html');
   response.write('<html>');
   response.write('<head><title>This is response title</title></head>');
   response.write('<body><h2>Node js response successfully..</h2></body>');
   response.write('</html>');
});
server.listen(3000);