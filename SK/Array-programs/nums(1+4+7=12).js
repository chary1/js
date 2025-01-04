// 10. Write a function sumOfThirds(arr), which takes an
// array arr as an argument. This function should return a sum of
// every third number in the array, starting from the first one.

/*** sumOfThirds **/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
for(var i =0; i < arr.length; i+=3){
    sum += arr[i];
}
console.log(sum)

//12(1+4+7)


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = arr.reduce((acc, num, index) => {
    return index % 3 === 0 ? acc + num : acc;
}, 0);


//0 % 3 = 0   (element - 1)
//1 % 3 = 1
//2 % 3 = 1
//3 % 3 = 0  (element - 4) then 1 +  4 = 5
//4 % 3 = 5
//5 % 3 = 5
//6 % 3 = 0 (element - 7 ) then 1+4+7 = 12
// ....
