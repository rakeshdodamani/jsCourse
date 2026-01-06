const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach((item) => {
//     console.log(item); 
// })

// const printMe = (item) => {
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((index, item, arr)=>{
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(`${item.languageName} file extension is ${item.languageFileName}`);
})