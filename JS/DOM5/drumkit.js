/*
<audio data-key="65" src="sounds/clap.wav"></audio>
<audio data-key="83" src="sounds/hihat.wav"></audio>
  <audio data-key="68" src="sounds/kick.wav"></audio>
  <audio data-key="70" src="sounds/openhat.wav"></audio>
  <audio data-key="71" src="sounds/boom.wav"></audio>
  <audio data-key="72" src="sounds/ride.wav"></audio>
  <audio data-key="74" src="sounds/snare.wav"></audio>
  <audio data-key="75" src="sounds/tom.wav"></audio>
  <audio data-key="76" src="sounds/tink.wav"></audio>
*/

let audioItems = document.querySelectorAll("audio")

console.log(audioItems)

audioItems.forEach(audio=>{
    let key = audio.getAttribute("data-key")
    console.log(key)
})

function playAudio(key){
    audioItems.forEach(audio=>{
        let audio_key = audio.getAttribute
        if(audio_key == key){
            audio.play()
        }
    })
}

// playAudio("71")

document.querySelectorAll(".key").forEach(btn=>{
    // console.log(btn)
    let audioKey = btn.getAttribute("data-key")
    console.log(audioKey)
    btn.addEventListener("click",function(e){
        console.log(e.target.parentElement)
        playAudio(audioKey)
    })
})

// Sebastien Solution

//const keys = document.querySelectorAll('.key')

// keys.forEach((e)=> {
//     e.addEventListener('click', function(a) {
//         key = a.path[1]
//         key.classList.toggle('playing')
//         setTimeout(function() {
//         key.classList.toggle('playing')
//     },200)    
//     audio = document.querySelectorAll(`[data-key="${key.dataset.key}`)[1]
//     audio.play()
//     })
// })