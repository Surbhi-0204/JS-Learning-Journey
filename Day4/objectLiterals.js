let chaiRecipe = {
    ingredients : {
        teaLeaves : 'Assam Tea',                    //Data comes in this format via APIs
        milk : 'Full Cream Milk',
        sugar : 'Brown Sugar',
        spices : [ 'Dacheeni' , 'Ginger' , 'Blackpepper']
    },
    instruction : 'Boil water , Add milk ,spices, tealeaves and sugar'
}
console.log (chaiRecipe.ingredients.spices[1]);      //Ginger



let updatedChaiRecipe = {
    ...chaiRecipe ,
    instruction : 'Boil water , Add milk ,spices, tealeaves and sugar as per your taste. ',     //edits the instruction key's value
    comment : 'Have/Serve it warm ',         //Adds the new key value pair.
}
console.log(updatedChaiRecipe);


//Object destructuring 
let {name , ingredients} = chaiRecipe        // Mapping in object. Here name and ingredients are the variables.
console.log(ingredients);       //{teaLeaves: 'Assam Tea', milk: 'Full Cream Milk', sugar: 'Brown Sugar', spices: Array(3)}


let {spices} = chaiRecipe.ingredients.spices      
console.log(spices);        //undefined
/* These variables are the key of the object chaiRecipe 
    if some  other variable that is not present in the object is taken, then the value come out to be undefined. 
    */


//Array destructuring 
let chaiList = ['Masala Chai' , 'Lemon Tea' , 'Ginger Tea', 'Green Tea']
let [firstChai , secondChai, thirdChai] = chaiList
console.log(secondChai); //Lemon Tea
// Sequencing is followed in Array destructuring , so name of variables doesnot impact 

let [value , setValue] = useState();
//value => data 
// setValue => functionality