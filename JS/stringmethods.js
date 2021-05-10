// STRING COMMENTS

let comment = "This is a example of a text in JavaScript. Nice example!"
comment2 = "   SPACE   "

// Length -> reads how many characters there are written in the given string.

result = comment.length // result = 56

// IndexOf() & lastIndexOF() -> determines the position of the given string, while lastIndexOf() determines the last position.

result = comment.indexOf("example") // result = 10
result = comment.lastIndexOf("example") // result = 48

// Search -> determines the location of the given string.

result = comment.search("text") // result = 23

// Extracting String Parts:
// 1. "Slice" -> extracts the given, string giving a specific index, to the console

result = comment.slice(3,50) // result = (3)s is a example of a text in JavaScript. Nice ex(50)

// You can also use (x,comment.length) to extract the given string until the end of the string.
result = comment.slice(20,comment.length) //result = (20)a text in JavaScript. Nice example!

// 2. "Substring" -> extracts the amount of given characters in the variable of the given string.
result = comment.substring(6,12) // result = (6)s a example(12)
result = comment.substr(8,20) // reads from the start until the end of the length of the given string: result: (8)a example of a text(20)
result = comment.substring(12,-1) // instead of reading from left to right, this string method begins to tell right to left if any value is negative: result = (12)This is a ex

console.log(result)

// Replace -> replaces the given string to the give

result = comment.replace("Nice","beautiful") //result = ....a text in JavaScript. beautiful example!

//You can also use regex methods. "g" means global or every character in the given string.
result = comment.replace(/example/g,"string") //result = This is a string of a text in JavaScript. Nice string!
result = comment.replace(/[^a-z]/g,"hey") // replaces all spaces with the given string method: result = heyhisheyisheyaheyexampleheyofheyaheytextheyinheyheyavaheycriptheyheyheyiceheyexamplehey
// You have many kinds of regex expressions that you can use. See www.regexr.com for more regex expressions.

// BEWARE: .replaceAll is an ancient string method so it doesn't exist and work anymore in recent browsers. Use regex instead.

// UPPERCASE and lowercase -> Makes the given string uppercase or lowercase in the console. Self-explainatory.

result = comment.toUpperCase() // result = THIS IS A EXAMPLE OF A TEXT IN JAVASCRIPT. NICE EXAMPLE!
result = comment.toLowerCase() // result = this is a example of a text in javascript. nice example!

// Trim -> removes the space from the given string.

result = comment2.trim()
result = comment2.trimLeft() // removes the space only on the left side.
result = comment2.trimRight() // removes the space only on the right side.
result = comment2.trimEnd() // removes all the space of the given string.

// Concat -> Merges two given strings together in one.

let str1 = "intec"
let str2 = "Brussel"
let num1 = "123"

result = str1.concat(str2) // result = intecBrussel
result = num1.concat("456") // result = 123456

// CharAt -> determines the character of the given string.
// CharCodeAt -> determines the unicode charcter value of the character of the given string.

result = comment.charAt(0) // result: T
result = comment.charAt(11) // result: x
result = comment.charCodeAt(0) // the letter is T so the result is: 84
// For more info, see the list of the unicode characters of each letter.


// Converting string to array: Split method -> splits every character of the given string and puts it in the array data.

let data = "Maryam Yasmine Lalena Hutu Marcio Kabbaj Mariam Barsam Frank Massimiliano Sebastian"

result = data.split(" ") // space

/*
result:
[
  'Maryam',    'Yasmine',
  'Lalena',    'Hutu',
  'Marcio',    'Kabbaj',
  'Mariam',    'Barsam',
  'Frank',     'Massimiliano',
  'Sebastian'
]
*/

console.log(result)