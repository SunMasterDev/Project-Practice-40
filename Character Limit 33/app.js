const textArea=document.querySelector('textarea')
const amount=document.querySelector('.amount')
const limit=document.querySelector('.limit')

textArea.addEventListener('keyup',()=>{ //keyup การกดคีย์บอด
    let count=textArea.value.length  //จำนวนตัวอักษร
    amount.innerHTML=count
    if(count>20){
        limit.classList.add('active')
    }else{
        limit.classList.remove('active')
    }
})