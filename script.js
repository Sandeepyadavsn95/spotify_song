console.log("welcome to spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement= new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =  document.getElementById('myProgressBar');
let gif=  document.getElementById('gif');
let masterSongName=  document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"badsah", filePath:" https://www.mboxdrive.com/1.mp3", coverPath:"cover1.jpg"},
    {songName:"no limit", filePath:" https://www.mboxdrive.com/2.mp3", coverPath:"cover1.jpg"},
    {songName:"aweli", filePath:"https://www.mboxdrive.com/3.mp3", coverPath:"cover1.jpg"},
    {songName:"Dilber", filePath:"https://www.mboxdrive.com/4.mp3", coverPath:"cover1.jpg"},
    {songName:"Farming", filePath:" https://www.mboxdrive.com/5.mp3", coverPath:"cover1.jpg"},
    {songName:"leke pehla pyaar", filePath:" https://www.mboxdrive.com/6.mp3", coverPath:"cover1.jpg"},
    {songName:"Oh na na ", filePath:"https://www.mboxdrive.com/9.mp3", coverPath:"cover1.jpg"},
    {songName:"tere bare m", filePath:" https://www.mboxdrive.com/8.mp3", coverPath:"cover1.jpg"},
    {songName:"Tum ishq nahi", filePath:" https://www.mboxdrive.com/9.mp3", coverPath:"cover1.jpg"},
    {songName:"ye lelili", filePath:" https://www.mboxdrive.com/10.mp3", coverPath:"cover1.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex +1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex =0;

    }else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex +1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex =0;

    }else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex +1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})