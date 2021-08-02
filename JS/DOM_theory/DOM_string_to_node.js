
// let div = document.createElement()

let singleLi = `<li class="list-group-item disabled">Disabled item</li>` // dom string

// 1.solution
let template = document.createRange().createContextualFragment(singleLi) // node element

// .createRange() = allows you to create a new node to a string.
// .createContextualFragment(x) = retrieves the selected node (in this case it is "x") and creates a new string.
// So x = <h1>Header</h1> will show up in the browser without changing inside the HTML file.  

template.childNodes[0].textContent="INTECBRUSSEL"
document.querySelector('.list-group').appendChild(template)

// 2.solution
let convertIt = new DOMParser().parseFromString(singleLi,'text/html') // converted in to node element!
console.log(convertIt.childNodes[0].childNodes[1].childNodes[0])