// ex12

var http = require('http');
var port = process.argv[2];
var map = require('through2-map');
var server = http.createServer(function(req,res){
	if(req.method == "POST"){
		req.pipe(map(function(chunck){
			return chunck.toString().toUpperCase();
		})).pipe(res);
	}
});
server.listen(port);	
