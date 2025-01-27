const days=document.getElementById('days')
const hours=document.getElementById('hours')
const minutes=document.getElementById('minutes')
const seconds=document.getElementById('seconds')
const countDown=document.getElementById('countdown')

const currentYear=new Date().getFullYear(); //ไปดึงปีปัจุบัน
const newYearTime=new Date(`january 01 ${currentYear+1} 00:00:00`) //ไปดึง วันที่1 มกราคม //ปีปัจจุบัน+1 //วันที่กำหนดเป้าหมาย "วันปีใหม่"

function updateCountDown(){
    const currentTime=new Date() //เวลาปัจจุบัน
    const diff=newYearTime-currentTime //ปีใหม่-เวลาปัจจุบัน
    const day=Math.floor(diff/1000/60/60/24); //floor ปัดเศษลง /60นาที/60วินาที/24ชั่วโมง
    const hour=Math.floor(diff/1000/60/60)%24; // %, เป็นการหารเอาเฉพาะเศษ  %, เรียกว่า Modulus เป็นการหารแบบเอาเฉพาะ "เศษ"
    const minute=Math.floor(diff/1000/60)%60; //ข้อผิดพลาด minute เขียนผิด ในid ด้วย
    const second=Math.floor(diff/1000)%60;

    days.innerHTML=day; //แสดงข้อความในแท็ก HTML
    hours.innerHTML=hour < 10 ?"0"+hour:hour;
    minutes.innerHTML= minute < 10 ?"0"+minute:minute; //ลดรูปการเขียน if else
    seconds.innerHTML=second < 10?"0"+second:second;
}

setInterval(updateCountDown,1000) //กำหนดช่วงเวลาตามที่กำหนด