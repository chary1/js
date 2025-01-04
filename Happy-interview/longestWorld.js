var str = "I love code in javascript";
var highWord = [];
var wordsplit = str.split(" ");
console.log(wordsplit)
for(var i = 0; i<wordsplit.length; i++) {
    var word = wordsplit[i];
    if(highWord.length < word.length) {
       highWord = word;
    }
}
console.log(highWord)