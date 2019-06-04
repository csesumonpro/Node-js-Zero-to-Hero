const person = { 
    name:'Sumon', 
    age:26,
    details(){  
        console.log('My name is '+this.name);
    }
}

const {name,age} = person  //Object Destructuring
console.log(name,age);

const fruits = ['Mango','Apple','Orange'];  
const [item1,item2 ] = fruits; //Array Destructuring
console.log(item1,item2);
