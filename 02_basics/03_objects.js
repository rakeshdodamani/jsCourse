//singleton
//Object.create

//Object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Rakesh",
  "full name": "Rakesh Dodamani",
  [mySym]: "mykey1",
  age: 30,
  location: "Bangalore",
  email: "rakesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email); //rakesh@google.com
// console.log(JsUser["email"]); //rakesh@google.com
// console.log(JsUser["full name"]);// Rakesh Dodamani
// console.log(typeof JsUser[mySym]); //string

JsUser.email = "rakesh@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "rakesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user ");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
