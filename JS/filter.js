const arr = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]

arr.filter(function(search){
    console.log(search) // Gives you every object in the array.
    console.log(search.id) // Gives you every id of each object from the array.
    console.log(search.id = 1) // The id becomes constant when you set a new id value.
})