const musicContainer=document.getElementById('music-container') //ควบคุมการเล่น
const playBtn=document.getElementById('play')
const prevBtn=document.getElementById('prev')
const nextBtn=document.getElementById('next')
const audio=document.getElementById('audio')
const progress=document.getElementById('progress')
const progress_container=document.getElementById('progress-container')
const title=document.getElementById('title')
const cover=document.getElementById('cover')


const songs=["Contra","HavestMoon","Mario"] //array เก็บเพลง
let index=2

function loadSongs(song){
    title.innerText=`เพลง ${song} .mp3`
    cover.src=`Icon/${song}.jpg`
    audio.src=`Music/${song}.mp3`
}

loadSongs(songs[index])

playBtn.addEventListener('click',()=>{
    const isPlay=musicContainer.classList.contains('play') //contains คือ คำสั่งของ jQuery ในหมวดของ Selector ซึ่งมีไว้สำหรับการเข้าถึง และจับคู่ข้อมูลที่อยู่ใน Elements ต่าง ๆ กับการประมวลผล เช่น การเพิ่ม Class
    if(isPlay){
        pauseSong()//หยุดเล่น
    }else{
        playSong()
    }
})

prevBtn.addEventListener('click',()=>{
    index--; //ลดค่า index ทีละ 1
    if(index<0){ //ตรวจเงื่อนไขค่า index
        index=songs.length-1 //ย้ายไปเพลงสุดท้าย
    }
    loadSongs(songs[index]) //โหลดเพลงใหม่
    playSong()
})

nextBtn.addEventListener('click',nextSong)

function nextSong(){
    index++;
    if(index>songs.length-1){ //อยู่มากกว่าที่สมาชิกตัวสุดท้ายหรือยัง
        index=0;
    }
    loadSongs(songs[index])
    playSong() //ให้เล่นเพลงนั้น
}


function playSong(){ //i.fa-solid อ้างอิงไปที่ tag i แล้วไปยัง class 
    musicContainer.classList.add('play') //add เพิ่ม
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play') //ลบไอคอน play
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause') //เพิ่มไอคอน pause
    audio.play() //เล่นเพลง
}

function pauseSong(){
    musicContainer.classList.remove('play') //remove ลบ
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause')
    playBtn.querySelector('i.fa-solid').classList.add('fa-play')
    audio.pause() //หยุดเพลง
}

audio.addEventListener('timeupdate',updateProgress)

function updateProgress(e){
    const {duration,currentTime}=e.srcElement //durationเวลาทั้งหมด currentTime คือเวลาที่กำลังเล่น
    const progressPercent=(currentTime/duration)*100
    progress.style.width=`${progressPercent}%` //ต้องใส่ % เข้าไปด้วย
}   

progress_container.addEventListener('click',setProgress)

function setProgress(e){
    const width=this.clientWidth //ตัว w ต้องเป็นตัวใหญ่
    const clickX=e.offsetX
    const duration=audio.duration
    audio.currentTime=(clickX/width)*duration
}

audio.addEventListener('ended',nextSong) //เล่นเพลงถัดไปเมื่อจบเพลง