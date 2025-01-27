const amountEl=document.getElementById('amount')
const outputEl=document.getElementById('output')
const outputEl2=document.getElementById('output2')

amountEl.addEventListener('input',(e)=>{
    const number=e.target.value
    const result=Intl.NumberFormat("th-TH",{ //intl.NumberFormat().format(number) ทำ , คั่นตีวเลข
    style:"currency",
    currency:"THB"
}).format(number) //.NumberFormat() คล้าย con ของ class react
const result2=Intl.NumberFormat("en",{notation:"compact"}).format(number) //ทำเป็นจำนวนตัวย่อ
    outputEl.innerText=result
    outputEl2.innerText=result2
})