//singleton
//object literals

const sym1 = Symbol("key1")

const JsUser = {
    name : "Deepsikha",
    "full_name" : "Deepsikha Ghimire",
    [sym1] : "key1",
    age :23,
    location: "ktm",
    email : "deepghimire@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full_name"])
//console.log(JsUser[sym1])//result for Symbol

JsUser.email  = "deep@chatgpt.com"// to change value of objects
//console.log(JsUser.email);
//Object.freeze(JsUser)
JsUser.email  = "deep@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

//console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());