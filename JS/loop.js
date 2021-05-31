/*
// regular for loop

let numbers = [1,2,3,4,5,6,7, "string1", "string2", "string3", "string4"]

// for (let i=0; i < number, length)

for (let i=0; i<10; i++){
    console.log(`i value=${i}`)
    console.log(numbers[i])
}

console.log(numbers[0])

let username = "user_"

for (let i=0; i<5; i++){
    username+=`$(i)`
    console.log(username)
}

let student = [
    {
        username:"user_1"
    },
    {
        username:"user_2"
    }
]

//console.log(student.length)
//for (let i=0; i<student.length; i++){
 //   console.log(student(i))
//}

let company = "INTECBRUSSEL"

for (let i=0; i<company.length; i++){
    console.log(company[i].toLowerCase())
    //console.log(btoa(company[i]))
}

for (let i=0; i>numbers.length;i--){
    console.log(numbers[i])
    console.log
}

for (let i=numbers.length; i>0;i--){
    console.log(numbers[i])
    console.log
}*/

/*for (let i=numbers.length; i>0;i--){
   console.log(numbers[i])
   console.log(i)
   ctx.rotate(i * Math.PI / 180)
   ctx.fillRect(50, 20, 100, 50)
}*/

function countDown(giveNumber){
    for(let i=giveNumber; i >= 0; i --){
            console.log("Count", i)
            if (i == 3){
                message = "fizz"
            } else if (i == 5)
                message = "buzz"
            }
        }

countDown(10)

// for of Loop

let students = ["Massimiliano", "Hutu", "Lalena", "Marcio", "Yasmine", "Barsam", "Mariam", "Frank", "Maryam", "Sebastian", "Mohammed", "Roger"]

for (let [index, name] of students.entries()){
    console.log(`Index:${index}\nName:${name}`)
}

/* Result:
Index:0
Name:Massimiliano
Index:1
Name:Hutu
Index:2
Name:Lalena
Index:3
Name:Marcio
Index:4
Name:Yasmine
Index:5
Name:Barsam
Index:6
Name:Mariam
Index:7
Name:Frank
Index:8
Name:Maryam
Index:9
Name:Sebastian
Index:10
Name:Mohammed
Index:11
Name:Roger
*/

// Making a list with only the initials:

for (let [name] of students){
    console.log(name)
}

let people = [
    {
        name:"Jack1",
        age: 20
    },
    {
        name:"Jack2",
        age: 21
    },
    {
        name: "Jack3",
        age: 22
    }
]

for (let person of people){
    console.log(person)
    person.email = "root@root.com"
}
console.log(people)

/* Result:
{ name: 'Jack1', age: 20 }
{ name: 'Jack2', age: 21 }
{ name: 'Jack3', age: 22 }
[
  { name: 'Jack1', age: 20, email: 'root@root.com' },
  { name: 'Jack2', age: 21, email: 'root@root.com' },
  { name: 'Jack3', age: 22, email: 'root@root.com' }
]
*/

let schoolName = "INTECBRUSSEL"
let newPattern = ""
for (let letter of schoolName){
    console.log(letter)
    newPattern += letter+":"
}
console.log(newPattern)

/*
Result:
I
N
T
E
C
B
R
U
S
S
E
L
I:N:T:E:C:B:R:U:S:S:E:L:
*/

let newStr = newPattern.split("") // converted array
newStr.pop()
newPattern = newStr.join("")

console.log(newPattern) //Result: I:N:T:E:C:B:R:U:S:S:E:L

// for in Loop: gets value properties inside of an object

let student = {
    fullname:"Joe Dalton",
    age:25,
    job:"Full Stack Developer"
}

for(props in student){
    console.log("Property:",props)
    console.log("PropertyValue:",student[props])
}

/* Result:
Property: fullname
PropertyValue: Joe Dalton
Property: age
PropertyValue: 25
Property: job
PropertyValue: Full Stack Developer
*/

let newStudent = [
    {
        fullname:"Joe Dalton",
        age:25,
        job:"Full Stack Developer"
    },
    {
        fullname:"Joe Dalton",
        age:25,
        job:"Full Stack Developer"
    },
    {
        fullname:"Joe Dalton",
        age:25,
        job:"Full Stack Developer"
    },
    {
        fullname:"Joe Dalton",
        age:25,
        job:"Full Stack Developer"
    }
]

for(student in newStudent){
    console.log(newStudent[student])
    newStudent[student].email="root@root.com"
}

console.log(newStudent)

/* Result:
{ fullname: 'Joe Dalton', age: 25, job: 'Full Stack Developer' }     
{ fullname: 'Joe Dalton', age: 25, job: 'Full Stack Developer' }     
{ fullname: 'Joe Dalton', age: 25, job: 'Full Stack Developer' }     
{ fullname: 'Joe Dalton', age: 25, job: 'Full Stack Developer' }     
[
  {
    fullname: 'Joe Dalton',
    age: 25,
    job: 'Full Stack Developer',
    email: 'root@root.com'
  },
  {
    fullname: 'Joe Dalton',
    age: 25,
    job: 'Full Stack Developer',
    email: 'root@root.com'
  },
  {
    fullname: 'Joe Dalton',
    age: 25,
    job: 'Full Stack Developer',
    email: 'root@root.com'
  },
  {
    fullname: 'Joe Dalton',
    age: 25,
    job: 'Full Stack Developer',
    email: 'root@root.com'
  }
]
*/

for(letter in schoolName){
    console.log(schoolName.charAt(letter))
    console.log(schoolName[letter])
}

/* Result:
I
I
N
N
T
T
E
E
C
C
B
B
R
R
U
U
S
S
S
S
E
E
L
L
*/

let myString

let mySimpleArray

let nestedArray

let numbers

let singleObject

// Regular for Loop

// for in Loop

// for of Loop

let newNumbers = [0,1,2,3,4,5,6,7,8,9,10]
let output4 = []

// solution will output each value on a new line like in the example above
/*

Output 1) 0 100 200 300 400 500 600 700 800 900 1000
Output 2) 1 2 4 8 16 32 64 128
Output 3) 0 2 4 6 8 10
Output 4) 3 6 9 12 15
Output 5) 9 8 7 6 5 4 3 2 1 0

*/

// Output 1)
for (n of newNumbers){
    let x = n*100
    console.log("Output1:",x)
}

// Output 2)

// for of
for(number of newNumbers){
    let x = Math.pow(2,number)
    output4.push(x)
    console.log("Output2:",x)
    if(x == 128){
        break
    }
}

console.log(output4)

// Regular loop

for(i=0;i<newNumbers.length;i++){
    let number = newNumbers[i]
    let x = Math.pow(2,number)
    console.log(x)
    if(x == 128){
        break
    }
}

// Output 3:

for (n of newNumbers){
    if (n%2 == 0){
        console.log("Output3:", n)
    }
}

// Output 4:

for (n of newNumbers){
    if (n%2 != 0){
        let x =
        console.log("Output4:", n)
    }
}

// Output 5:

for (n of newNumbers.reverse()){
    if ( n <=10){
        console.log("Output5:",n)
    }
}
