// HIGHEST ELEMENT IN ARRAY
var arr = [1,2,4,5,6,7,8,9,3];
var hightno = arr[0];
var shightno = arr[1];

for(var i = 0; i<arr.length; i++) {
    if(hightno < arr[i]) {
        shightno = hightno;
        hightno = arr[i];
    }else if(shightno < arr[i] && hightno != arr[i]) {
        shightno = arr[i];
    }
}
console.log(hightno)
console.log(shightno)


// SMALLEST ELEMENT IN ARRAY
var arr = [1,2,4,5,6,7,8,9,3];
var hightno = arr[0];
var shightno = arr[1];

for(var i = 0; i<arr.length; i++) {
    if(hightno > arr[i]) {
        shightno = hightno;
        hightno = arr[i];
    }else if(shightno > arr[i] && hightno != arr[i]) {
        shightno = arr[i];
    }
}
console.log(hightno)
console.log(shightno)


