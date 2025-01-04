//// HIGHEST ELEMENT IN ARRAY
var str = "Hi Iam Saikrishna Iam a UI Developer";
var arr = str.split(" ");
var hightWord = arr[0];  // Start with the first word
var shightWord = arr[1];  // Start with the second word
for (var i = 1; i < arr.length; i++) {
    if (hightWord.length < arr[i].length ) {
        shightWord = hightWord;
        hightWord = arr[i];
    }else if (shightWord.length < arr[i].length && hightWord != arr[i]) {
        shightWord = arr[i];
    }
}
console.log(hightWord);
console.log(shightWord);

// SMALLEST ELEMENT IN ARRAY
var str = "Hi Iam Saikrishna Iam a UI Developer";
var arr = str.split(" ");
var hightWord = arr[0];  // Start with the first word
var shightWord = arr[1];  // Start with the second word
for (var i = 1; i < arr.length; i++) {
    if (hightWord.length > arr[i].length ) {
        shightWord = hightWord;
        hightWord = arr[i];
    }else if (shightWord.length > arr[i].length && hightWord != arr[i]) {
        shightWord = arr[i];
    }
}
console.log(hightWord);
console.log(shightWord);