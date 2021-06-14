// insertBefore(): Inserts elements before the targeted HTML element.

const cardColumns = document.querySelector(".card-columns")
console.log(cardColumns)
let h1 = document.createElement("h1")
h1.textContent = "INTECBRUSSEL"
console.log(h1)
// insertBefore()
console.log(cardColumns, childNodes)
cardColumns.insertBefore(h1, cardColumns, childNodes[4])

// append(): Adds multiple elements and injects data inside DOM strings.

let bigFontSize = "<h1>F0000</h1>"
// append()
cardColumns.append("<h1>test</h1>")
// cardColumns.appendChild("<h1>test</h1>") // you cannot use a string with appendChild while in append is allowed.

// prepend()

let IAMTHEFIRSTCHILD = document.createElement("h1")
IAMTHEFIRSTCHILD.innerText = "I AM THE FIRST CHILD"
cardColumns.prepend(IAMTHEFIRSTCHILD)

let IAMTHEFIRSTCHILD = document.createElement("h1")
IAMTHEFIRSTCHILD.innerText = "I AM THE FIRST CHILD"
cardColumns.prepend(IAMTHEFIRSTCHILD1)

// insertAdjacentHTML()

cardColumns.insertAdjacentHTML("afterbegin", "<h1>WEBDEVCLASS</h1>")
cardColumns.insertAdjacentHTML("afterend", "<h3>We are developers</h3>")
cardColumns.insertAdjacentHTML("beforebegin", "<h4>Fullstack</h4>")
cardColumns.insertAdjacentHTML("beforeend", "<h4>Fullstack2</h4>")

// cloneNode

let cardTemplate = cardColumns.firstElementChild.cloneNode(true)
cardTemplate.childNodes[0].childNodes[1].textContent = "INTECBRUSSEL 2021"
console.log(cardTemplate)

// replaceChild()

setTimeOut(() => cardColumns.replaceChild(cardTemplate,cardColumns.childNodes[9]), 3000)

// removeChild()

cardColumns.removeChild(cardColumns.firstElementChild)