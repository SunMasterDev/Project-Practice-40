const container=document.getElementById('container');
const imgs=document.querySelectorAll('img'); //เรียก node list ก็ได้

const leftBtn=document.getElementById('left')
const rightBtn=document.getElementById('right')

//สร้างตัวนับภาพ
let idx=0;

let interval = setInterval(slide,2000); //ชื่อฟังก์ชั่น,ช่วงเวลา

function slide(){
    idx++; //เพิ่มค่าทีละหนึ่ง
    changeImg();
}

function changeImg(){
    //0 => 500 => 1000 =>1500
    //0 => idx 1*500 => 2*500 =>3*500
    if(idx>imgs.length-1){ // -1 คือค่าสุดท้าย
        idx=0;
    }else if(idx<0){
        idx=imgs.length-1;
    }
    container.style.transform=`translateX(${-idx*500}px)` //-500px
}

leftBtn.addEventListener('click',()=>{
    idx--;//ลดค่าลง
    changeImg();
    resetInterval();
})

rightBtn.addEventListener('click',()=>{
    idx++;
    changeImg();
    resetInterval();
})

function resetInterval(){ //ลบช่วงเวลาเดิมออกไปก่อน แล้วนับเวลาใหม่
    clearInterval(interval) //ลบ
    interval=setInterval(slide,2000); //นับใหม่
}