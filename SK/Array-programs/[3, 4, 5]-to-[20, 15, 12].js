var arr =  [3,4,5];
var multi = 1;
for(var i =0; i < arr.length; i++){
    sum *= arr[i];
}
console.log(multi) //60
var result = arr.map((item)=> totalProduct/item);  // 60/3 , 60/4,60/5
console.log(result)



//Reduce method
var arr = [3,4,5];
var multiplicationElement = arr.reduce((a,b)=> {
   return a * b; 
},1)  // 60

var res = arr.map((item)=> totalProduct/item);  // 60/3 , 60/4
console.log(res)


//[20,15,12]

