// while loop

/*

while(condition){
    // js code here
}

*/

//let control = false
//control = 1>2
//console.log(control)
//while(control){ // Result: false ------> control stops or doesn't executes the loop
  //  console.log("Hello")
//}

//control = 1>2
//console.log(control)
//while(control){ // Result: false ------> control stops or doesn't executes the loop
  //  console.log("Hello")
//}

let i = 0
//while(i<10){
  //  console.log("Hello while loop", i)
    //i = i + 1 // Loop starts with 0
//}

// for(i;i<10;i++){
    // console.log("Hello while loop", i)
//}
//let y = 0
//while(y<10){
  //  y = y + 1 // Loop starts with 1
    //console.log("Hello while loop", y)
//}

let numbers = [1,"Marcio",3,"Atilla",5,"Yasmine",7,8,9,10]
//let index = numbers.length

//while(i<index){
 //   console.log(numbers[i])
   // i++
//}
i = 0
let nums = [1,2,3,4,5,6,7,8,9,10]
let index = nums.length
let total = 0

while(i<index){
    //console.log(i)
    // console.log(nums[i])
    total += nums[i]
    // total + next number in nums -------> 1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 = 15 + 6
    i++
}

console.log(total)

let age = 21
let control = age > 25
console.log(control)

while(control || age == 21){
    console.log("looping message") // if it's true, it runs the looping message. It stops executing whenever it's false.
}
