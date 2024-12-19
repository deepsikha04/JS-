function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}
const details = new createUser("deepsikha","deep@deep.com","12345")
console.log(details);