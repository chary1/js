/** split and  reverse and join */
var str = "Hello world!"
var charSplit = str.split("") // str.split(" ") -> worldsplit
var revArr = charSplit.reverse();
var arrtoStr = revArr.join("");
console.log(arrtoStr)

// for loop

var str = "chary";
var revStr = "";
for(var i = str.length-1; i>=0; i--){
   revStr = revStr + str[i];
}
console.log(revStr)
