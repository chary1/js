var str = "hello world!";
var vowels = ['a','e','i','o','u'];
var charStr = str.split("");
console.log(charStr);
var count = 0;
for(var i = 0; i <charStr.length; i++) {
   var char = charStr[i];

    // if(char === 'o' || char === 'e') {
    //     count++
    // }

    if(vowels.includes(char)){
        count++;
    }
}
console.log(count)