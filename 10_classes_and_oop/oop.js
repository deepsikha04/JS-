/*const user = {
    username : "deepsikha",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        //console.log("Got user details from database")
        //console.log(`Username : ${this.username}`)
        
    }
}
//console.log(user.username)
//console.log(user.getUserDetails())*/


function User(username,loginCount,isLoggedIN){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoggedIN;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this;
}
const userOne = new User("Deepsikha",16,true)
const userTwo = new User("Biswash",4,true)
console.log(userOne.constructor);
//console.log(userTwo);