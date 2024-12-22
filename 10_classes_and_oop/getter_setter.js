class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}deepsikha`
    }
    set password(value){
        this._password = value;
    }
}
const deepsikha = new User("deep@deep.com","abc")
console.log(deepsikha.email);