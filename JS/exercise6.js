let students = [
    {
        username:"jack",
        scores:[]
    },
    {
        username:"jack1",
        scores:[]
    },
    {
        username:"jack2",
        scores:[]
    },
    {
        username:"jack3",
        scores:[]
    },
    {
        username:"jack4",
        scores:[]
    }
]

// Loop version

let i
for (i = 0; i < students.length; i++){
    
    // for (statement 1: executed (one time) before the execution of the code block.;
    // i = 0, means that every i element is assigned to 0.
    
    //statement 2: defines the condition for executing the code block.;
    //i < students.length, means that the i element must be ended by the the following length of every student, in this case 5.

    //statement 3: executed (every time) after the code block has been executed.)
    //i++, means that every i element encrements or increases number.

    // => for (i=0; i<x; i++)
    console.log(students[i])
    students[i].scores.push(i)
}

console.log(students)

/* Results in console:
{ username: 'jack', scores: [] }
{ username: 'jack1', scores: [] }
{ username: 'jack2', scores: [] }
{ username: 'jack3', scores: [] }
{ username: 'jack4', scores: [] }
[
  { username: 'jack', scores: [ 0 ] },
  { username: 'jack1', scores: [ 1 ] },
  { username: 'jack2', scores: [ 2 ] },
  { username: 'jack3', scores: [ 3 ] },
  { username: 'jack4', scores: [ 4 ] }
]
*/