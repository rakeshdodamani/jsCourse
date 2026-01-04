
function sayMyName() {
    console.log("R");
console.log("A");
console.log("K");
console.log("E");
console.log("S");
console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);  
// }

// addTwoNumbers() //NaN
// addTwoNumbers(3,4) //7
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result 

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result:", result); //Result: 8


function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("rakesh")) //rakesh just logged in
// console.log(loginUserMessage()) //undefined 

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200,400,500, 2000));//[ 500, 2000 ]

const user = {
    username: "rakesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user) //Username is rakesh and price is 199
handleObject({
    username: "same",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); //400
