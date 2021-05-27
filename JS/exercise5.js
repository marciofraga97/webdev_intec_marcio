// getElementById for element selector

// callback function onclick
   // - random 1-6
   // - print numbers in to placeholder1 and placeholder2 

   document.getElementById("diceRollerbutton").onclick = function rollDice(){;
    var number1 = document.getElementById("placeholder1");
    number1.innerHTML = Math.floor(Math.random() * 6 + 1);
    var number2 = document.getElementById("placeholder2")
    number2.innerHTML = Math.floor(Math.random() * 6 + 1);
    if (number1.innerHTML > number2.innerHTML){
        document.getElementById("result").textContent = "You won!"
        document.getElementById("result").style.color = "green"
        document.getElementById("result").classList.add("win");
        document.getElementById("placeholder2").classList.add("stopDice")
        document.getElementById("placeholder1").classList.add("win")
    } else if (number1.innerHTML < number2.innerHTML){
        document.getElementById("result").textContent = "You lose..."
        document.getElementById("result").style.color = "red"
        document.getElementById("result").classList.add("lose");
        document.getElementById("placeholder1").classList.add("stopDice")
        document.getElementById("placeholder2").classList.add("win")
    } else if (number1.innerHTML == number2.innerHTML){
        document.getElementById("result").textContent = "It's a draw!"
        document.getElementById("result").style.color = "orange"
        document.getElementById("placeholder1").classList.add("stopDice")
        document.getElementById("placeholder2").classList.add("stopDice")
    }
}


