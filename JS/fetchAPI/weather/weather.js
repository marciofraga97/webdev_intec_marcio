// Selectors

const _editIcon = document.querySelector("._edit")
const cityName = document.querySelector(".city")
const searchBody = document.querySelector(".search")
const _temp = document.querySelector(".temp > span")

// API Applications

class WeatherApplication {
    constructor(city, temp, lon, lat){
        this.city = city
        this.temp
        this.lon = lon
        this.lat = lat
        this.baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=478ffb28c66056439168627578c5d45c`
        this.hourlyweather = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&exclude=current,minutely,daily,alerts&appid=478ffb28c66056439168627578c5d45c`
    }

    getCurrentWeather(){
        fetch(this.baseURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    getHourlyWeather(){
        fetch(this.hourlyweather)
        .then(res => res.json())
        .then(hours => {
            console.log(hours)
        })
    }
}


// DOM Manipulation

_editIcon.addEventListener("click", (e)=>{
    e.preventDefault()

    const inputElement = `<input type="text" class="searchcity" placeholder="Search for a city...">`

    console.log("hello")
    _editIcon.style.display = "none"
    cityName.style.display = "none"
    searchBody.insertAdjacentHTML("afterbegin", inputElement)

    document.querySelector(".searchcity").addEventListener("focusout", (e)=>{
        console.log("hi")
        cityName.innerHTML = document.querySelector(".searchcity").value
        let weather = new WeatherApplication(document.querySelector(".searchcity").value)
        _editIcon.style.display = "inline"
        cityName.style.display = "inline"
        searchBody.removeChild(searchBody.children[0])
        weather.getCurrentWeather()

        let temp_ = new WeatherApplication(document.querySelector(".temp > span"))
        temp_.getCurrentWeather()
        // temp.getCurrentWeather()
    })
})
