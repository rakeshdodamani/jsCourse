// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rakesh",
            lastname: "dodamani"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {4: "e", 5: "f"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "d@gmail.com"
    },
    {
        id: 3,
        email: "rd@gmail.com"
    }
]

users[1].email

// console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructer: "rakesh"
}

const {courseInstructer: instructor} = course

// console.log(courseInstructer); //rakesh
console.log(instructor); // rakesh

// const navbar = ({company}) => {

// }

// navbar(company = "rakesh")


// {
//     "coursename": "js in hindi",
//     "price": "999",
//     "courseInstructer": "rakesh"
// }

