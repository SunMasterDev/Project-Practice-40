const wordEl=document.getElementById('word')
const textEl=document.getElementById('text')
const scoreEl=document.getElementById('score')
const timeEl=document.getElementById('time')

const btnLevelEl=document.getElementById('level-btn')
const settingsEl=document.getElementById('settings')
const levelFormEl=document.getElementById('level-from')
const levelEl=document.getElementById('level')
const gameOverEl=document.getElementById('gameover-container')

const words =["เศรษฐี","แมว","หมู","ไก่","จักรยาน","นก","หมา","จระเข้"]

let randomText;
let score=0;
let time=0; // easy 15 , medium 10 , hard 5
const saveMode=localStorage.getItem("mode") !== null ? localStorage.getItem("mode"): 'medium'; //กำหนดเป็นค่าเริ่มต้น

let level='medium';

const timeInterval=setInterval(updateTime,1000) //นับเวลา ลดเวลาลงที่ 1 setInterval(function,1000)

function getRandomWord(){
    return words[Math.floor(Math.random()*words.length)] //สุ่มคำ
}

function displayWordToUI(){
    randomText=getRandomWord();
    wordEl.innerHTML = randomText;
    timeEl.innerHTML= time //ทำให้เวลาแสดง 10 วิ ในตัวแปร time
    
}

textEl.addEventListener('input',(e)=>{
    const inputText = e.target.value

    if(inputText === randomText){
       if(saveMode == 'easy'){
            time+=5
        }else if(saveMode == 'medium'){ //else if()
            time+=3
        }else{
            time+=2
        }
        displayWordToUI();//ต้องอยู่หลัง ทำให้ไม่หน่วงเวลา
        updateScore();
        e.target.value =''
    }
})


function updateScore(){
    score+=10;
    scoreEl.innerHTML=score;
}

function updateTime(){
    time--;
    timeEl.innerHTML= time

    if(time === 0){
        clearInterval(timeInterval) //ให้หยุดนับเวลา เมื่อถึง 0
        gameOver()
    }
}

function gameOver(){
    gameOverEl.innerHTML =`
    <h1>จบเกมแล้วนะครับ !</h1>
    <p>คะแนนของคุณ = ${score} คะแนน</p>
    <button onclick='location.reload()'>เล่นอีกครั้ง</button>`; //ทำให้โหลดใหม่
    gameOverEl.style.display="flex" //เปิดการแสดงผลใน style
}
btnLevelEl.addEventListener('click',()=>{ //ใช้สำหรับซ้อนทับกัน สลับสถานะ
    settingsEl.classList.toggle('hide') //toggle() คือ คำสั่งของ jQuery ในหมวดของ Effects มีไว้สำหรับการแสดง และการซ้อน Elements ที่ต้องการ.
})

levelEl.addEventListener('change',(e)=>{ //ทำให้ระดับตอนเลือกไม่เปลี่ยนไปเป็นค่าเริ้่มต้น
    level=e.target.value;
    localStorage.setItem("mode",level); //เอาค่าไปเก็บใน local //localStorage.setItem(key, value) คือ การเก็บข้อมูลลงใน Local Storage.
   
});

function startGame(){
    //บันทึกโหมด
    levelEl.value=saveMode

    if(saveMode == 'easy'){
        time=15
    }else if(saveMode == 'medium'){ //else if()
        time=10
    }else{
        time=5
    }
    displayWordToUI()
}
startGame()
textEl.focus()//ทำให้ช่อง input กระพริบ