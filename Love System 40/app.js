const icon=document.querySelector('i')
const image=document.querySelector('.container')

image.addEventListener('dblclick',()=>{
    icon.style.opacity=1;
    icon.classList.add('fa-beat-fade') //ไม่ใส่ '' ทำให้ไม่ทำงาน
    setTimeout(()=>{
        icon.style.opacity=0;
        icon.classList.remove('fa-beat-fade') // ไม่ใส่ '' ทำให้ไม่ทำงาน
    },2000)
})