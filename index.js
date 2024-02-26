// ====================
// Implicit vs Explicit
// ====================
// Implicit
// var name = "Mani"
// Explicit
// There are three main types
var userName = "Mani";
var userAge = 20;
var userHasVerified = false;
// Any is used to allow us to use any data type
var nickName = 94;
nickName = "mkandan1";
// Unkown
var userInput = { name: userName, age: userAge };
console.log(userInput.name); // Assertion used: as
// Never, undefined, and null
var x;
var y = undefined;
var z = null;
// ====================
// Array
// ====================
var names = [];
names.push("Manikandan P");
// readonly array
var list = ["Apple", "Orange"];
// list.push("Apple") // Throws errow
// ====================
// Tuple
// ====================
var ourTuple1;
ourTuple1 = [5, true, 'God is great'];
// readonly tuple
var ourTuple2 = [5, true, 'God is great'];
// named tuple
var ourTuple3;
ourTuple3 = [20, 'TS is easy to learn'];
// Deconstruct 
var x1 = ourTuple3[0], y1 = ourTuple3[1];
// ====================
// Object
// ====================
var car = {
    type: 'SUV',
    model: '800',
    year: 1998
};
// When unknown key type
var nameAgeMap = {};
nameAgeMap.Mani = 20;
