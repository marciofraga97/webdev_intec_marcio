var heads = 0;
var tails =0;

function flipCoin(){
    if (Math.random()>0.5){
    
     document.getElementById("imgBack").style.display = "inline"
     document.getElementById("imgFront").style.display ="none"
     tails++
     document.getElementById("tails").innerHTML="Tails: "+tails

    }else{
      
    document.getElementById("imgBack").style.display = "none"
    document.getElementById("imgFront").style.display ="inline"
    heads++
    document.getElementById("heads").innerHTML ="Heads: "+heads
    
    }
}

