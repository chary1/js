
//ASC-ORDER 
let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
for(var i = 0; i< arr.length; i++) {
    for(var j = i + 1; j< arr.length; j++) {
         // hightest logic 
         if(arr[i] > arr[j]) {
             // swapping
             var target = arr[i]
             arr[i] = arr[j];
             arr[j] = target;
         }
    }
}
console.log(arr)