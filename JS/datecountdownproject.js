let result

let currentDate = new Date()
let newDate = new Date("June 1 2021")

// Timestamp format
/*
days = totalTime/3600/24
hours (totalTime/3600) % 24
mins (totalTime/60) % 60
seconds totalTime % 60
*/

let totalTime = newDate - currentDate/1000

console.log(newDate)
console.log(totalTime)
console.log(currentDate)

// setInterval()
/*
let i = 0
setInterval(function(){
    i++
    console.log("Hello", i)
}, 1000)


setInterval(function(){
    console.log(new Date())
},1000)
*/
// unix timestamp

setInterval(function(){
    totalTime++
    if (totalTime == newDate){
        clearInterval(totalTime)
    }
    console.log(totalTime, Date())
}, 1000)