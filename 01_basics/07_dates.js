// Dates

let myDate = new Date()
// console.log(myDate); //2026-01-04T07:55:43.624Z
// console.log(typeof myDate);
// console.log(myDate.toString()); // Sun Jan 04 2026 07:55:43 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString()); //1/4/2026, 7:55:43 AM
// console.log(myDate.toDateString()); //Sun Jan 04 2026
// console.log(myDate.toLocaleDateString()); //1/4/2026
// console.log(myDate.toISOString()); //2026-01-04T07:55:43.624Z
// console.log(myDate.toJSON());// 2026-01-04T07:55:43.624Z
// console.log(myDate.toTimeString()); // 07:55:43 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); // Sun, 04 Jan 2026 07:55:43 GMT

let myCreatedDate1 = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")
// console.log(myCreatedDate1.toDateString()); // Mon Jan 23 2023
// console.log(myCreatedDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM
// console.log(myCreatedDate3.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate); //2026-01-04T08:12:55.211Z
// console.log(newDate.getDate()); // 4
// console.log(newDate.getMonth());// 0
// console.log(newDate.getFullYear());// 2026

newDate.toLocaleString('default',{
    weekday: "long",
})