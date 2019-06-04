const http = require('http');
const server = http.createServer((request,response)=>{

   const url = request.url;
   if(url==='/'){
    response.setHeader('Content-Type','text/html');
    response.write('<html>');
    response.write('<head><title>Send data using POST request</title></head>');
    response.write('<body><form action="/message" method="POST"><input type="text" name="name" placeholder="Enter Your Name"/> <button type="submit">Send</button></form></body>');
    response.write('</html>');
    return response.end();  
   }
    
   response.setHeader('Content-Type','text/html');
   response.write('<html>');
   response.write('<head><title>This is response title</title></head>');
   response.write('<body><h2>Node js response successfully..</h2></body>');
   response.write('</html>');
   response.end();
});
server.listen(3000);