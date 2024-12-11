//var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
   // console.log("INNER:",a);
}
//console.log("OUTER", a)

function one(){
    const username = "deepsikha"

    function two(){
        const website = "youtube"
        console.log("username");

    }
    //console.log(website);
    two()
}
//one()

if (true){
    const username = "deepsikha"
    if(username == "deepsikha"){
        const website = " youtube"
       // console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//Here the functions are called before the block and it does not generates the error
console.log(addone(5))
function addone(num){
    return num + 1
}


// This is a type of function stored in a variable. When such is declared, the function cannot be called before its block or initialization
const addtwo = function(num){
    return num + 2
} 
console.log(addtwo(5))