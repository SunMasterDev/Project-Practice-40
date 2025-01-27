const switchToggle = document.querySelector('input[type="checkbox"]') //'input[type="checkbox"]' อ้างอิงไปที่ attribute แล้วก็ไปที่ type checkbox
const toggleIcon =document.getElementById('toggle-icon')
const nav =document.getElementById('nav')
const image1=document.getElementById('1')
const image2=document.getElementById('2')
const image3=document.getElementById('3')

function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark') //วัตถุที่ส่งคืนคือองค์ประกอบ<html> =document.documentElement
        darkmode()
        imageSwitchMode('dark')
    }else{
        document.documentElement.setAttribute('data-theme','light')//.setAttribute วิธีการเพิ่มแอตทริบิวต์ที่ระบุให้กับองค์ประกอบและให้ค่าที่ระบุ.
        lightmode()
        imageSwitchMode('light')
    }
}

function darkmode(){
    toggleIcon.children[0].textContent="โหมดกลางคืน" //textContent การเพิ่มเนื้อหา //children เข้าถึงตัวลูก
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon')//replace แทนที่ fa-sun ด้วย fa-moon
    nav.style.backgroundColor="rgb(0 0 0 /50%)" //style เข้าถึง property 
    toggleIcon.children[1].style.color="#d3cd27"
}
function lightmode(){
    toggleIcon.children[0].textContent="โหมดกลางวัน"
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun')
    nav.style.backgroundColor="rgb(255 255 255 /50%)"
    toggleIcon.children[1].style.color="#dd9c40"
}

function imageSwitchMode(mode){
    image1.src=`img/undraw_experience_design_re_${mode}.svg` //.src เข้าถึงที่อยู่รูปภาพ
    image2.src=`img/undraw_bitcoin_re_${mode}.svg`
    image3.src=`img/undraw_learning_sketching_${mode}.svg`
}

switchToggle.addEventListener('change',switchMode) //'event ที่เกิดขึ้น' , ตามด้วยฟังก์ฟั่น