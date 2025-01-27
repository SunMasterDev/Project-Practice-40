const textEl=document.getElementById('text')
const speedEl=document.getElementById('speed')

const text='ยินดีต้อนรับเข้าสู่หน้าแรกของเว็บไซต์';
let speed=300/speedEl.value; // 300/1 300/2 //ค่าเริ่มต้น

let characterId=0;

writeText(); //เรียกใช้ก่อน

function writeText(){
    textEl.innerText=text.slice(0,characterId);//การดึงสมาชิกมาใช้ ตำแหน่งสุดท้ายลบ -1
    characterId++;//เพิ่มทีละ 1
    if(characterId>text.length){ //มากกว่าสุดท้ายหรือยัง แล้วให้วนวูป
        characterId=1;
    }

    setTimeout(writeText,speed)//กำหนดให้โค้ดทำงานหลังเวลาที่กำหนด //speed คือช่วงเวลาที่กำหนด
}

speedEl.addEventListener('input',(e)=>{ //เพิ่มความเร็วใน input
    speed=300/e.target.value;
})