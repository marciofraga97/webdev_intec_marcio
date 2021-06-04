// this Keyword
// {global} this == window ---> true

let obj_person = {
    fullname: "Joe Dalton",
    email: "root@root.com",
    PrintInfo: function(){
        console.log(this.fullname)
    }
}

obj_person.PrintInfo() // Result: Joe Dalton
/*
function showMeWhereIAm(){
    function x (){
        console.log(this)
    }
    x()
}

showMeWhereIAm()
*/

// NoTICE THE DIFFERENCE!

let student = {
    name: "Joe",
    age: "21",
    email: "joe@root.com",
    password: "123456",
    show: ()=>{ // Using an arrow function with "student.name"
        console.log("hello")
        let result = `Name: ${student.name}`
        console.log(result)
    }

}

student.show()
// Result: hello
//         Name: Joe

let student2 = {
    name: "Mama",
    age: "21",
    email: "mama@root.com",
    password: "123456",
    show: ()=>{ // Using "this.name" will result as undefined
        let result = `Name: ${this.name}`
        console.log(result)
    }

}

student2.show() // Result: Name: undefined

// x.remove() deletes the selected declaration(x) automatically. It is shown in browser.

// Fun fact: <li> is also to be considerated as an object.
