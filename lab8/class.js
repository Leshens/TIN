var obj = {
    className: 'first bordered'
}
function addClassName(objInput,addInput){
    const myArray = objInput.className.split(" ");
    console.log(myArray),console.log(myArray.includes(addInput))
    if (myArray.includes(addInput) == false) {
        objInput.className = objInput.className + " " + addInput;
    }
}
addClassName(obj, 'visible');
console.log(obj.className);
addClassName(obj, 'visible');
console.log(obj.className);