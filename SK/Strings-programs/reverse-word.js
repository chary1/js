// String with split(" ")

let sentence = "Hello world this is JavaScript";
let wordArr = sentence.split(" ");

let newStr = "";
for(var i = wordArr.length-1; i>=0; i--) {
     newStr = newStr += " " + wordArr[i]
}
console.log(newStr);