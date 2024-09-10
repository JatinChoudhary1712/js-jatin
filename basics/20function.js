function CalculateCartPrice(...num1){
    return num1
}

console.log(CalculateCartPrice(200 , 400 , 500));


const user = { 
    username  : "jatin", 
    price : 199 
}

function handleobject(anyobject) {
    console.log(`username  is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleobject(user);

const mynewArray = [200 ,100, 400,600];

function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue);
