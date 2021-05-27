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