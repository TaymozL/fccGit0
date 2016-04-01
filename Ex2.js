//Ex2 learnyounode


var args = process.argv.slice(2);
var res = 0;
args.forEach(function(ele){
res += +ele;

})
console.log(res);
