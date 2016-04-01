// ex8

var url = process.argv[2];
var charN = 0;
var res = "";
var http=require("http");
//http.get(url,function(rsp){
//rsp.setEncoding("utf8");
//rsp.on("data",function(data){
//	charN += data.length;
//	res += data;
//});
//});
var bl = require("bl");
http.get(url,function(rsp){
rsp.pipe(bl(function(err,data){
	data = data.toString(); 
	console.log(data.length);
	console.log(data);
}))
});

