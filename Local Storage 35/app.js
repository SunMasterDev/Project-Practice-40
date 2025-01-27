const setting=document.getElementById('setting')
const text=document.querySelector('p')
const resetEl=document.getElementById('reset') //ปุ่ม
const body=document.querySelector('body')

//true => กลางคืน
//false => กลางวัน

setting.addEventListener('change',()=>{ // callback ?
    //บันทึกการตั้งค่าลงไป localstorage
    localStorage.setItem('night-mode',setting.checked) //('key',value)
    loadTheme()
})

resetEl.addEventListener('click',()=>{
    localStorage.clear()
    loadTheme()
})

function loadTheme(){
    const status = JSON.parse(localStorage.getItem('night-mode'))//ดึงข้อมูล Json.parse แปลงเป็น object boolean
    setting.checked=status //true and false = status
    if(setting.checked){ //true and false
        text.innerText="โหมดกลางคืน"
        body.style.backgroundColor="black"
        body.style.color="white"
        body.style.transition="1s"
    }else{
        text.innerText="โหมดกลางวัน"
        body.style.backgroundColor="white"
        body.style.color="black"
        body.style.transition="1s"
    }
}
loadTheme()