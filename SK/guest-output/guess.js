console.log(3+2+"7") //57

console.log(1<2<3) //true,
console.log(1>2>3) //false


console.log(2 + 2); // Output: 4
console.log("2" + "2");// Output: "22" (string concatenation)
console.log(2 + 2 - 2); // Output: 2
console.log("2" + "2" - "2"); // Output: 20 (string "22" is converted to a number, then subtracted by the number 2)
console.log(4+"2"+2+4+"25"+2+2); // "42242522"

let jcStr = 'jscafe'
jcStr[0] = 'c'
console.log(jcStr)

////
var x=10;
function foo(){
 var x = 5;
 console.log(x) //5
}
foo();
console.log(x) //10
//
console.log("first")
//macroTask Queue to stack -- after the it will execute
setTimeout(function() {
    console.log("second>>>>")
  },100);
  
  //MicroTask Queue to stack before go to next line exececution 
  Promise.resolve().then(()=>{
      console.log("third")
  })
  console.log("end")
//first, end,third,second


// var arr = [1,2,3,,4]
// arr.forEach((n)=>{
//   if(n%2 === 0) {
//     break;
//   }
//   console.log(n)
// })





