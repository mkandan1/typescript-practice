// ====================
// Implicit vs Explicit
// ====================

// Implicit
// var name = "Mani"

// Explicit
// There are three main types
let userName: string = "Mani";
let userAge: number = 20;
let userHasVerified: boolean = false;

// Any is used to allow us to use any data type
let nickName: any = 94;
nickName = "mkandan1"

// Unkown
let userInput: unknown = { name: userName, age: userAge };
console.log((userInput as { name: string }).name) // Assertion used: as

// Never, undefined, and null
let x: never
let y: undefined = undefined;
let z: null = null

// ====================
// Array
// ====================
const names: string[] = []
names.push("Manikandan P");

// readonly array
const list: readonly string[] = ["Apple", "Orange"];
// list.push("Apple") // Throws errow

// ====================
// Tuple
// ====================
let ourTuple1: [number, boolean, string]
ourTuple1 = [5, true, 'God is great']

// readonly tuple
let ourTuple2: [number, boolean, string] = [5, true, 'God is great']

// named tuple
let ourTuple3: [x: number, y: string]
ourTuple3 = [20, 'TS is easy to learn']

// Deconstruct 
let [x1, y1] = ourTuple3

// ====================
// Object
// ====================
const car: { type: string, model: string, year: number } = {
    type: 'SUV',
    model: '800',
    year: 1998
}

// When unknown key type
const nameAgeMap: { [index: string]: number } = {}
nameAgeMap.Mani = 20

// ====================
// Enum
// ====================

// Number enum
enum currentDirection1 {
    North,
    South,
    East,
    West
}

// Auto Increaments
enum currentDirection2 {
    North = 1,
    South,
    East,
    West
}

// Fully initialized
enum currentDirection3 {
    North = 200,
    South = 405,
    East = 304,
    West = 123
}

// String enum
enum currentDirection4 {
    North = "North",
    South = "South",
    East = "East",
    West = "West"
}