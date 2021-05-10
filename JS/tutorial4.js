let student ={
    firstname: "Marcio",
    lastname: "Fraga", //string
    age: 23, //integer/number
    hobbies:{ //object
        games:["Super Smash Bros", "Mario", "race games"],
        },
    scores: [10,20,30,40,50,60,70,80,90,100] //array
}

// Classic way -> usage of operators

let output = "My name is" + student.firstname + "" + student.lastname + "and I'm" + student.age + "years old. My hobbies are playing games like" + student.hobbies.games.toString() + "All Scores" + student.scores.toString()

console.log(output)

// Modern way

output2 = `My name is ${student.firstname} ${student.lastname} and I'm ${student.age} years old. My hobbies are playing games like ${student.hobbies.games.toString()} All Scores ${student.scores.toString()}`

console.log(output2)

// Functions

function sum (x, y){ //x and y undefined
    let output = x + y
    console.log(x, y)
    console.log(output)
    return x + y//return the answer
}
sum(1, 3) // 1 = x, 3 = y

function myFunction(){
    // console.log("before returning data")
    return "data"
}

let x = myFunction()
console.log(x)

function sayMyName(name){
    console.log(`Your name is ${name}`)
}

sayMyName ("Marcio Fraga")

let person = {
    first: "Marcio",
    last: "Fraga",
}

function getUser(obj){
    console.log("user",obj.first)
}
let nulObject = {}
getUser(person)

let person2 ={
    fullname: "Marcio",
    age: 29,
    email: "marciofraga97@gmail.com",
    country: "Jette, Brussels",
    printPersonInfo:function(){
        console.log("hello")
        console.log(`${person.fullname}\n`)
    }
}
person2.printPersonInfo()

let autoController = {
    forward:function(){console.log("Go forward")},
    backward:function(){console.log("Go backwards")},
    turnleft:function(){console.log("Turn left")},
    turnright:function(){console.log("Turn right")}
}

autoController.forward()
autoController.backward()
autoController.turnleft()
autoController.turnright()

let globalVariable = 5

function getValue(){
    console.log(globalVariable)
    let localVariable = 3
    console.log(localVariable)
}

getValue()
//console.log(localVariable)

/*

OUTPUT CONSOLE/TERMINAL:

My name isMarcioFragaand I'm23years old. My hobbies are playing games likeSuper Smash Bros,Mario,race gamesAll Scores10,20,30,40,50,60,70,80,90,100
My name is Marcio Fraga and I'm 23 years old. My hobbies are playing games like Super Smash Bros,Mario,race games All Scores 10,20,30,40,50,60,70,80,90,100
1 3
4
data
Your name is Marcio Fraga
user Marcio
hello
undefined

Go forward
Go backwards
Turn left
Turn right
5
3

*/