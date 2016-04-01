// ex 11 

var port = process.argv[2];
var fileP = process.argv[3];
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,rsp){
	rsp.writeHead(200, { 'content-type': 'text/plain' });
	fileS = fs.createReadStream(fileP);
	fileS.pipe(rsp);
	});
server.listen(port);
