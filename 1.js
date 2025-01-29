let a=3,b=4;
console.log(a+b);
console.log(typeof a,typeof b)

//Primitive data types
let n=2;
let s="string"
let f=2.2
let un=undefined
let empty=null  //typeof null is object 
const t=true

console.log(n,s,f,un,empty,t)
console.log(typeof n,typeof s,typeof f,typeof un,typeof empty,typeof t)

//object
let car={
    "model":2024,
    "color":"Black",
    "company":"Audi",
    "price":40000000
}
console.log(car)
car.variant="nline"
console.log(car)


//Type conversion
let age=prompt("How old are you?")
// console.log( typeof age,age)
//converting string type to number
age=Number(age);
console.log(typeof age,age)



let x=0;
let y=0;
let z=0;
x=Boolean(x)
y=String(y)
z=Number(z)

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z ,typeof z)

