// ex13


var http = require('http');
var port = process.argv[2];
var url = require('url');
var server = http.createServer(function(req,res){
	var resData = {};
	if(req.method!='GET')
		return res.end("GET server is this");

	var rinfo = require('url').parse(req.url,true);
	if(rinfo.query.iso){
                        var rdate = rinfo.query.iso;
                        rdate = new Date(rdate);
        }
	if(rinfo.pathname =='/api/parsetime'){
			resData = {"hour":rdate.getHours(),"minute":rdate.getMinutes(),"second":rdate.getSeconds()};
			resData = JSON.stringify(resData);
	}
	if(rinfo.pathname == '/api/unixtime'){
		resData = rdate.valueOf();
		resData = {"unixtime":resData};
		resData = JSON.stringify(resData);
	}
	res.writeHead(200, { 'Content-Type': 'application/json' });
	return res.end(resData);
});
server.listen(port);	
