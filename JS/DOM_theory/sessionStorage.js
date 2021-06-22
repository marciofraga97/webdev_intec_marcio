const Output = document.querySelector('.output')
const AlertMessage = document.querySelector('.alert')
document.addEventListener('DOMContentLoaded',function(e){
    let getLastNumber = sessionStorage.getItem('counter')
    Output.innerHTML=`Clicked ${getLastNumber} times.`
})


document.querySelectorAll('button').forEach(button=>{
    button.addEventListener('click',function(e){
        e.preventDefault();
      //  console.log(button.classList.contains('inc'))
        if(button.classList.contains('inc')){
            console.log('this is increment button you clicked')
            incrementMethod()
        }
        if(button.classList.contains('dec')){
            console.log('this is decrement button you clicked')
            decreaseMethod()
        }
        if(button.classList.contains('res')){
            console.log('this is reset button you clicked')
            resetMethod()
        }

    })
})


function incrementMethod(){
    console.log('increaseeeeeeeee!!')
    let getNumber = Number(sessionStorage.getItem('counter'))+1
   // console.log(getNumber)
    sessionStorage.setItem('counter',getNumber)
    console.log(sessionStorage.getItem('counter'))
    Output.innerHTML = `Clicked ${sessionStorage.getItem('counter')} times.`
}

function decreaseMethod(){
    console.log('decreaseeeeeeeee!!')
    let getNumber = Number(sessionStorage.getItem('counter'))-1 // get last number and update it
    if(getNumber>=0){
        sessionStorage.setItem('counter',getNumber) // store updated number in session storage
        console.log(sessionStorage.getItem('counter'))
        Output.innerHTML = `Clicked ${sessionStorage.getItem('counter')} times.`
    }else{
        
        AlertMessage.style.display='block'

        setTimeout(()=>AlertMessage.style.display='none',2000)
        
    }

  
}

function resetMethod(){
    console.log('resetttttttttttt!!')
    sessionStorage.setItem('counter',0)
    Output.innerHTML = `Clicked ${sessionStorage.getItem('counter')} times.`
}