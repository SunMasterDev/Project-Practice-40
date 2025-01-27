const toggle=document.getElementById('toggle');
const open=document.getElementById('open')
const modal=document.getElementById('modal')
const close=document.getElementById('close')

toggle.addEventListener('click',()=>{
    document.body.classList.toggle('show-nav') //สลับสถานะ
})

open.addEventListener('click',()=>{
    modal.classList.add('show-modal')
})
close.addEventListener('click',()=>{
    modal.classList.remove('show-modal')
})

window.addEventListener('click',e=>e.target == modal ? modal.classList.remove('show-modal'): false) //คลิกที่พื้นที่ว่าง ทำการปิด modal //if ใช่ Id modal ไหม 