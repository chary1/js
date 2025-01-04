var str = "abbcccddddeea";
var chars = {};
for (var i = 0; i < str.length; i++) {
    var char = str[i];
    chars[char] = chars[char] + 1 || 1; 
}
for (var c in chars) {
   console.log("Character: " + c + ", Count: " + chars[c]);
}

// O/P: 1a2b3c4d2e1a