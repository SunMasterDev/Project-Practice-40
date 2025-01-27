const currency_one=document.getElementById("currency-one")
const currency_two=document.getElementById("currency-two")

const amount_one=document.getElementById("amount-one")
const amount_two=document.getElementById("amount-two")

const rateText=document.getElementById("rate")
const swap=document.getElementById("btn")

currency_one.addEventListener('change',calculateMoney)
currency_two.addEventListener('change',calculateMoney)
amount_one.addEventListener("input",calculateMoney)
amount_two.addEventListener("input",calculateMoney)

function calculateMoney() {
    const one = currency_one.value
    const two = currency_two.value
    let url = `https://api.exchangerate-api.com/v4/latest/${one}`
    fetch(url).then(res=>res.json()).then(data=>{ //.then() ก็คือ callback function นั่นแหละ(promise)
        const rate=data.rates[two]//rates มีตัว s
        rateText.innerText=`1 ${one} =${rate} ${two}` 
        amount_two.value=(amount_one.value*rate)
    }) //fetch() เป็น method ที่ให้เราสามารถ รับ-ส่ง ข้อมูล (HTTP Request) ระหว่างเว็บได้จากเว็บบราวเซอร์ //Fetch API จะ return ค่า Promise กลับมา 
}
swap.addEventListener('click',()=>{
    //USD => THB || THB => USD
    const temp = currency_one.value //ต้นทาง //ต้องสร้างตัวแปร เพื่อกลับตัวต้นทางก่อนสลับ //อย่าลืมใส่ .value
    currency_one.value = currency_two.value
    currency_two.value = temp
    calculateMoney()
})

calculateMoney()
