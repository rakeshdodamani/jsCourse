const promiseOne = new Promise((resolve, reject) => {
  //Do an async tack
  //DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "chai", email: "rd@chai.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "rakesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is finally resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "javscript", password: "9999" });
    } else {
      reject("ERROR: JS went Wrong");
    }
  }, 1000);
});

const consumePromiseFive = async () => {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

consumePromiseFive();

// const getAllUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
// node promises.js
