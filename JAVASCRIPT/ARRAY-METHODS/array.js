//FOR EACH
//Executes a provided function once for each array element but does not return a new array.
const numbers=[20,33,35]
numbers.forEach(num=>console.log(num-1));


//MAP
//Creates a new array by applying a function to each element.
const double=numbers.map(num=>(num*2));
console.log(double);


const index = numbers.findIndex(num => num >1);
console.log(index)

const n=[2,45,67,8,10,11,23,100]
const s=n.sort((a,b)=>a-b); //Asceding order
console.log(s)

//SLICE METHOD 
//returns a new array 
const arr=['A','B','C','D'];
output=arr.slice(0,2); //satrts position is 0 index and end is 2 index so A and B will be printed
console.log(output);

output2=arr.splice(0,2,'H');
console.log(output2)
console.log(arr) //original array is being changed and instead of A and B H is printed

