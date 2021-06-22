const cardColumns = document.querySelectorAll(".card")

cardColumns.forEach(element=>{
    //console.log(element)

    // click: Executes a js code when the user clicks on the browser.
    // element.addEventListener("click", RunApplication)

    // dblclick: same as the click but the user needs to double click.
    //element.addEventListener("dblclick", RunApplication)

    // mousedown: same as the click but user needs to hover an element.
    //element.addEventListener("mousedown", RunApplication)

    // mouseup: same as the click
    // element.addEventListener("mouseup", RunApplication)

    // mouseover: same as the click but user needs to hover over an element. 
    //element.addEventListener("mouseover", RunApplication)

    // mouseout: same as the click but user needs to hover out of the element.
    //element.addEventListener("mouseout", RunApplication)
})

function RunApplication(e){
    console.log("Hello")
}