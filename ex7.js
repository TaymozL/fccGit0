// ex7

var url = process.argv[2];
var http=require("http");
http.get(url,function(rsp){
rsp.setEncoding("utf8");
rsp.on("data",function(data){
console.log(data);
});
});
