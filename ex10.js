// ex10

var port = process.argv[2];
var net = require("net");
var strftime = require('strftime');
var server = net.createServer(function(skt){
	skt.end(strftime('%F %R')+'\n');
	}); 
server.listen(port);
