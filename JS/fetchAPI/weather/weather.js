// Selectors

const _editIcon = document.querySelector("._edit")
const cityName = document.querySelector(".city")
const searchBody = document.querySelector(".search")
const _temp = document.querySelector(".temp > span")

// API Applications

class WeatherApplication {
    constructor(city){
        this.city = city
        this.baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=478ffb28c66056439168627578c5d45c`
    }

    getCurrentWeather(){
        fetch(this.baseURL)
        .then(res => res.json())
        .then(data => {
            this.baseURL
        })
    }
}


// DOM Manipulation

_editIcon.addEventListener("click", (e)=>{
    e.preventDefault()

    const inputElement = `<input type="text" class="searchcity" placeholder="Search for a city...">`
    const tempElement = `<span class="temp"></span>`
 
    //console.log("hello")
    _editIcon.style.display = "none"
    cityName.style.display = "none"
    _temp.innerHTML = "--"

    searchBody.insertAdjacentHTML("afterbegin", inputElement)
    _temp.insertAdjacentHTML("afterbegin", tempElement)

    document.querySelector(".searchcity").addEventListener("focusout", (e)=>{
        //console.log("hi")
        cityName.innerHTML = document.querySelector(".searchcity").value
        let weather = new WeatherApplication(document.querySelector(".searchcity").value)
        _editIcon.style.display = "inline"
        cityName.style.display = "inline"
        searchBody.removeChild(searchBody.children[0])
        weather.getCurrentWeather()

        _temp.innerHTML = document.querySelector(".temp").value
        let temp = new WeatherApplication(document.querySelector(".temp").value)
        _temp.style.display = "inline"
        _temp.removeChild(_temp.childNodes[0])
        temp.getTemperature()

    })
})
