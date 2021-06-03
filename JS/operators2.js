let result //This allows the results to be displayed inside the console and tells if it's "true" or "false".

// Given values:

let number1, number2
let str1, str2

number1 = 11
number2 = 10

str1 = "Joker"
str2 = "joker"

console.log(typeof number1, typeof number2)

// COMPARISION OPERATORS = Comparision operators ae used to determine equality or difference between variables or values.

// Equal to (==)

result = number1 == number2 // Checks only the values if written two times. The outcome is false because 11 and 10 are not equal to eachother.

result = number1 === number2 // Checks datatype and variable value if written three times. The outcome is false because 11 and 10 are no equal t each other.

result = str1 == str2 // The outcome is false because they "Joker" and "joker" are not equal.

result = str1 === str2 // The outcome is false because they "Joker" and "joker" are not equal.

// Not Equal (!=)

result = number1 != number2 // The outcome is true because 10 is not equal to 11.

result = str1 != str2 // The outcome is true because "Joker" is not equal to "joker".

result = number1 !== number2 // The outcome is true because 10 and 11 are no equal in both value.

// Greater than (>)

result = number1 > number2 // The outcome is true because 11 is greater than 10.

result = str1 > str2 // false what

// Less than (<)

result = number1 < number2 // The outcome is false because 10 is less than 11.

result = str1 < str2 // true again what

// Greater than or equal to (>=)

result = number1 >= number2 // The outcome is true because 11 is greater than 11 and both are equal datatypes.

result = str1 >= str2 // The outcome is false because "Joker" is not equal to "joker" and wot

// Less than or equal to (<=) 

result = number1 <= number2 // The outcome is false because 10 is less than 11 and both have different values.

result = str1 <= str2 // The outcome is true because both values are strings and i'm--

// Equal value AND equal type (===)

result = number1 === number2 // Result: false ---> Let's say 10 = "10" is true, the result will become false because those two are different data types (number ≠ string).

// Not equal value NOR equal type (!==) 

result = number1 === number2 // Result: true because while thy are both numbers, they are not qual to eachother as values (11 ≠ 10)

//LOGICAL OPERATORS = Logical operators are used to determine the logic between variables or values.

//And (&&)

if(number1 == 3 && (typeof number1) == 'number'){
    console.log('yes')
}else{
    console.log('no')
} // yes/true - yes/true = yes 
  // yes/true - no/false = false
  // is number1 equal to 3? Is number1 a data type?

//Or (||)

if(number1 == 5 || (typeof number1) == 'string'){
    // true - false = true
    // false - false = false
    // false - true = true
    console.log()
}


//Not (!)


console.log("Result:",result)
