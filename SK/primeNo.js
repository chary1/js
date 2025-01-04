var n = 2;
while(n <= 10) {
    var i = 2;
    while(i <= n) {
      //console.log(i);
      if(n%i==0) break;
      i++;
    }
    //console.log(n);
    if(n == i) {
        console.log(n)
    }
    n++;
}