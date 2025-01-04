var str = "listen"
var str1 = "silent"

var strSort = str.split("").sort().join("");
console.log(strSort);
var strSort1 = str1.split("").sort().join("");
console.log(strSort1);


if(strSort === strSort1) {
   console.log("same angrams")
}else{
   console.log("not same angrams")
}