console.log("script linked!")

//////////////////////////////
//          STEP 1          //
//////////////////////////////

// First build two objects 'mom' and 'dad' as object literals (e.g. 'var mom = {}'). If you have a non-traditional family structure, just use someone everybody loves, like Joe Biden or Oprah.
var mom = {};
var dad = {};




// uncomment these console.logs after you write your code
console.log('mom object after step 1:', mom)
console.log('dad object after step 1:', dad)

//////////////////////////////
//          STEP 2          //
//////////////////////////////

// Create one Physicality object and one Personality object for each parent (e.g. 'mom.physicality = {}' and 'mom.personality = {}').

mom.physicality = {};
mom.personality = {};
dad.physicality = {};
dad.personality = {};



// uncomment these console.logs after you write your code
console.log('mom object after step 2:', mom)
console.log('dad object after step 2:', dad)

//////////////////////////////
//          STEP 3          //
//////////////////////////////

// Using different data types (Number, String, Array, Object, Null, & Boolean), add **5 physical attributes** to each of your parents.

mom.physicality = {
  age: 61,
  haircolor: ["blonde", "grey"],
  eyecolor: "blue",
  tattoos: null,
  haspiercings: true
};
dad.physicality = {
  age: 69,
  haircolor: ["brown", "grey"],
  eyecolor: "brown",
  tattoos: null,
  haspiercings: false
};




// uncomment these console.logs after you write your code
console.log('mom object after step 3:', mom)
console.log('dad object after step 3:', dad)

//////////////////////////////
//          STEP 4          //
//////////////////////////////

// Do the same with the personality object!

mom.personality = {
  totalchildren: 2,
  childrennames: ["Amanda", "Lacey"],
  favoritecolor: null,
  ismarried: true,
  pets: "1 dog"
}
dad.personality = {
  totalchildren: 5,
  childrennames: ["Shannon", "Jay", "Chris", "Amanda", "Lacey"],
  favoritecolor: null,
  ismarried: true,
  pets: "1 dog"
}



// uncomment these console.logs after you write your code
console.log('mom object after step 4:', mom)
console.log('dad object after step 4:', dad)

//////////////////////////////
//          STEP 5          //
//////////////////////////////

// Now build yourself by referencing physical and personality attributes from your folks!

var me = {};
me.eyecolor = dad.physicality.eyecolor;
me.haspiercings = mom.physicality.haspiercings;






// uncomment this console.log after you write your code
console.log('me object after step 5:', me)

//////////////////////////////
//          STEP 6          //
//////////////////////////////

// Make 2 lists: first, what you're good at, and second, what you're bad at.

me.goodat = ["cooking", "sewing", "dancing"];
me.badat = ["cleaning", "organization"]




// uncomment this console.log after you write your code
console.log('me object after step 6:', me)

//////////////////////////////
//          STEP 7          //
//////////////////////////////

// Age yourself.

me.age = 30;




// uncomment this console.log after you write your code
console.log('me object after step 7:', me)

//////////////////////////////
//          STEP 8          //
//////////////////////////////

// Delete half of the things you were good at.

me.goodat.pop();




// uncomment this console.log after you write your code
console.log('me object after step 8:', me)

//////////////////////////////
//          STEP 9          //
//////////////////////////////

// Age yourself (again).

me.age = 31;




// uncomment this console.log after you write your code
console.log('me object after step 9:', me)

//////////////////////////////
//          STEP 10         //
//////////////////////////////

// Add 'sitting' to the things you're good at and remove everything else from the list.

me.goodat.pop();
me.goodat.shift();
me.goodat.push("sitting");





// uncomment this console.log after you write your code
console.log('me object after step 10:', me)

//////////////////////////////
//          STEP 11         //
//////////////////////////////

// Add 5 more things to the list of things you're bad at.

me.goodat.push("sports", "finishing books", "returning library books", "public speaking", "waking up early");




// uncomment this console.log after you write your code
console.log('me object after step 11:', me)

//////////////////////////////
//           BONUS          //
//////////////////////////////

// Create a method that prints out one of your classic sayings!

function mySaying() {
  document.write("The rich get richer");
}




// call your function :)

mySaying();
