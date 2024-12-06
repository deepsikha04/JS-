//2 types of datatypes: Primitive and Refernce(Non premitive)
//Primitive (7 types)
//string, number, boolean, null, undefined, symbol, BigInt
//Reference(Non primitive)
//Array, Objects, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = false
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);

const bigNumber = 345678902345678n



//There are two types of memory: Stack(Primitive) and Heap(Non Primitive)

let myYoutubename = "deepschanneldotcom"
let anothername = myYoutubename
anothername = "dipsbishvlogsdotcom"
//console.log(myYoutubename)
//console.log(anothername)

let userOne = {
    email:"user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "dips@google.com"
console.log(userOne.email); 
console.log(userTwo.email); 
