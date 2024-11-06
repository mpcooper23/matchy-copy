/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'cat';
animal['name'] = 'Edgar';
animal['noises'] = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'meow';
//using array function to place element at beginning of noises output arr
noises.unshift('hiss');
noises.push('purr')
//console logging the length of noises
console.log(noises.length)
//console logging the last element in noises
console.log(noises[noises.length - 1])
console.log(noises)


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////


//adding noises to animal object key 'noises'
animal['noises'] += noises
//make sure to use += operator when adding new value to key. Am I okay 
//using dot notation here?
animal.noises += 'bark'
console.log(animal)
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * dot notation and bracket
 * 2. What are the different ways of accessing elements on arrays?
 *bracket notation only, dot notation doesn't work!
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []
animals.push(animal)
console.log(animals)

var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh' ]
}
animals.push(duck)
console.log(animals)

//creating two more animal objects with species, name, and an array of
//two noises
var pig = {
  species: 'pig',
name: 'Charlotte',
noises: ['oink', 'sneeze']
}

var bat = {
  species: 'bat',
name: 'Dave',
noises: ['screech', 'sneeze']
}

//adding each of these to animals array
animals.push(pig, bat)
//logging animals
console.log(animals)
//logging length of animals
console.log(animals.length)
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//choosing an array, which is a list or bucket for similar items to be stored

var friends = []


//function should take in 'animals' or just 'array'?

//Write a function called `getRandom` that takes our 
//`animals` array and returns  a random `index` of 
//the input array, using `Math.random`

//Using a random index from this function that you just created, 
//get a random animal and add its `name` to `friends`.

//`console.log` `friends`.
 //8. [ ] Using **bracket notation**, add the `friends` 
 //list as a **property** also named `friends` on one 
 //of the animals in the `animals` array

 function getRandom(array){
  var random = Math.floor(Math.random() * array.length);
  return random;
}
getRandom(animals, )
//}
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}