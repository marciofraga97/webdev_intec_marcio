// This is used with the console.log. Open nodemon and work wih the terminal.

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

let numberDataType = 10 // This is a number.
let stringDataType = "string" // This is a string.
let objectDataType = { // This is an object.
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

// Array -> it defines an id to each object in the user messages in browser.

let myArray = ["Frank","Barsam","Lalena","Mariam","Marcio","Maryam","Hutu","Kabbaj","Yasmine","Roger","Massimiliano","Sebastian"]
myArray[0] = "Joe"

let nestedArray = [1,2,3,4,5,[6,7,8]]

let resultGetNested = nestedArray[5][0]

nestedArray[5][0] = 10

let extractSingleArrayItem = myArray[0]

console.log(extractSingleArrayItem,myArray)
console.log(typeof myArray)
console.log(nestedArray)