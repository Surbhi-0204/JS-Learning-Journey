//Data type conversion confusion
let score = "33";
let abc="33abc"
let value=null;
let value1=undefined
let valueboolean= true

let valueInNumber=Number(score); //33
let valueInAbc=Number(abc); //NaN
let valueInNull=Number(value); //0
let valueInUndefined=Number(value1); //NaN
let valueInBoolean=Number(valueboolean); //1 for true , 0 for false

console.log(typeof score);//string
console.log(typeof valueInNumber);//number
console.log(typeof abc);//NaN(Not a number)

// "33"=>33
//"33abc"=>NaN
//true=>1 ;false=>0
//null=>0
//undefined=>NaN

let  isLoggedIn = 1;
let  booleanIsLoggedIn= Boolean(isLoggedIn);

//1=> true
//0=>false
//"jdhd"=>true
//""=>false

let someNumber= 24
let stringNumber= String(someNumber);

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
