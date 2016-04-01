// ex 3 IO

var fs = require("fs");

var fileP = process.argv[2];
var testF = fs.readFileSync(fileP);
var lines = testF.toString();
var res = lines.split('\n').length-1;
console.log(res);

