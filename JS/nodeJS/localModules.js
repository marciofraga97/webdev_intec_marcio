const myCustomModule = require("./modules/module1")
const {getname, getsomofNumbers, getStudentNames} = require("./modules/tools")
// const getAllUsers = require('./modules/getUser')
// const getSingleUser = require("./modules/getSingleUser")

myCustomModule("Joe Dalton")

getname("Mike")
getsumofNumbers(5,9)
getStudentNames(["Joe", "Mike"])
// getAllUsers().then(data=>{
//     console.log(data)
// })
// getSingleUser(5).then(data=>{
//     console.log(data)   
// })