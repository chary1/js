var arr = [1,2,3,4,9,6,7];
var hightno = 0;
var shightno = 0;
for(var i = 0; i <arr.length; i++) {
   if(hightno < arr[i]){
     shightno = hightno;
     hightno = arr[i];
   }
   else if(hightno != arr[i] && shightno < arr[i]){
     shightno = arr[i];
   }
 
}

console.log(shightno);