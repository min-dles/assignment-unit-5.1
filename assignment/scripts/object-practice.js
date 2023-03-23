console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Mandi',
  lastName: 'Andrade',
  hasSiblings: true,
  shoeCount: 6,
  favThreeFoods: ['coffee', 'ramen', 'spinach']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + ' ' + me.lastName;
console.log(fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(me.favThreeFoods[0]);
// Two ways to accomplish the second request:
console.log(me.favThreeFoods[me.favThreeFoods.length - 1]);
// or:
console.log(me.favThreeFoods[2]); // <-- this way works well bc the variable is named 'favTHREEfoods' so we
// can assume there will always be only three fave foods in this array and thus using index [2] is okay

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('My current shoe count:', me.shoeCount);
// First iteration that worked-->    me.shoeCount++;
me.shoeCount = 7;
console.log('Got a new pair! Now i have this many shoes:', me.shoeCount);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'green';
console.log('Also, want to add my fave color:', me.favoriteColor);
console.log('All about me:', me);