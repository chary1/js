var arr = [1,2,3,4,5,6,7,8,9];

// filter 
var evenNos = arr.filter((item, index, arr)=> item % 2 == 0 );
console.log(evenNos)

//for loop and push
var output = [];
for(var i of arr) {
    if(i % 2 == 0) {
        output.push(i)
    }
}
console.log("output == " +output)




