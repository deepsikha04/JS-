const coding = ["js","ruby","python","cpp","java"]

/*const values = coding.forEach( (item) => {
    //console.log(item);
    return item;
} )
console.log(values);
*/

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num > 6
// })

const newNums = []
myNums.forEach((num) => {
    if(num >4){
        newNums.push(num)
    }
})
console.log(newNums);


//book examples in video