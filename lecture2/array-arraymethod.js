const fruits = ['Mango','Apple'];
for(let fruit of fruits){
    console.log(fruit);
}

console.log(fruits.map(newfruit =>'Orange:'+newfruit));

const copiedArray = fruits.slice();  //Copy array items
console.log(copiedArray);
