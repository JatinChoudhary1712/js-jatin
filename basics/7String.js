const name = "jatin"
const repocount = 40

// console.log(name + repocount);  purana way h likhne ka ab naya use hjota h (cancatenation ka)


console.log(`hi my name is ${"hi"} ${name} and my repo count is ${repocount}`);   //${} string interpolation modern way of cancatenation 

//other way to decalre string '
const gameName = new String(
    'jatin the hero'
)
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// const newString = gameName.substring(0 ,4)
// console.log(newString);


const anotherString = gameName.slice(-8 , 4)
console.log(anotherString);



const newStringOne = "                 hi jatin          ";
console.log(newStringOne.trim());



const url = "https://jatin.com/jatin%20choudhary"
console.log(url.replace("%20" , ''));

console.log(url);


console.log(url.includes('jatin'));
