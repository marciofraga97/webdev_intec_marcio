const API_URL = "https://jsonplaceholder.typicode.com/users"
const postsContainer = document.querySelector(".posts")

// fetch(API_URL)
// .then(res => res.json())
// // .then(function(response){
// //   console.log(response)
// // })
// .then(data => data.filter(post => post.id == 2))
// .then(lastfilterdata => console.log(lastfilterdata))

const c = t => document.createElement(t)

function postTitleGen(objectData){
    let a = c("a")
    a.href="#"
    a.className="lead d-block"
    a.id="post"
    a.setAttribute("data-toggle", "modal")
    a.setAttribute("data-target", "#postdetail")
    a.innerText=objectData.title
    postsContainer.appendChild(a)
}

window.addEventListener("DOMContentLoaded", event =>{
    console.log("test")
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.map(post=>{
            console.log(post)
            postTitleGen(post)
        })
    })
})

async function getSinglePost(id){  // NOTE: Await is only valid in async functions and the top level bodies of modules.
    let response = await fetch(`${API_URL}/${id}`)
    let data = response.json()
    return data
}

// Test:

getSinglePost(10)
.then(res=>{
    console.log(res)
})

// If you input an id of the getSinglePOst, it will appear in the console.

postsContainer.addEventListener("click", e=>{
    console.log(e.target.getAttribute("key"))
    getSinglePost(e.target.getAttribute("key")) // Here can you view the post data. 
    .then(response=>{
        console.log(response)
    })
})

// This event allows you to click the link and see the targeted link and the id number with the console.

// console.log(getSinglePost(10))

// console.log(`${API_URL}/${id}`)

// postTitleGen({title: "IntecBrussel"})