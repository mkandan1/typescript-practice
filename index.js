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
// ====================
// Enum
// ====================
// Number enum
var currentDirection1;
(function (currentDirection1) {
    currentDirection1[currentDirection1["North"] = 0] = "North";
    currentDirection1[currentDirection1["South"] = 1] = "South";
    currentDirection1[currentDirection1["East"] = 2] = "East";
    currentDirection1[currentDirection1["West"] = 3] = "West";
})(currentDirection1 || (currentDirection1 = {}));
// Auto Increaments
var currentDirection2;
(function (currentDirection2) {
    currentDirection2[currentDirection2["North"] = 1] = "North";
    currentDirection2[currentDirection2["South"] = 2] = "South";
    currentDirection2[currentDirection2["East"] = 3] = "East";
    currentDirection2[currentDirection2["West"] = 4] = "West";
})(currentDirection2 || (currentDirection2 = {}));
// Fully initialized
var currentDirection3;
(function (currentDirection3) {
    currentDirection3[currentDirection3["North"] = 200] = "North";
    currentDirection3[currentDirection3["South"] = 405] = "South";
    currentDirection3[currentDirection3["East"] = 304] = "East";
    currentDirection3[currentDirection3["West"] = 123] = "West";
})(currentDirection3 || (currentDirection3 = {}));
// String enum
var currentDirection4;
(function (currentDirection4) {
    currentDirection4["North"] = "North";
    currentDirection4["South"] = "South";
    currentDirection4["East"] = "East";
    currentDirection4["West"] = "West";
})(currentDirection4 || (currentDirection4 = {}));
var carName = "Toyota";
var carType = "Corno";
var carYear = 2003;
var carObject = {
    name: carName,
    type: carType,
    year: carYear
};
var rectangle = {
    width: 120,
    height: 60
};
var coloredRectangle = {
    width: 120,
    height: 60,
    color: 'white'
};
// ====================
// Union
// ====================
// When we don't know the data type whether string or number, we use union ` \ `
var showError = function (errorCode) {
    console.log("Error Code: ".concat(errorCode));
};
showError('404');
showError(404);
// ====================
// TypeScript Functions
// ====================
// return type explicitly defined
function getSum(_a) {
    var x = _a.x, y = _a.y;
    return x + y;
}
