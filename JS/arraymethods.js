// ARRAY METHODS

let result
let numbers = [1,2,3,4,5,6,7,8,9]
let movie_categories = ["Comedy","Action","Sci-fi","Thriller","Fantasy"]
let students =[
    {id:1, fullname:"John Johnson", age:100, profession:"Police"}
]

// push() Method: takes one or more parameters and "pushes" them onto the end of the array.

numbers.push(10)
movie_categories.push("Horror")

let newStudent = {id:2, fullname:"Joe Dalton", age:80, profession:"Thief"}
students.push(newStudent) // newStudent gets pushed inside the students array.

result = numbers
result = movie_categories
// This is the result: [ 'Comedy', 'Action', 'Sci-fi', 'Thriller', 'Fantasy', 'Horror' ]

// join() Method

result = movie_categories.join() // Result: Comedy,Action,Sci-fi,Thriller,Fantasy,Horror
result = movie_categories.join("") // Result: ComedyActionSci-fiThrillerFantasyHorror 
result = movie_categories.join("-") // Result: Comedy-Action-Sci-fi-Thriller-Fantasy-Horror

// pop() Method: is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable.

// In other words, .pop() removes the last element from an array and returns that element.

// Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

result = numbers.pop() // Removes last element of an array. 10 is the last pushed item
result = numbers // 9 is removed

// shift() Method: It works just like .pop(), except it removes the first element instead of the last.

numbers.shift() // Removes first element of an array.
result = numbers // 1 is removed

// some() Method

/*result = numbers.some(fucntion(value){
    return value>=9
})*/

// every() Method

function everyCallBackFunction(value){
    return value>=1
}

// reduce() Method

numbers.reduce(function(total,current,index,arrayitself){
    console.log(`Total: ${total}\nCurrent: ${current}\nIndex: ${index}\nArrayItself: ${arrayitself}`)
    return total = total + current
})

/* Result:

Total: 20
Current: 7
Index: 5
ArrayItself: 2,3,4,5,6,7,8,9

27 = 20 + 7

*/

result = numbers.every(everyCallBackFunction) // Result: true if the value is 1, false if the value is more than 1.

// unshift([]) Method: works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

numbers.unshift(0) /*
   Result: [
    0, 2, 3, 4, 5,
     6, 7, 8, 9
  ] */
numbers.unshift("hello") // Result:[ 'hello', 0, 2, 3, 4, 5, 6, 7, 8, 9 ]
numbers.unshift((()=>10)()) // Result: [ 10, 'hello', 0, 2, 3, 4, 5, 6, 7, 8, 9 ]
result = numbers

// map() Method

numbers.map(function(element,index){
    console.log(`Element:${element}\nIndex:${index}`)
})

/*function getAllMovieCategories(value,index){
    console.log(`Movie Category:$`)
}


movie_categories.map()
*/

result = students

console.log(result)

let student = [
    {
        fullname: "Ali Veli"
    },
    {
        fullname: "Vali"
    }
    
]

student.map(function(singledata,index){
    console.log(singledata,fullname)
})

// forEach() Method

student.forEach(function(x,i){
    console.log(x.fullname)
})

// flat() Method

let multidimensionalArray = [1,2,3,4,5,6,7,8,[9,10,11,12,13,14,[15,16,17,18,[19,20]]]]
let nestedStringsArray = ["a","b","c",["d","e",["f","g"]]]
let single = multidimensionalArray.flat(Infinity)

result = multidimensionalArray.flat(3)
result = nestedStringsArray.flat(2)
result = nestedStringsArray.flat(Infinity)

/*
Result:
[
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20
]
*/

// filter() Method

result = single.filter(function(value){
    return value>=11 && value <=18
})

/*
Result:
[
  11, 12, 13, 14,
  15, 16, 17, 18
]
*/

result = nestedStringsArray.filter(function(element){
    return element >= "b" || element === "e"
})

let person = [
    {
        name: "Ali Baba",
        age:70
    },
    {
        name: "Ali Baba2",
        age:50
    },
    {
        name: "Ali Baba3",
        age:25
    },
]

result = person.filter(function(x){
    return x.age <=100
})

/*
Result:
[
  { name: 'Ali Baba', age: 70 },
  { name: 'Ali Baba2', age: 50 },
  { name: 'Ali Baba3', age: 25 }
]
*/

// sort() Method

let nums = [4,7,2,9,0,4,6,2,54,12,98,45,23,7,34,245]
let strings = ["a","k","y","w","p","q","b","n","l"]

result = strings.sort()

/*
Result:
[
  'a', 'b', 'k',
  'l', 'n', 'p',
  'q', 'w', 'y'
]
*/

function compareFunction(a,b){
    return a-b
}

/*
[5,5]
5-5 = 0 >
5,5
4-7 =-3
-1 >
0 > first_num1 === second_num2
1
1
*/

result = nums.sort()
result = nums.sort(compareFunction)

// find() Method

let students2 = [
    {id:1,name:"Sebastien"},
    {id:2,name:"Maryam"},
    {id:3,name:"Barsam"}
]

result = students2.find(function(student){
    return student.name === "Sebastien"
})

/*
Result:
{ id: 1, name: 'Sebastien' }
*/

// concat() Method

let oldData = [1,2,3,4,5]
let newData = [6,7,8,9,"test",true,function(){}]

result = oldData.concat(newData)

/*
Result:
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'test', true, [Function (anonymous)] ]
*/

// fill() Method

result = result.fill("INTECBRUSSEL")
/*
Result:
[
  'INTECBRUSSEL', 'INTECBRUSSEL',
  'INTECBRUSSEL', 'INTECBRUSSEL',
  'INTECBRUSSEL', 'INTECBRUSSEL',
  'INTECBRUSSEL', 'INTECBRUSSEL',
  'INTECBRUSSEL', 'INTECBRUSSEL',
  'INTECBRUSSEL', 'INTECBRUSSEL'
]
*/

// includes() Method

result = numbers.includes(2) // Result: true
result = numbers.includes(0) // Result: false

function iselementExist(obj,findValue){
    let isExist = obj.includes(findValue)
    if(isExist){
        console.log("RESULT:","This exists in the array.")
    }else{
        console.log("The value/element is not in the array.")
    }
}

iselementExist(result,"INTECBRUSSEL")

console.log(result)
