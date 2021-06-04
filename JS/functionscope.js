// Function Scope

// local Scope: Limited accessibility

/*
Block Scope (let, const): Accessible between two curly braces.
Function Scope (var): Accessible inside a function.
*/

// Example 1:

let username
function addUser(){
    let username = "joe dalton" // this decleration is inside of a local scope because 
    console.log(username)
}

//console.log(username) //--> Username doesn't initialize it because it's inside of a local scope or function. Th result is then undefined.
addUser() // Result: joe dalton

// Example 2:

//const secret_token // The const keyword creates a read-only reference to a value. The readonly reference cannot be reassigned but the value can be change.

function generateUserToken(){
    secret_token = "57798997578079"
}

//console.log(secret_token) // Since const is a constant declaration, it cannot be updated nor initialized, leading a error.
//generateUserToken()

// global Scope: Accessible anywhere

let fullname = "Michael Jackson"

function addArtist(){ // scope
    console.log(fullname) // fullname is already been declared so it's part of a global scope inside the function.
} // end of scope

addArtist() // Result: Michael Jackson 

// arrow Function (=>): allows to write shorter function instead of function(){}

// Simple arrow function with values: only works with one statement.

let arrowFun
arrowFun = ()=>5
arrowFun(
    console.log(arrowFun("result"))
)

// Result: 5

// arrow function with params: useful if you have multiple statements.

let getName = (name)=>name // this declaration is been set as a function with parentasis. 
console.log(getName("intecbrussel")) // Result: intecbrussel

let getUser = name => name // this declaration is been set as a function as a normal definition.
console.log(getUser("root")) // Result: root

let getData = data => { // you can also write longer arrow functions with the scopes
    console.log(`Here is your data: ${data}`) // "data" is now able to be called 
}

getData("facebook, twitter") // If the function is activated, "data" is called of you put the paramters inside of this function.
// Result: Here is your data: facebook, twitter 

let personData = (username, password) => { // Same result with the traditional function, only if you have multiple parameters.
    console.log(`Username is ${username}\nPassword is ${password}`)
}
//personData("root", "123456") !commented!
// Result: Username is root
//         Password is 123456

// Anonymous function

/* 
( !commented! (...looks like you cn only use an anonymous function once)
    () => console.log("intecbrussel") // arrow function
) // anonym func itself
() // callback nonym function
// Result : intecbrussel
*/


(
    () => {
        var a = 1
        var b = a // 1
        var c = a + b // 1 + 1 = 2
        console.log(c) // 2
    }
)
() // Result: 2