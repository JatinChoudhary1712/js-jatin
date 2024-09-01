//  two type of primitive and non primitive 

// Primitive data types are the most basic types of data that are predefined 
// : Non-primitive data types are more complex types that are derived from primitive data types
 

//7 primitve : String , Number , Boolean , null , predefined , symbol  ,BigInt
//non primitive : Arrays , Object , Functions

const score = 12;
const scorevalue = 100.4;
let userEmail;


const isLoggedIn = false; 
const outsideTemp = null ;


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


// refrence (non primitve)

const heros = ["jatin" , "batman" , "spiderman" , "superman"];
let myobj = {
    name :"kajal",
    age  : 34,
}

const myFunction = function () {
    console.log("Hello World");
    
}