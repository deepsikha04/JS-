const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num) => {return num + 10})
//console.log(newNums);

//Chaining- using same method again anad again and using another method in same part

const new1 = myNumbers
        .map((num) => num * 10)
        .map((num) => num + 1)
        .filter((num) => num >= 40)
console.log(new1)
