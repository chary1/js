/** split and  reverse and join */
var str = "racecar"
var charSplit = str.split("") // str.split(" ") -> worldsplit
var revArr = charSplit.reverse();
var arrtoStr = revArr.join("");
if(arrtoStr === str) {
    console.log("pollidram")
}else{
    console.log("not pollidram")
}