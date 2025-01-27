const contents=document.querySelectorAll('.content') //ใช้สำหรับ class และ tag

document.addEventListener('scroll',showText) //document คือ คือโครงสร้างของไฟล์

function showText(){

    contents.forEach((section)=>{
        const imgEl=section.querySelector('img')
        const textEl=section.querySelector('.text')

        const scrollPos=window.pageYOffset
        //500 + 100/50 //ทำหาร ก่อนบวก
        //502 => แสดงข้องความ
        const textPos=imgEl.offsetTop + imgEl.offsetHeight / 50 ;
        //สูงสุดของภาพ + ความสูงของภาพ /50
        if(scrollPos > textPos){
            //แสดงเนื้อหาออกมา
            textEl.classList.add("show-reveal");
        }else{
            //ปิดการแสดง
            textEl.classList.remove("show-reveal");
        }
    })
}