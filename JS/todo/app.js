// Navigation in DOM Tree

const cardBody = document.querySelectorAll(".card-body")[1]

let result

result = cardBody.children[4]  // Result. list-group
// result.cardBody.children[4].children // Selected the li elements
// result.cardBody.children[4].children[0] // Selected the first li element
cardBody.children[4].children[0].innerHTML = "INTECBRUSSEL" // Added "INTECBRUSSEL" into .card-body

const redBtn = document.querySelector(".btn-danger")
result = redBtn
result = redBtn.parentElement // selects one element and goes one up

const listofTodos = document.querySelectorAll(".list-group-item:nth-child(even)") // there is "(odd)" as well, which is the opposite of "(even)".

listofTodos.forEach(function(li){
    li.classList.add("bg-secondary")
})

const todoListBody = document.querySelector(".list-group")

// todoListBody.innerHTML ='your changes in HTML here'

result = cardBody.firstElementChild // Always brings the first element inside of an element (Result: hr)
result = cardBody.childElementCount // Counts how many children there are in a selected element.
result = cardBody.lastElementChild // Always brings the last element inside of an element.

let single_li = document.querySelector("li")

result = single_li.nextElementSibling // Always brings the next element near of a selected element.

result = redBtn.previousElementSibling // Always brings the previous element near of a selected element.

let card = document.querySelector(".card")

result = card.previousElementSibling

console.log(result)