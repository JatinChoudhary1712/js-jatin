

function sayMyName(){
    console.log("J")
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("N");
}

// sayMyName()

function addTWoNumber(number1 , number2){
    console.log("hello");
    
    let result = number1 + number2;
    return result
}

// const result =  addTWoNumber(3,4)
// console.log(result);


function loginusermessage(username = "jatin") {
    return `${username} just logged in `
}
console.log(loginusermessage());
