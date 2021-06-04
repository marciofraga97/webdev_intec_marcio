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

function functionWithArgs(x, y){ // x & y are function arguments. All of it is permanently undefined.
    console.log(x * y) // Instead, the function will give the first argument (x) being still undefined, it will multiply with the second argument.
}

functionWithArgs(5, 2) // if you apply this function and put a dynamic element inside the brackets, it will recognize the parameters.
// if you put 5 and 2 in the already created function (functionName(number)), it will become 10 because 5(x) * 2(y) = 10
// if you put 10 and 8, it will become 80 because 10 * 8 = 80

function myLocalScope() {

    // Only change code below this line
    var myVar = 5 // only visible inside the function. Result: inside myLocalScope 5
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  return arr.shift();
  // Only change code above this line
  

}

// Stand in line (queue)
/*
In Computer Science a queue is an abstract Data Structure where items are kept in order.
New items can be added at the back of the queue and old items are taken off from the front of the queue.
*/
// Example:
// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
