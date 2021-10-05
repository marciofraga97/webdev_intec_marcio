let student = [{
    id: 1,
    name: "Joe1",
    pass: "123"
},
{
    id: 2,
    name: "Joe2",
    pass: "123"
},
{
    id: 3,
    name: "Joe3",
    pass: "123"
}]

student.forEach(student=>console.log(student))

function getSingleStudent (id){
    console.log(student[id], "single student object")
}

getSingleStudent(2)