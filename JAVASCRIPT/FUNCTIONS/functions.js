function nice(name)
{
    console.log("Hey " + name + " How are you")
    console.log("and what is your age ? " + name)
    console.log("You are a good person! " + name) 
}
nice("Hamza")  //you can change name and this will change all the upper console statements
//  in the function

function sum(a,b,c)
{
    return a+b+c;
}
r1=sum(1,2,4)
r2=sum(5,6,7)
r3=sum(20,10,20)

console.log("The result are \n" + r1 + "\n" +r2 + "\n" + r3 + "\n") //"\n" for next line and 
                                                                    // "/t" for extra space

//arrow function
const arrfun =(x)=>{
    console.log("Arrow function calling ...." ,x)
}
arrfun(20);
arrfun(3);
arrfun(69);

//HOISTING
greet() //js declaration ko oper le jata ha (sirf declaration ko definition ko nahi)
function greet(){
    console.log("Good Morning")
}

//another example
console.log(a) 
var a=1; //js ye declaration utha k oepr le jayega sirf declaration (var a) definition nahi (a=1)
        //to isko run karne pe undefined ayega na k error q k pehle var a read hoga phr console phr a
         //value read hogi
console.log(a) //ab a ki value 1 ho jayegi q k a declared aur defined dono read ho gaye hain

// console.log(l)
// let l=2;      // Cannot access 'l' before initialization :this error is comming 
                 // so incase of let and const
                 //first variable should be initilaized


 //CLOSURES       
 function myCounter() {
    let counter = 0;
    return function() {
      counter++;
      return counter;
    };
  }
  const add = myCounter();
  add();
  add();
  add();
  
  // the counter is now 3
