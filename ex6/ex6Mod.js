// ex6module


var fs = require("fs");
var myExport = function(dirP,fType,callback){
	fs.readdir(dirP,function(err,data){
		if(err)
			return callback(err); 
		var p = RegExp("\."+fType+"$");
		var res =[];
		data.forEach(function(ele){
			if(ele.match(p))
				res.push(ele);
		})
		callback(null,res);
})
}
module.exports = myExport;
