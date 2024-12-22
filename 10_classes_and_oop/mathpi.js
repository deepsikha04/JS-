const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")



//console.log(descriptor)

const tea = {
    name : "milk tea",
    price : 100,
    isAvailable : true,

    orderTea: function(){
        console.log('not');
    }
}
//console.log(tea)
console.log(Object.getOwnPropertyDescriptor(tea,"name"))
// Object.defineProperty(tea,'name', {
//     writable:false,
//     enumerable:false,
//     configurable:false
// })
// console.log(Object.getOwnPropertyDescriptor(tea,"name"))



for (let [key, value] of Object.entries(tea)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
   
}