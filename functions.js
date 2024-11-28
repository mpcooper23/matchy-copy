/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search (arr, string){
for (let i = 0; i < arr.length; i++){
    if(arr[i] === string){
return arr[i]
    }
  }
}
let edSearch = search(animals, "Ed")
console.log(edSearch)

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace (animals, name, replacement){
for(let i = 0; i < animals.length; i++){
    if(animals[i] === name){
animals[i] = replacement
    }else {animals[i] === animals}
}
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
for(let i = 0; i < animals.length; i++){
    if(animal[i] === name){
delete name
    }
}
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
for(let i = 0; i < animals.length; i++){
    let animalKeys = animals[i]
    for(let name in animals[i]){
    if(animalKeys[animal.name].length > 0){// Checks that the animal Object has a `name` property with a length > 0.
if(animalKeys[animal.species].length > 0){//Checks that the animal Object has a `species` property with a length > 0.
    if(animalKeys[animal.name] !== animalKeys[animal.name]){// Has a **unique** name, meaning no other animals have that name.
animals.push(animal)// Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
    }
}
    }
}
}
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}