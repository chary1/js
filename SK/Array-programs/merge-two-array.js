//[0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

var arr1 = [0,3,4,31] 
var arr2 = [4,6,30]
var arr3 = [...arr1, ...arr2];
console.log(arr3.sort((a,b)=> a-b))