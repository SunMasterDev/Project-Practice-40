const button=document.querySelector('button')
const result=document.getElementById('result')

button.addEventListener('click',()=>{
    const date1=document.getElementById('date1').value //ลืมใส่ .value ไม่ได้ค่ามาใช้งาน
    const date2=document.getElementById('date2').value

    const startDate=new Date(date1) //แปลงให้เป็น object
    const endDate=new Date(date2) //แปลงให้เป็น object

    //คำนวณหาผลต่างของช่วงวัน //.abs เป็นจำนวนเต็มตลอด
    const times=Math.abs(endDate-startDate) //หน่วยเป็น millisecond //4000000 *60 วิ*60 นาที *24 ชม => date
    //แปลงเวลา เป็น วัน
    const days=Math.round(times/(1000*60*60*24)) //.round ปัดเศษขึ้น ถ้าเกิน0.6 //.floor ตัดเศษออก
    result.innerText=`ห่างกัน ${days} วัน`
})