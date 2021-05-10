//ASSIGNMENT: Put your CV or personal information in the js

/*

obj ={
    key:value
    name:"yourname"

}

let output = "My name is ..." + obj.name + "and I study" + obj.schoolname

let obj = {
    myArray: [1,2,3,4,5,6]
}

console.log(
    output
)

*/

let intro = "Hello, my name is"
let name = "Marcio"
let p1 = "and I'm"
let age = 23
let p2 = "years old"

console.log("Let me introduce myself:",intro,name,p1,age,p2,".")

let p3 = "I studied in"
let schoolname = "De Wijnpers"
let schoolplace = "Leuven"
let p4 = "and followed studing"
let area = "Arts & Graphic Design"
let p5 = "until I completed my full school career until"
let diplomayear = 2018

school = schoolname + schoolplace

console.log("Where did I study? ->",p3,school,p4,area,p5,diplomayear,".")

let p6 = "I now follow a course that teaches"
let course = "Web Developement"
let p7 = "by"
let eduCenter = "Intec Brussel"

console.log("What do you do now? ->", p6,course,p7,eduCenter,".")

let title1 = "---------Info-----------"
console.log(title1)

let lastname = "Fraga"
let mail ="marciofraga97@gmail.com"
let birthday = 12
let birthmonth = 11
let birthyear = 1997
let gender = "Male"
let nationality = "Portuguese"

console.log("Name:",name,lastname)
console.log("E-mail:",mail)
console.log("Birthdate:",birthday,"/",birthmonth,"/",birthyear)
console.log("Gender:",gender)
console.log("Nationality:",nationality)

//Take 2

let linebreak = "------------------------"
let place = "Jette, Brussels"
let output = `
${intro} ${name} ${lastname} ${p1} ${age} ${p2}.\n
I live in ${place} and ${p3} ${schoolplace} called ${schoolname}.\n
I studied ${area} at the time ${p5} ${diplomayear}.\n
${p6} ${course} ${p7} ${eduCenter}.\n
${title1}\n`

function sayMyName(name){
    console.log(`Name: ${name}`)
}

console.log(linebreak)
console.log(output)