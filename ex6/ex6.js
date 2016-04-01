// ex6programjs

var myex6f = require("./ex6Mod");
var dirP = process.argv[2];
var fType = process.argv[3];
var callback = function(err,data){
if(err){
console.log(err);
}
else{
data.forEach(function(e){
console.log(e)
})
}
};
myex6f(dirP,fType,callback);
