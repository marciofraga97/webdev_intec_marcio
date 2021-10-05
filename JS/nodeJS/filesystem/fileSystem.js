// nodeJS: Filesystem
// NOTE: Turn the commands into comments to run codes one at the time to avoid conflicts.

// Console.log command -----> node filepath/fileName.js localTextfile.txt "Write anything you want to add data"

const fs = require("fs") // Core Module

// npm i fs > not needed

let inputFile = process.argv[2] // return array ["arg" "arg" "arg"]

// Read a file:

// fs.readFile("readme.txt","utf-8", function(err, data){ // UTF-8 is needed to convert code in human readable data.
//     if(err){
//         console.log(err)
//     } else {
//         console.log(data) // Output: INTECBRUSSEL
//     }
    
// })

// Write a file:

// let fileName = process.argv[2] // Can be any filename.txt
// // let data = process.argv[3]
// fs.writeFile(fileName,data,function(err){
//     if(err){
//         console.log(err)
//     } else {
//         console.log("File saved!")
//     }
// })

// Append data into existing file:

// fs.appendFile(fileName, data, function(err){
//     if(err){
//         console.log(err)
//     } else {
//         console.log("Updated!")
//     }
// })

// fs.writeFile("test.txt", "This is a text file.", function(err, res){
//     if(err){
//         console.log(err)
//     } else {
//         console.log("File saved!")
//     }
// })

// console.log("My filename is", fileName) // Output: My filename is (textfile name written in the console)
// console.log("My data is", data)
// console.log(process.argv)

// Delete a file:

// fs.unlink(fileName, function(err){
//     if(err){
//         console.log(err)
//     } else {
//         console.log("File is deleted!")
//     }
// })

let newFileName = process.argv[3] // Get new filename from this argument.

// Rename a file:

// fs.rename(fileName, newFileName, function(err){
//     if(err){
//         console.log(err)
//     } else {
//         console.log("File has been renamed!")
//     }
// })

// Export API data into the local file:

// (1) Use the writeFile() method with fetch() method.
// (2) Save it in your local computer.