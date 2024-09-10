const mykey = "someKey";  // Define `mykey` for computed property

const JsUser = {
    name: "Jatin",
    fullName: "Jatin Choudhary",
    age: 18,
    [mykey]: "mykey1",  // Computed property using `mykey`
    location: "Chandigarh",
    email: "jatin@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday"]
};

// console.log(JsUser.email);  // Output: "jatin@gmail.com"
// console.log(JsUser["fullName"]);  // Output: "Jatin Choudhary"
// console.log(JsUser[mykey]);  // Output: "mykey1"

// Attempt to modify a frozen object (should throw an error in strict mode)
JsUser.email = "jatinchoudhary0-25@mail.com";
// Object.freeze(JsUser);
JsUser.email = "jatinmail.com";  // This modification will be ignored in strict mode

// console.log(JsUser);  // Output: "mykey1", since the object is frozen, modification is ignored


JsUser.greeting= function(){
    console.log(`Hello Jatin, Welcome to js ,${this.name}`);
}
console.log(JsUser.greeting());
