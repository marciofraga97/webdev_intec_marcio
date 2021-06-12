var todoList = document.querySelectorAll("li")

function removeItem(){
    todoList[0].remove()
}

function removeAll(){
    if(confirm("Are you sure you want to delete the list?") == true){
        todoList[0].remove()
        todoList[1].remove()
        todoList[2].remove()
        todoList[3].remove()
        todoList[4].remove()
        todoList[5].remove()
        todoList[6].remove()
        todoList[7].remove()
    } else {}
}