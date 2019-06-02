// Spread and Rest operator are same sign are same usecase different
const person = {  //person is an object
    name:'Sumon', // when key and value available this is a property
    age:26,
    details(){   //details is an method 
        console.log('My name is '+this.name);
    }
}
// Spread Operator  ...
const copiedObject = {...person};  
console.log(copiedObject);
const fruits = ['Mango','Apple'];  
const copiedArray = [...fruits];
console.log(copiedArray);

// Rest Operator   
// Received unlimited value used rest operator
    //  (when received value then called rest operator otherwise spread operator)
const toArray = (...args)=>{  
    return args;
}

console.log(toArray(1,2,3,4,5));