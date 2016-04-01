// ex5

var fs = require("fs");
var dirP = process.argv[2];
var fType = process.argv[3];
var dirCB = function(err,list){
	if(!err){
		p = RegExp('\.'+fType+'$');
		list.forEach(function(fn){
			if(fn.match(p)){
				console.log(fn);
			}
})
}
}

fs.readdir(dirP,dirCB);
