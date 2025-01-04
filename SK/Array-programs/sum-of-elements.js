var arr = [3,4,5];
var sum = 0;
for(var i =0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum)


//Reduce method
var arr = [3,4,5];
var sumElement = arr.reduce((a,b)=> {
   return a + b; 
},0)

console.log(sumElement)