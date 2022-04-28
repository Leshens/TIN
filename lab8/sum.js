function sum(){
    var sum =0;
    for(var i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(sum(0, 1));
console.log(sum(1,2));
console.log(sum(1,2,3));