var n = prompt("please enter number : ");
var i = 0;
var j = 1;
var fibb = i + j;
while(fibb < n) {
    console.log(fibb);
    i  = j;
    j = fibb;
    fibb = i+j;
}