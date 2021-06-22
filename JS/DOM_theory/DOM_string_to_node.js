
// let div = document.createElement()

let singleLi = `<li class="list-group-item disabled">Disabled item</li>` // dom string

// 1.solution
let template = document.createRange().createContextualFragment(singleLi) // node element
template.childNodes[0].textContent="INTECBRUSSEL"
document.querySelector('.list-group').appendChild(template)

// 2.solution
let convertIt = new DOMParser().parseFromString(singleLi,'text/html') // converted in to node element!
console.log(convertIt.childNodes[0].childNodes[1].childNodes[0])