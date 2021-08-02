// localStorage is, unlike sessionStorage, a property that keeps the data inside the browser application for an indefinite time. It has NO expiration time.
// The data keeps been saved inside the application even if the user closes the tab, the browser or even shut down the computer.

let myString = "IntecBrussel"
let myComment = "This is commented"
let myNumber = 10
let logicVar = true
let myArray = [1, 2, 3]
let myObject = {id:1, user: "root1"}
let myUsers = [{id: 2, user: "root2"},{id: 3, user: "root3"}]
let myFunc = ()=> console.log("Hello")

localStorage.setItem("myString",myString)
// localStorage.setItem("myComment", myComment) ---> Even if you set this line after if it's commented, it still appears in the application.
localStorage.setItem("MyNumber", myNumber)
localStorage.setItem("logicVar", logicVar)
localStorage.setItem("myArray", myArray)

// As for the objects, the value that they give is [object, Object] in the application.

localStorage.setItem("myObject", myObject)
localStorage.setItem("myUsers", myUsers)

// For this, you need to use:

// JSON.stringify: it converts objects into strings ---> x = JSON.stringify(obj)
// JSON.parse: it converts strings into objects     ---> x = JSP

// Usage of JSON.stringify:

let myNewObject = JSON.stringify(myObject) // This variable has become a string thanks to this property.
console.log(typeof myNewObject) // Result: string
localStorage.setItem("myObject", myNewObject) // Now, it appears in the value section in the browser application as a string, not an object.
console.log(typeof myNewObject, typeof myObject) // Result: string object

//console.log(typeof localStorage.getItem("myUsers"))

//get Data

let myObjectData = localStorage.getItem("myObject")
console.log(typeof myObjectData) // Result: string

// If you have a new object with a stacking structure like below:

let obj = {
    id: 1,
    user: "root"
}
// ...you can always add a new property.

obj.email = "test@test.com"
console.log(obj) // Result: {id: 1, user: "root", email: "test@test.com"} ---> This shows as a compressed object. email is added in the list.

// Like the example above, you can do the same with the stored value in the application.

myObjectData.email = "test@test.com"
console.log(myObjectData) // HOWEVER, it doesn't work because the new converted object became a string  ----> {id: 1, user: "root", email: "test@test.com"}

// To fix this, you use JSON.parse to convert it as an object:

myObjectData = JSON.parse(localStorage.getItem("myObject")) // This string variable has been converted into an object thanks to this property.
console.log(myObjectData) // myObjectData became a compressed object.

// You can compare the differences:

// With localStorage.getItem("myObject")             ----> {id: 1, user: "root", email: "test@test.com"}   ----> typeof = string
// With JSON.parse(localStorage.getItem("myObject")) ----> 🞂 {id: 1, user: "root", email: "test@test.com"} ----> typeof = object

// Example with myUsers:

localStorage.setItem("users",JSON.stringify(myUsers)) // myUsers has been stringified to [{"id":2,"user":"root2"},{"id":3,"user":"root3"}] into the storage.

// Let's add a new user:

let newUser ={
    id: 4,
    user: "root4visitor"
}

// let tempUsers = JSON.parse(localStorage.getItem("users")) // Array object



// tempUsers.push(newUser)
// localStorage.setItem("users", JSON.stringify(tempUsers))
// // console.log(tempUsers)

let books = [{
    id: 1,
    bookname: "TitleBook1",
    author: "Author1"
},
{
    id: 2,
    bookname: "TitleBook2",
    author: "Author2"
},
{
    id: 3,
    bookname: "TitleBook3",
    author: "Author3"
}]



localStorage.setItem("Books", books)

let newBookString = JSON.stringify(books)
// console.log(newBookString)

localStorage.setItem("Books", newBookString)

// let newBookNode = JSON.parse(localStorage.getItem("Books"))
// localStorage.setItem(newBookNode)

// console.log(localStorage.key(1)) // MyArray
// console.log(localStorage.key(4)) // MyString

function getAllMoviesFromStorage(){
    let movies
    if(localStorage.getItem("movies") === null){
        // if movies not exist in storage
        movie = []
    } else {
        // here we have "movies" data in storage
        movies = JSON.parse(localStorage.getItem("movies"))
        // data converted as JSON object
    }
    console.log("DATA ->", movies)
    return movies
}

function addMovie(newMovie){
    let temp = getAllMoviesFromStorage()

    //temp.push(newMovie)
    console.log(temp) // Result: []
    console.log(newMovie)
    return localStorage.setItem("movies", JSON.stringify(temp))
}

addMovie({id: 1, title: "Bruce Lee"})
addMovie({id: 1, title: "Superman"})
addMovie({id: 1, title: "Batman"})