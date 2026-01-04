// Primitive

//  7 Types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 34648465413246746514534n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "rakesh",
    age: 30,
}

const myFunction = function () {
    console.log("Hello world");
}

//++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "RakeshDodamani"
let anothername = myYoutubeName
anothername = "craftedbyrakesh"

console.log(myYoutubeName);
console.log(anothername);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl",
}

let user2 = user1

user2.email = "rakesh@google.com"
console.log(user1.email);
console.log(user2.email);
