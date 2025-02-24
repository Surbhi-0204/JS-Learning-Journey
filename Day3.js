//Stack (Primitive)
// When a primitive data type is assinged to  a different variable the value is copied 
//and any changes made to the copy isn't reflected in the original value and vice versa.
let officialName = "Surbhi"
let anotherName = officialName 
console.log(officialName);
console.log(anotherName);

anotherName= "Annu";

console.log(officialName);
console.log(anotherName);

// Heap(Non-Primitive)
// When a non-primitive data type is assinged to a different variable the reference is copied 
//and any changes made to the copy is reflected in the original value and vice versa.

let user1={
    email:"Surbhik531@gmail.com",
    state:"Jharkhand",
    pincode:834003
}

let user2=user1;
console.log(user1)

 
user2.email="surbhik531@gmail.com";

console.log(user1)
console.log(user2)