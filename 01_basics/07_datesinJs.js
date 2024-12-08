let myDate = new Date()
//console.log(myDate.toJSON());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2024,03,17,5,45)
//let myCreatedDate = new Date(2024,03,17,5,45)
//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()
//console.log(myTimeStamp)
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate.getMinutes());
a = newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(a);