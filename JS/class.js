// function is a method from ES5.

// function Student (){
//     this.name = "Jack"
//     this.age = 30
// }

// const student1 = new Student()

// When you create an object, you need to create a function first.

// ES6 version:

// constructor() is a method only used for ES6.
// You set up the parameters used in the previous function to store them into the constructor with the help of this.object.
//Note: A class may only have ONE constructor.
class NewStudent {
    constructor(name = `Jack`, age = `30`, role = `visitor`){ 
        this.name = name
        this.age = age
        this.role = role
    }
    showStudent(){
        return `My name is ${this.name} and I'm ${this.age} years old.`
    }
    showStudent2(){
        return `Role: ${this.role}`
    }
    // You can also store data in localStorage() with constructors too.
    addStudent(name, age){
        return localStorage.setItem("students", JSON.stringify({name, age}))
    }
}

// This is a way to capture data being much easier than ES5.

const student2 = new NewStudent()
console.log(student2, "\n", student2.showStudent(), "\n", student2.showStudent2())
// student2.addStudent("Jack", "30") ---> inplemented in localStorage

// If you pass a specific parameter, it will change right away.

// Example: const student4 = new NewStudent3("plumber") ----> Console: Role: plumber (and NOT visitor.)
