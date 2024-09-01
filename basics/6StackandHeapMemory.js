// stack and heap memory 

// Stack memory is a region of memory used for storing temporary variables created by each function 
// (including methods) as they are called. It operates in a last-in, first-out (LIFO) manner.

// Heap memory is a region of memory used for dynamic memory allocation, 
// where variables are allocated and freed manually by the programmer or automatically by a garbage collector.


//stack example
let myYoutubename = "jatinchoudhary";
let anotherName = myYoutubename

anotherName = "jatincode";

console.log(myYoutubename);
console.log(anotherName);


//heap
let userOne = {
    email : "jatin@gmail.com",
    upi : "jatin@yesbank"
}

let userTwo = userOne

userTwo.email = "jatin12@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);

