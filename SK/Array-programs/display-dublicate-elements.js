var arr = [1, 2, 1, 3, 4, 2, 2, 1, 5, 6];

//filter and indexOf
var dr = arr.filter((item, index, arr)=> arr.indexOf(item) !== index);
console.log(dr)