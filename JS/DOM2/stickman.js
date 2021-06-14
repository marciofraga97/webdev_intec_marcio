const Stickman = document.querySelector('.stickman')

let pixel = 1
let startPosition = 100;
let isStickmanMoveLeft = true;

function WalkAction() {
    //  console.log('hello')
    startPosition += isStickmanMoveLeft ? pixel : -pixel
    // console.log(startPosition)
    Stickman.style.right = `${startPosition}px`
    if (startPosition >= window.innerWidth - 500 || startPosition <= 100) {
        isStickmanMoveLeft = !isStickmanMoveLeft // false
        console.log(isStickmanMoveLeft)
        Stickman.classList.toggle('flip')
    }

 //   Stickman.classList.remove('flip')
}


setInterval(WalkAction, 1)