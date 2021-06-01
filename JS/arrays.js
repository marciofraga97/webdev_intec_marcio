var arrayNamen = [];

arrayNamen[0] = "Lal";

arrayNamen[1] = "mini";

arrayNamen[2] = 'maxi';

arrayNamen[3] = [1,2,3]

//arrayNamen[1] = "Ken";

console.log(arrayNamen[3][1]);



// arrayNamen[0] lal = l = a = l



// let str = "Lal"

// console.log(str[1])

// Access Multi-Dimensional Arrays With Indexes

// Example:

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
console.log(myData)

// Explanation below:

/*
[2] refers to the amount of nested arrays inside of one array:
[1,2,3] = [0]; [4,5,6] = [1]; [7,8,9] = [2]; [[10,11,12], 13, 14]] = [3]

...[1] refers to the index of the selected array, which is [2].
Ex: 2 = [0][1]; 4 = [1][0]; 9 = [2][2]; [10, 11, 12] = [3][0]

if you want to add a third index number, you need to have a nested array inside an array, like the last one:
12 = [3][0][2] because [3] = [[10,11,12], 13, 14]]; [0] = [10, 11, 12] and [2] = 12
*/
