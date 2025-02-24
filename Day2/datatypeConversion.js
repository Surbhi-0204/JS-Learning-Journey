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