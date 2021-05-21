// This is used with the console.log. Open nodemon and work wih the terminal.

// FUNCTIONS (function())

// A function is a command that does short tasks for certain codes.

/*
function name(parameter1, parameter2, parameter3) {
  --> code to be executed <--
}
*/

// return = the function will stop executing. It is placed inside the local of the function.

let x = myFunction(4, 3) // JS knows that 4 = a and 3 = b resulting to x. (,)

function myFunction(a, b){
    return a + b // here is the local.
}

console.log(x) // the result is 7

let person = { // this is an example of a method. These are mostly stored inside the functions.
    firstName: "Joe", // this is an object
    lastName : "Dalton",
    id: 0001,
    fullName: function(){
        return this.firstName + " " + this.lastName // this replaces "person". I owns all of the statements in the function. The " " is a form of leaving space between data.
    }
}

console.log(person)
console.log(person.fullName())