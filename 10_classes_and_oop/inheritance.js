class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const values = new Teacher("deepsikha","bish@dip.com","12asvbgr")
values.addCourse()
values.logMe()
const newval = new User("biswash")
newval.logMe()
console.log(values instanceof User)