// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // add value
// myArr.push(7)
// myArr.pop() // remove last value

// myArr.unshift(9) // add value at first
// myArr.shift() // remove first element

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(9)); //-1
// console.log(myArr.indexOf(3)); // 3

// const newArr = myArr.join() //0,1,2,3,4,5

// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //0,1,2,3,4,5


//slice, spline

console.log("A ", myArr); //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) 

console.log(myn1); //[ 1, 2 ]
console.log("B ", myArr); //B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); //C  [ 0, 4, 5 ]
console.log(myn2); //[ 1, 2, 3 ]


