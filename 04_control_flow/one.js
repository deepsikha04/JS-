/*const temperature = 60

if(temperature===55){
    console.log("Less than 50")
}
else{
    console.log("Greater than 50")
}
console.log("Execute")
*/


/*const score = 200
if (score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}
    */


//This is implicit scope
/*const balance = 1000
// if (balance > 500) console.log("test");

if (balance < 500){
    console.log("Less than 500")
}
else if (balance < 750){
    console.log("Less than 750")
}
else if (balance < 950){
    console.log("Less than 900")

}
else{
    console.log("Less than 1200")
}
    */


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}