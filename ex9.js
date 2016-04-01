//ex9 

var bl = require("bl");
var http=require("http");
var urls = process.argv.slice(2);
var ctr = 0;
var bls = Array.from(urls, x=> require("bl"));
var res = [];
urls.forEach(function(url,ind){
	http.get(url,function(rsp){
		var i = ind;
		rsp.pipe(bls[ctr](function(err,data){
			data = data.toString();
			res[i] = data;		
			ctr++;
			if(ctr==urls.length){
				console.log(res.join('\n'));
			}
		}));
	});
});
