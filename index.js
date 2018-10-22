var http = require('http');
var hana = require('hana');

var client = hana.createClient({
  host     : 'hostname',
  port     : 30015,
  user     : 'user',
  password : 'secret'
});
client.on('error', function (err) {
  console.error('Network connection error', err);
});
console.log(client.readyState); // new

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
