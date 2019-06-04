// Basic Function
function basicFunction(name="Hello") {
    return('My Name is '+name)
}
console.log(basicFunction());

// Anonymous Function
const anonymousFunction = function (name) {
    return('My Name is '+name)
}
console.log(anonymousFunction("Test"));

// Arrow Function
const addWithoutArg = ()=> 1+2; //Without Argument
console.log(addWithoutArg());
const addWithArg = (a,b)=>{   // with Argument
    return a+b;
}; 
console.log(addWithArg(2,2));