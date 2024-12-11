const user = {
    username : "deepsikha",
    price : 199,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
//user.welcomeMessage()
//user.username = "biswash"
//user.welcomeMessage()
//console.log(this);

/*function chai(){
    let username = "deepsikha"
    console.log(this.username);
}
chai();
*/

/*const name1 = function(){
    let username="deepsikha"
    console.log(this.username);
}
name1();
*/


const name2 = () => {
    let username="deepsikha"
    console.log(this);
}
//name2();

//Basic arrow function
/*const addtwo = (num1 , num2) => {
    return num1 + num2
}
    
console.log(addtwo(3,4));
*/


//Implicit return
//const addtwo = (num1 , num2) =>  num1 + num2
//const addtwo = (num1 , num2) =>  (num1 + num2)
const addtwo = (num1 , num2) =>  ({username: "deepsikha"})
console.log(addtwo(3,4));

    
