const name="surbhi"
const count= 15

console.log(name + count+ "value")// not used nowadays
console.log(`Hello my name is ${name} and value is ${count}`); //string interpolation

//Another way to declare string
const gameName = new String ('chess'); //type is object and prototype is String

console.log(gameName[0])//'c'
console.log(gameName.__proto__)
console.log(gameName.length);//not written as gameName.__proto__.length
console.log(gameName.charAt(3))//s
console.log(gameName.indexOf('h'))//2

//string_Methods reading and understanding from mdn 