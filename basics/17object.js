const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Jatin"
tinderUser.isLogined = false
// console.log(tinderUser);


const regularUser ={
    email : "jatinchoudhary025@gmial.com",
    fullname:{
            userfullname:{
                firstname : "Jatin",
                lastName : "Choudhary"
            }
    }
}

// console.log(regularUser.fullname?.userfullname);


const obj1 = {1: "a", 2:"b", 3:"f"}
const obj2 = {4: "a", 5:"b", 6:"f"}

const obj3 = {...obj1 , ...obj2}
// console.log(obj3)

const users = [     //save the data in form of array 
    {
        id:1,
        email : "abc@gmail.com"
    },
    {
        id:1,
        email : "abc@gmail.com"
    },
    {
        id:1,
        email : "abc@gmail.com"
    },
    {
        id:1,
        email : "abc@gmail.com"
    }

]


console.log(users[1].email);
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogined'));
