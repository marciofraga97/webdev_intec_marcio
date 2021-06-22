// first row
const firstCardBody = document.querySelector("fieldset")
const bookName = document.querySelector("input")
const author = document.querySelectorAll("input")[1]
const date = document.querySelectorAll("input")[2]
const price = document.querySelectorAll("input")[3]
const category = document.querySelector("select")
const addButton = document.querySelector(".btn.btn-outline-light.w-100.addbookbtn")

// second row
const secondCardBody = document.querySelectorAll(".row")[1]
const table = document.querySelector("table")
const bookList = document.querySelectorAll("tr")
const trash = document.querySelector(".fa.fa-trash.lead")
const deleteAll = document.querySelector(".btn.btn-primary.btn-sm.w-100.bg-danger.rounded-0")

// event listeners and misc.
addButton.addEventListener("click", addBook)
secondCardBody.addEventListener("click", clearList)
secondCardBody.addEventListener("click", deleteBook)

// // functions
function deleteBook(event){
    event.preventDefault()
    if (event.target.className == "fa fa-trash lead"){
        trash.parentElement.parentElement.parentElement.remove()
        window.sessionStorage.removeItem(bookName.value)  // didn't work :/ (only the first one)
    }
}

function clearList(event){
    event.preventDefault()
    if (event.target.className == "btn btn-primary btn-sm w-100 bg-danger rounded-0"){
        document.querySelectorAll("tr").innerHTML = "" // didn't work :/
    }
}

addButton.addEventListener("click", function reload (){
    if(bookName.value === ""){
        document.location.reload()
    }
})

function addBook(){
    
    let row = table.insertRow(1)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    let cell5 = row.insertCell(4)
    let cell6 = row.insertCell(5)
    let cell7 = row.insertCell(6)

    cell1.innerHTML = table.rows.length
    cell2.innerHTML = bookName.value

    if(author.value === ""){
        cell3.innerHTML = "Unknown"
    } else {
        cell3.innerHTML = author.value
    }

    cell4.innerHTML = category.value

    if(date.value === ""){
        cell5.innerHTML = "-"
    } else {
        cell5.innerHTML = date.value
    }

    if(price.value === ""){
        cell6.innerHTML = "No price available"
    } else {
        cell6.innerHTML = price.value + " €".bold()
    }

    cell7.className = "fa fa-trash lead" // the link doesn't appear
}

addButton.addEventListener("click", function storeBook (){
    window.sessionStorage.setItem(bookName.value, author.value)
})