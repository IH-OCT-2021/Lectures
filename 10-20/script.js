// Declaring variables

// hoisting
var a = "var";
// doesn't have hoisting
let b = "let";
// doesn't have hoisting
// Const cannot be changed
const c = "const";

// object primitives

// string
// number
// boolean
// null is an explicit nothing
// undefined is an implicit nothing

// If you are confused about the type, use typeof

//Other object primitives, but these are rarely used
// symbol
// bigInt

// truthy/falsy

// falsy values

// false
// empty string ''
// number 0
// null
// undefined
// NaN

// everything else is considered truthy

// ! bang operator

// String interpolation

// parameters (color, name)
// individual values are arguments (color)
function favoriteColor(color, name) {
  if (typeof color !== "string") {
    console.log("You did not add a word");
  } else if (!color) {
    console.log("You forgot to add a color");
  } else {
    console.log(`Hi ${name}, your favorite number is ${45 - 8}`);
  }
}

favoriteColor("green", "John");

// [] Brackets
// Used for Arrays, Indexes

// {} Curly Braces
// Functions, Objects, String interpolation, Scope

// () Parentheses
// Calling functions, Parameters for functions, Conditional statements, switch statements

// <> Chevrons, Wickets, Angle Brackets, Greater than, Aligator mouths
// Greater than/less than, HTML Tags, React Tags

// An object is not iteratable like an array
// it's not ordered by numbers, uses keys
// looks like key: value,

// const person = {
//   name: "Victor",
//   color: 'red'
// }

// access the properies of an object with a ., or with []
// can also change properties this way

// person.name = "Christian";
// person['color'] = "black"

// console.log(person['name'])
// console.log(person.color)

// For loop
// 1st argument: initialize a variable
// 2nd argument: When will the loop stop
// Once this condition has been met, the loop ends
// 3rd argument: what changes when the loop has gone through once

let name = "Aristotle";

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

// Keyword functions (sometimes called function declaration, or an es5 function)

// function blah(){
//   do thing
// }

// Arrow function (sometimes called an es6 function)

// const blah = () => {
//   do thing
// }
