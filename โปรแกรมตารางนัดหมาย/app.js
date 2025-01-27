const countDownForm=document.getElementById('countDownForm')
const inputContainer=document.getElementById('input-container') //form
const dateEl=document.getElementById('date-picker')
const countDownEl=document.getElementById('countdown')

const countdownTitleEl=document.getElementById('countdown-title')
const countdownButtonEl=document.getElementById('countdown-btn')
const timeEl=document.querySelectorAll('span') //พลาดตรงนี้

const completeEl=document.getElementById('complete')
const completeInfoEl=document.getElementById('complete-info')
const completeButtonEl=document.getElementById('complete-btn')

//ตัวแปรในการทำงาน

let countDownTitle=''; //อย่าสับสนชื่อตัวแปรกับชื่ออ้างอิง //ตัวแปรหัวข้อเรื่อง
let countDownDate=''; //ตัวแปรวัน

let countdownValue=Date; //เก็บวันที่เลือกจากฟอร์ม
let countDownActive; //ตัวนับเวลา
let saveCountDown; //เก็บข้อมูล

//ตัวแปลงหน่วยเวลา
const second=1000;
const minute=second*60;
const hour=minute*60;
const day=hour*24;


countDownForm.addEventListener('submit',updateCountDown);

function updateCountDown(e){
    e.preventDefault() //อย่าลืมใส่ () //พลาด
    countDownTitle=e.srcElement[0].value;
    countDownDate=e.srcElement[1].value;

    if(countDownTitle === ''){
        alert('ป้อนข้อมูลไม่ครบ');
    }else{//("key",value) ผิดพลาด bug //พลาด localStorage
        saveCountDown={title:countDownTitle,date:countDownDate}; //JSON.stringify()เป็นการแปลงข้อมมูลจาก JavaScript Object ให้อยู่ในรูปของ JSON String. เมื่อทำการเรียกใช้งานฟังก์ชันแล้ว ก็จะได้ค่าที่เป็น string มาให้เราสามารถใช้งานได้
        localStorage.setItem("countDown",JSON.stringify(saveCountDown)); //localStorage.setItem(key,value) คือคำสั่งเพื่อบันทึกค่าลงใน Storage โดยเราจะระบุค่าคีย์พร้อมกับค่าที่จะเก็บ
        countdownValue=new Date(countDownDate).getTime(); //เวลาตั้งต้น //getTime () method คือเมธอดของออบเจ็กวันที่ในจาวาสคริปต์(method of Date object) เมธอดนี้ส่งคืนจำนวนมิลลิวินาที (milliseconds) ตั้งแต่วันที่ 1 มกราคม 1970
        setUpTime();
    }

}

function setUpTime(){ // setInterval ใช้เพื่อกำหนดให้โปรแกรมทำงานเป็นระยะจากช่วงเวลาที่กำหนด
    countDownActive=setInterval(()=>{
        const now = new Date().getTime();
        //ตั้งเอาไว้ - ปัจจุบัน
        const distance=countdownValue - now; //countdownvalue คือเวลาในอนาคต
        const days=Math.floor(distance/day);
        const hours=Math.floor((distance%day)/hour);
        const minutes=Math.floor((distance%hour)/minute);
        const seconds=Math.floor((distance%minute)/second);
        inputContainer.hidden=true; //ซ่อน input

        if(distance>0){//ถ้าน้อยกว่า 0 คือหมดเวลาละ ระวัง <
            //หมดเวลา
            countDownEl.hidden=true; //ปิดการแสดงผลนับเวลา
            completeEl.hidden=false; //เปิดการแสดงผลเสร็จสิ้น
            completeInfoEl.textContent=`${countDownTitle} วันที่ ${countDownDate}` //พลาด completeEl ต้องเป็น completeInfoEl //แสดงผลเสร็จสิ้น ชื่อ และ วันที่
            clearInterval(countDownActive); //clearInterval() วิธีการล้างจับเวลาตั้งค่าด้วย
        }else{
            countdownTitleEl.textContent=`${countDownTitle}` //การเพิ่มชื่อหัวข้อที่บันทึก
            //นับถอยหลังเรื่อยๆ
            timeEl[0].textContent=`${days}` //content ไม่ใช่ contant //พลาด
            timeEl[1].textContent=`${hours}`
            timeEl[2].textContent=`${minutes}`
            timeEl[3].textContent=`${seconds}`
            countDownEl.hidden=false; //แสดง input
            completeEl.hidden=true; //ปิดแสดง //ลืมใส่
        }
    },second)//นับทีละ 1 วิ
}

function callDatainStore(){
    if(localStorage.getItem("countDown")){//ให้ตรวจสอบ key 
        inputContainer.hidden=true;//ให้ปิดการแสดงผล
        saveCountDown=JSON.parse(localStorage.getItem("countDown")); //เก็บหัวข้อและเวลา
        countDownTitle=saveCountDown.title;
        countDownDate=saveCountDown.date; //จุดพลาด Date ไม่ได้เป็นตัวใหญ่
        countdownValue=new Date(countDownDate).getTime();
        setUpTime();
    }
}

function reset(){
    localStorage.removeItem("countDown"); //set get remove
    countDownEl.hidden=true;
    completeEl.hidden=true;
    inputContainer.hidden=false; /*ให้แสดง form*/
    clearInterval(countDownActive); //ยกเลิก countdown
    countDownTitle='';
    countDownDate='';
}

callDatainStore();
countdownButtonEl.addEventListener('click',reset)
completeButtonEl.addEventListener('click',reset)