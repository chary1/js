var arr = [1,2,3,4,3,2,5,6];
// var rd = [...new Set(arr)];
// console.log(rd)


// var uniqueArr = [];
// for(var i = 0; i< arr.length; i++) {
//   console.log(arr[i])
//   if(uniqueArr.indexOf(arr[i]) == -1){
//       uniqueArr.push(arr[i])
//   }
// }


 var uniqueArr1 = arr.filter((item,index) => arr.indexOf(item) === index)
console.log(uniqueArr1)
