const promiseOne = new Promise(function(resolve,reject){
//Do an async tasks
//DB calls, cryptography, network
setTimeout(function(){
    console.log("Async task is completed");
    resolve()
},1000)
});

promiseOne.then(function(){
    console.log("Promise run")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2 is completed");
        resolve();
},1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Deepsikha", email:"deeps@example.com"});
},1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = true 
    if(!error) {
        resolve({username: "Deepsikha", password:"deepsikha"});
    } else {
        reject("ERROR: Something went wrong")
    }
},1000)
})

promiseFour
.then((user) => {
    console.log(username);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if(!error) {
            resolve({username: "Js", password:"deepsikhajs"});
        } else {
            reject("ERROR: Js went wrong")
        }
    },1000)
    })

    async function consumePromiseFive(){
        try{
            const response = await promiseFive
            console.log(response);
        }catch (error){
            console.log(error);
        }
    }
consumePromiseFive()