var n = prompt("please enter the primeNo");
var i = 2;
while(i < n){
   if(n%i==0) break;
   i++
}
if(n == i) {
    console.log("prime")
}else{
    console.log("prime is not")
}