//IIFE  this is also called named iffe where name of function is defined
(function deep(){
    console.log("DB CONNECTED")
})();

//iffe in arrow function unnamed iffe with no parameters

/*( () => {
    console.log("DB CONNECTED TWO")
})() */


//This is unnamed iffe with parameters called arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('Deepsikha')



// While writing two iffe use semicolon so that the code executes