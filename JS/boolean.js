// (freeCodeCamp.org)

/*
Boolean, an another data type, only prints two outcomes: true or false.
They are basically toggles if true is on and false is off.
*/

function booleanToFalse(){
    return false // This data is false.
}

function booleanToTrue(){
    return true // This data is true.
}


console.log(booleanToFalse()) // Result: false
console.log(booleanToTrue()) // Result: true

// Boolean conditions

// if(){} Statement

// If statements are used to make decisions in code.

// When the condition evaluates to true, the program executes the statement inside the curly braces.
// When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.
/*
if (condition is true) {
  statement is executed
}
*/

// Example 1:

function test (myCondition) {
  if (myCondition) {
    return "It was true";
 }
 return "It was false";
}
test(true); // returns the string "It was true"
test(false); // returns the string "It was false"

console.log(test()) // Result: It was false ---> since there's no current condition.

// Example 2:

function trueOrFalse(wasThatTrue) {
  if(wasThatTrue){
      return "Yes, that was true"
  }
  return "No, that was false"
}

trueOrFalse(true) // If wasThatTrue condition is true = returns true
trueOrFalse(false) // Otherwise = false

console.log(trueOrFalse()) // Result: No, that was false ---> since there's no existing condition.

// Example 3: using operators

function testEqual(val) {
    if (val == 12) { // Condition: if val is equivalent to 12. 
      return "Equal"; // 12 = 12 ---> true
    }
    return "Not Equal";  // Otherwise, 10 = 12 ---> false
  }
  
console.log(testEqual(10))  // Result: Not Equal because 10 ≠ 12

// Example 4: now with > and <

function testGreaterLessThan(val) {
    if (val > 100) { // Condition: if val is greater than 100
      return "Over 100"; // then retruns "Over 100"
    }
    else if (val < 100) { // Condition: if val is under than 100
      return "Under 100";  // then retruns "Over 100"
    }
    return "Exactly 100"; // Otherwise, if the result is 100, then returns "Exactly 100"
}

console.log(testGreaterLessThan(150)); // Result: Over 100 beacuse 150 > 100
console.log(testGreaterLessThan(80)); // Result: Under 100 because 80 > 100
console.log(testGreaterLessThan(100)); // Result: Exactly 100 because 100 = 100

// Example 5: addition of logical oprators

function testLogicalOr(val){
    if (val > 100 || val < 50) {
        return "Outside the range"
    }
    return "Between 50-100"
}
  
console.log(testLogicalOr(45)); // Result: Outside the range beacuse 45 is not inbetween 50-100 (45 < 100 & 45 < 50)
console.log(testLogicalOr(80)); // Result: Between 50-100 because 80 is indeed inbetween 50-100 (80 < 100 & 80 > 50)

// if else(){} Chains

/*
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
*/

// Example with conditions:

function testSize(num) {
    // Only change code below this line
  if (num < 5){
    return "Tiny"
  }
  else if (num < 10){
    return "Small"
  }
  else if (num < 15){
    return "Medium"
  }
  else if (num < 20){
    return "Large"
  }
  else if (num >= 20){
    return "Huge"
  }
  else {
    return "Change Me";
    // Only change code above this line
  }
}
console.log(testSize(3)); // Result: Tiny because it's smaller than 5.
console.log(testSize(7)); // Result: Small because it's between 5 and 10.
console.log(testSize(12)); // Result: Medium because it's between 10 and 15.
console.log(testSize(19)); // Result: Large because it's between 15 and 20.
console.log(testSize(23)); // Result: Huge because it's bigger than 20.