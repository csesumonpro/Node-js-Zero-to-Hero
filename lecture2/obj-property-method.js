const person = {  //person is an object
    name:'Sumon', // when key and value available this is a property
    age:26,
    details(){   //details is an method 
        console.log('My name is '+this.name);
    }
}
person.details();
console.log(person.name);
