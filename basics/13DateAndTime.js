let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreateDate = new Date(2024 , 0 , 24)
let myCreateDate = new Date("2024-01-14")
// console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear() + 1);


console.log(`${newDate.getDate()} new date`);
newDate.toLocaleString('default', {
    weekday: "long"
})