const items=document.querySelectorAll('.item')

items.forEach((item)=>{
    item.addEventListener('click',()=>{
        removeActive(); //เรียกใช้ฟังก์ชั่น
        item.classList.add('active')
    })
})

function removeActive(){ //ลบคลาส เมื่อคลิกภาพอื่น
    items.forEach((item)=>{
        item.classList.remove('active')
    })
}