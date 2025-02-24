// Primitive/reference  Data Types  
    //7 types: String , Number , Boolean , null , undefined , Symbol ,BigInt

const id = Symbol("123")
const anotherId =Symbol ("123")
console.log(id===anotherId) //false

const bigNumber = 24541455454454544n // bigInt

//Reference (Non-Primitive)
    //Array , Objects , Functions

const fruits =["apple","banana" ,"cheeku"];
let myobj ={
    name:"Surbhi",
    id : 123
}

const myFunction= function(){
    console.log("function Expression");
}
function  anotherFunction(){
    console.log("Function Declaration");
}
