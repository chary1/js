var arr = [1,2,3,4,2,6,1,6,5,7,7];
// short cut
var dr = [...new Set(arr)];
console.log(dr);
// es6 - filter and indexOf
var dr1 = arr.filter((item,index) => arr.indexOf(item) === index);
console.log(dr1)

// for loop and includes and push
var output = [];
for(var e of arr) {
  !output.includes(e) ? output.push(e) : 1
}
console.log(output)

//forloop and indexOf
var uniqueArr = [];
for(var i = 0; i<arr.length; i++) {
    if(uniqueArr.indexOf(arr[i]) == -1){
       uniqueArr.push(arr[i])
    }
}
console.log(uniqueArr)
