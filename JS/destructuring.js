let data = [1,2,3,4,5,true,false,"atilla","intec","Barsam"]

console.log(data[8]) // Result: intec

const [item1, item2, item3, item4, item5, item6, item7, item8, item9] = data

console.log(item9) // Result: intec because item9 = intec

let studentInfo = {
    name: "Joe",
    lastName: "Dalton",
    location: {
        country: "USA",
        city: "Texas"
    }
}

let {location: {country, city}} = studentInfo
let {name, lastName} = studentInfo

console.log(country,city,name,lastName) // Result: USA Texas Joe Dalton

let person = {
    name2: "Joe",
    age: "25",
    salary: 5000,
    printInfo: function(){
        console.log(this.name, this.age, this.salary)
    }
}

const {name2: FULLNAME, age: AGE, salary: MAX_SALARY, printInfo} = person

console.log(FULLNAME, AGE, MAX_SALARY) // Result: Joe 25 5000

printInfo() // Result: undefined (x3)

const obj = {
    a:1,
    b:2,
    c:3,
    d:4,
}

const {a:number1, b:number2, c:number3, d:number4} = obj

console.log(number1, number2, number3, number4) // Result: 1 2 3 4