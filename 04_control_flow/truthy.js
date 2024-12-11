/*const userEmail = []
if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Dont have user email")
}
    */

//falsy values
//false, 0 , -0, BigInt On, "", null, undefined, Nan

//truthy values
//"0", 'false', " ", [], {}, function(){}

//To check array
/* if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}
    */

//Nullish Coalescing Opeartor(??): null undefined

/* let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

*/
//Ternary operator 
//condition ? true : false

const IceTeaPrice = 100
IceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")
