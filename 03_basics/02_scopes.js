let a = 300

if (true) {
  let a = 30;
  const b = 10;
//   console.log("Inner",a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// console.log(a);
// console.log(b); 


function one() {
   const username = "rakesh" 
   function two() {
        const website = "youtube"
        console.log(username);  
   }
//    console.log(website);
   two()
}

// one()

if (true) {
   const username = "rakesh"
   if (username === "rakesh") {
    const website = "youtube"
    // console.log(username + website);
   } 
//    console.log(website)
}

// console.log(username)

// +++++++++++++++++ intresting ++++++++++++++
console.log(addone(5));

function addone(num) {
    return num + 1
}

// addTwo(5)
const addTwo = function (num) {
    return num + 2
}

