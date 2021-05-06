/* VARIABLES

 "var" is a container that stores a certain value or more.

*/

var x = 5 //"x" is an identifier.
var y = 6 //"=" is an assignment operator, NOT an "equal to".
var z = x + y //it calculates he value of x and y and puts the result into "z". The value of z is the sum of x and y.

console.log(x) // expected outcome is 5 because x (stores the value of) = 5
console.log(y) // expected outcome is 6 because x = 6
console.log(z) // expected outcome is 11 because z = x + y or 11 = 5 + 6

// Example:

var price1 = 5.99 
var price2 = 6.99
var total = price1 + price2

console.log({total})

/* DATA TYPES

Text values are callled text strings. Numbers are only numbers.

- Numbers (characters 0-9)
- Strings ("" or '')
- Object ({})
- Array  ([])
- Undefined
- Null
- Function

*/

let numberDataType = 10
let stringDataType = "string"
let objectDataType = {
    name: "Joe", // It can be any kind of data type. For example, in the console, it gives the result as { name: 'Joe'}
    familyname: "Dalton", // F.e. name: 'Joe', familyname: 'Dalton'.
    age: 21,
    showPerson: function(){
        console.log("Hello, it's showPerson")
    },
    scores: { //this is an example of a nested object.
        javascript: 100,
        java: 90,
        php: 80,
        golang: 60,
        x:{ // you can put nested objects in to unlimited amount.
            y:{
                z:{ // ...and so on... 

                }
            }
        }
    } 
}

objectDataType.name = "Michael" // it replaces the previous property (Joe -> Michael)
objectDataType.familyname = "Jordan"
objectDataType.age = 31

objectDataType.showPerson()

// Nested objects

objectDataType.scores.x.id = 1
objectDataType.scores.x.y.id = 2
objectDataType.scores.x.y.z.id = 3
// ...

console.log("Result:",objectDataType.scores.x)

// Array -> it defines an id to each object in the user messages in browser. You need to open your browser Live Server to check it.

let myArray = ["Frank","Barsam","Lalena","Mariam","Marcio","Maryam","Hutu","Kabbaj","Yasmine","Roger","Massimiliano","Sebastian"]
myArray[0] = "Joe"

let nestedArray = [1,2,3,4,5,[6,7,8]]

let resultGetNested = nestedArray[5][0]

nestedArray[5][0] = 10

let extractSingleArrayItem = myArray[0]

console.log(extractSingleArrayItem,myArray)
console.log(typeof myArray)
console.log(nestedArray)