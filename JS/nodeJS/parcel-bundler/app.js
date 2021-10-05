function sayHello(name){
    console.log(`Hey!, ${name}`)
}

function MakeHTMLTemplate(title){
    let template = document.createRange().createContextualFragment(`<h1 class="display-3">${title}</h1>`)
    
    return document.querySelector(".container").appendChild(template)
}

export {sayHello, MakeHTMLTemplate}