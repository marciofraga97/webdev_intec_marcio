//(freecodecamp.org)

//Use Bracket Notation to Find the First Character in a StringPassed

/*
Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0.
This is referred to as Zero-based indexing.

For example, the character at index 0 in the word Charles is C.
So if var firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

*/

// Example 1:

var firstName = "Charles";
var firstLetter = firstName[0];
console.log(firstLetter) // firstLetter would have a value of the string C.

// Example 2:

var firstLetterOfLastName = ""
var lastName = "Lovelace"
firstLetterOfLastName = lastName[0]
console.log(firstLetterOfLastName) // Result: L

// Understand String Immutability Passed

/*
In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:
*/

var myStr = "Bob";
myStr[0] = "J";
console.log(myStr) // Result: Bob

/*
cannot change the value of myStr to Job, because the contents of myStr cannot be altered.
Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed.
The only way to change myStr would be to assign it with a new string, like this:
*/

var myStr = "Bob";
myStr = "Job";
console.log(myStr) // Result: Job

//Use Bracket Notation to Find the Nth Character in a StringPassed

/*
You can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at 0, so the first character is actually the zeroth character.

Example 1:
*/

var firstName = "Ada";
var secondLetterOfFirstName = firstName[1]; // secondLetterOfFirstName would have a value of the string d.
console.log(secondLetterOfFirstName) // Result: d

// Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

// Example 2:

var lastName = "Lovelace"
var thirdLetterOfLastName = lastName[2]
console.log(thirdLetterOfLastName) // Result: v

//Use Bracket Notation to Find the Last Character in a StringPassed

/*
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].
*/

// Example 1:

var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1];
console.log(lastLetter) // lastLetter would have a value of the string s.

// Example 2:

var lastName = "Lovelace"
var lastLetterOfLastName = lastName[lastName.length - 1]
console.log(lastLetterOfLastName) // Result: e

// Use Bracket Notation to Find the Nth-to-Last Character in a StringPassed

/*
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the var firstName = "Charles" string by using firstName[firstName.length - 3]
*/

// Example 1:

var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3];
console.log(thirdToLastLetter) // thirdToLastLetter would have a value of the string l. -----> Char(les)

// Example 2:

var lastName = "Lovelace"
var secondToLastLetterOfLastName = lastName[lastName.length - 2]
console.log(secondToLastLetterOfLastName) // Result: c -----> Lovela(ce)

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[3][0][2];
console.log(myData)