let result
let newDate = new Date("June 01 2021").getTime()

// Timestamp format
/*
days = totalTime/3600/24
hours (totalTime/3600) % 24
mins (totalTime/60) % 60
seconds totalTime % 60
*/

setInterval(function(){
    let currentDate = new Date().getTime()
    let totalTime = newDate - currentDate/1000
    //let days = Math.floor(totalTime/3600/24);
    let hours = Math.floor((totalTime/3600) % 24)
    let mins = Math.floor((totalTime/60) % 60)
    let secs = Math.floor(totalTime % 60)
    let displayTime = [hours, mins, secs]
    console.log(displayTime.join(":"), "until June 1st, 2021")
    if (totalTime < 0){
        clearInterval(setInterval())
        console.log("Countdown finished!")
    }
}, 1000)
