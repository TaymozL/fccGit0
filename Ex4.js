// ex4

var fileP = process.argv[2];
var fs = require("fs");
var fileCB = function(err,data){
	if(!err){
		console.log(data.split('\n').length-1);
}
}

fs.readFile(fileP,'utf8',fileCB);
