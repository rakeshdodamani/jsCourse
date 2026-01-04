const accountId = 144553
let accountEmail = "rakesh@google.com"
var accoundPassword = "123456"
accountCity = "Jaipur"
let accountState;

// accountId = 2
// not allowed const can't be reassigned

accountEmail = "rd@rd.com"
accoundPassword = "2121212"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accoundPassword, accountCity, accountState])
