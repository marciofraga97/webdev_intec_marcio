// This code allows you to view how many repositories a given GitHub account has.

// Selectors

const API_URL = "https://api.github.com/users/"

const searchBox = document.querySelector("input")
const findBtn = document.querySelector("a")
const output = document.querySelector(".output")

// Object Oriented Applications

async function getRepo(username){
    let response = await fetch(`${API_URL}/${username}/repos`)
    let data = response.json()
    return data
}

// DOM Manipulation

findBtn.addEventListener("click", e=> {

    e.preventDefault()

    if(searchBox.value != ""){
        console.log("Please, enter a GitHub link.")
        getRepo(searchBox.value)
        .then(repos=>{
            console.log(repos.length)
            output.innerHTML=`${repos.length} repositories`
        })
    }
})