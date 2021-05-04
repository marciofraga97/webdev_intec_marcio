const x = 1;
let y = 5;

console.log(y, "before funtion")

function run(){
 const x = 2 //function scope
 console.log(x)
 y = 10
 console.log(y, "in function")
}

run()
console.log(y, "out of function")
console.log(x)