// ***************************************Operations***************************************************************************//
let value2=3
let negvalue=-value2 //-3

let str = "hello"
let str1 = " Surbhi"
let str2 = str + str1 // "hello Surbhi"

console.log("1"+ 2) //12
console.log(1+ "2") //12
console.log("1"+ 2 + 2) //122
console.log(1+ 2 + "2") //32

console.log(+true) //1   
console.log(+"") //0

//prefix and postfix
let counter=10
++counter //prefix
counter++ //postfix

//Comparision
console.log("2">1);
console.log("02">1); // two value of different data types should not be compared

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true
console.log (undefined==0); //false
console.log(undefined>0); //false  
// should avoid these type of comparision

//strict comparison
console.log("2"===2); //doesnt start conversion as the datatype is different
