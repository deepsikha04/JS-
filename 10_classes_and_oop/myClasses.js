class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const name = new User("deepsikha","deep@deep.com","123")
console.log(name.encryptPassword())
console.log(name.changeUsername())