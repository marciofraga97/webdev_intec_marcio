// Use this function to create a generator.

const generator = t => console.log(document.querySelector(t))

// Each time you use an HTML element inside of this function, it gives you the nodelist in the browser console.

generator("li") // It will show the contents inside of <li>.