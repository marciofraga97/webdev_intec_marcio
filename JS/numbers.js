// NUMBER METHODS
let result

// parseInt() Method
// Number()
let number = "1000"

//result = parseInt(number)
result = Number(number)

// parseFloat() Method

result = parseFloat("10.5") // result is 10.5
result = isFinite(10.5) // result is true
result = isFinite(9999999) // result is true
result = isFinite("hello") // result is false
result = isFinite("number123") // result is false
result = isFinite("10x") // result is false
/*result = isFinite(function(){
    return 10.05
})*/

let phoneNumber = "04450234554"

if(isFinite(phoneNumber)){
    // Run code here
    console.log("Yes, it's a number") // true if you use numbers only
}else{
    console.log("Please, use numbers only") // false if there is other character values 
}

// isFixed() Method

let salary = 1000.63567

result = salary.toFixed() //The result rounded to 1001 because it passed over the decimal of 5.
// If the decimals are less than 4, it's rounded to 1000.

function fixedsalary(employeesalary){
    console.log("Employee's salary is",employeesalary.toFixed())
}

fixedsalary(salary) // The console says: Employee's salary is 1001

console.log(result)