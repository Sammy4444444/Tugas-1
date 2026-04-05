const music = document.getElementById("bg-music")

const playBtn = document.getElementById("music-btn")
const nextBtn = document.getElementById("next-btn")
const prevBtn = document.getElementById("prev-btn")

const volumeSlider = document.getElementById("volume-slider")

let playlist = [

"music/song1.mp3",
"music/song2.mp3",
"music/song3.mp3",
"music/song4.mp3",
"music/song5.mp3",
"music/song6.mp3",
"music/song7.mp3",
"music/song8.mp3",
"music/song9.mp3",
"music/song10.mp3"

]

let songIndex = 0
let playing = false

function loadSong(index){

music.src = playlist[index]

}

loadSong(songIndex)

playBtn.onclick = function(){

if(!playing){

music.play()
playBtn.innerHTML="⏸"
playing = true

}else{

music.pause()
playBtn.innerHTML="▶"
playing = false

}

}

nextBtn.onclick = function(){

songIndex++

if(songIndex >= playlist.length){

songIndex = 0

}

loadSong(songIndex)
music.play()
playing = true
playBtn.innerHTML="⏸"

}

prevBtn.onclick = function(){

songIndex--

if(songIndex < 0){

songIndex = playlist.length - 1

}

loadSong(songIndex)
music.play()
playing = true
playBtn.innerHTML="⏸"

}

music.addEventListener("ended",function(){

songIndex++

if(songIndex >= playlist.length){

songIndex = 0

}

loadSong(songIndex)
music.play()

})

volumeSlider.addEventListener("input",function(){

music.volume = volumeSlider.value

})

const progressContainer = document.querySelector(".progress-container")
const progressBar = document.getElementById("progress-bar")

const currentTimeEl = document.getElementById("current-time")
const durationEl = document.getElementById("duration")

// update progress bar
music.addEventListener("timeupdate", () => {

const {duration, currentTime} = music

const progressPercent = (currentTime / duration) * 100

progressBar.style.width = progressPercent + "%"

// current time
let minutes = Math.floor(currentTime / 60)
let seconds = Math.floor(currentTime % 60)

if(seconds < 10) seconds = "0" + seconds

currentTimeEl.textContent = minutes + ":" + seconds

})

// duration
music.addEventListener("loadedmetadata", () => {

let minutes = Math.floor(music.duration / 60)
let seconds = Math.floor(music.duration % 60)

if(seconds < 10) seconds = "0" + seconds

durationEl.textContent = minutes + ":" + seconds

})

// click progress bar
progressContainer.addEventListener("click", (e)=>{

const width = progressContainer.clientWidth

const clickX = e.offsetX

const duration = music.duration

music.currentTime = (clickX / width) * duration

})

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

target.scrollIntoView({
behavior: 'smooth'
});

});

});

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

window.scrollTo({
top: target.offsetTop - 80,
behavior: "smooth"
});

});

});


const sakuraContainer = document.querySelector(".sakura-container")

for(let i=0;i<30;i++){

let sakura = document.createElement("img")

sakura.src = "img/sakura.png"

sakura.classList.add("sakura")

sakura.style.left = Math.random()*100 + "%"
sakura.style.top = "-50px"

sakura.style.animationDuration = 4 + Math.random()*6 + "s"
sakura.style.animationDelay = Math.random()*5 + "s"

sakura.style.transform = `rotate(${Math.random()*360}deg)`

sakuraContainer.appendChild(sakura)

}







