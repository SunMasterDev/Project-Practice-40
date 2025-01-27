const ratingContainer=document.querySelector('.rating-container')
const ratings=document.querySelectorAll('.rating') //หลายตัวใช้ all
const panel=document.getElementById('panel')
const sendBtn=document.getElementById('send') //send ไปพิม sent

let selected; //ตัวที่เลือก

ratingContainer.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating')){ //.contains จับคู่ element ต่างๆ
        removeActive() //เรียกใช้ก่อน
        e.target.parentNode.classList.add('active') //พลาด ไม่ต้องใส่ . ข้างหน้า
        selected=e.target.nextElementSibling.innerHTML; //nextElementSibling ไปดึงข้อมูลใน element rating ต่อจาก
    }
})

function removeActive(){
    for(let i=0;i<ratings.length;i++){ 
        ratings[i].classList.remove('active');
    }
}

sendBtn.addEventListener('click',()=>{
    panel.innerHTML=`
    <img src="IMG/heart.svg" alt="" class="img-complete">
    <strong>ขอบคุณที่ใช้บริการของเรา</strong>
    <br>
    <strong>ผลการประเมิน : ${selected}</strong>    
    `
})