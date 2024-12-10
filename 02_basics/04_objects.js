//const tinderUser = new Object() //this is a singleton object
const tinderUser = {}  //this is not a singleton object
tinderUser.id = "123"
tinderUser.name = "deepsikha"
tinderUser.isLoggedIn = false
tinderUser.id = "123"

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userfullname : {
            firstname : "deepsikha",
            lastname : "ghimire"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = Object.assign({},obj1,obj2,obj4) //{}-is source and rest is target
const obj3 = {... obj1,...obj2,...obj4}
//console.group(obj3);

const users = [
    {
        id:1,
        email : "deeps@gmail.com"
    },
    {
        id:1,
        email : "deeps@gmail.com"
    },
    {
        id:1,
        email : "deeps@gmail.com"
    },
]
//console.log(users[1].email) // to display values inside array
//console.log(tinderUser)
//console.log(Object.keys(tinderUser)); // to display the keys
//console.log(Object.values(tinderUser)); // to display the values
//console.log(Object.entries(tinderUser)); // every key vale pair is change into an array
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "js",
    price : "999",
    courseInstructor : "hitesh"
}
// course.courseInstructor- instead of using it
//New syntax to display it
const { courseInstructor: instructor} = course
console.log(instructor);
//The upper syntax is used to de structure the objects




