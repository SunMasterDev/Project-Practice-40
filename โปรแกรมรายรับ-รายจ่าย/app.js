//อ้างอิง element ใน index.html 
const balance = document.getElementById("balance")
const money_plus = document.getElementById("money-plus")
const money_minus = document.getElementById("money-minus")
const list = document.getElementById("list")
const form = document.getElementById("form")
const text = document.getElementById("text")
const amount = document.getElementById("amount")

const dataTransaction=[ //array
    {id:1,text:"ค่าขนม",amount:-500},
    {id:2,text:"ค่าห้อง",amount:-5000},
    {id:3,text:"เงินเดือน",amount:+500000},
    {id:4,text:"ถูกหวย",amount:+1000000},
    {id:5,text:"เงินโบนัส",amount:+300000},
]

let transactions=dataTransaction //let เปลี่ยนแปลง //let transactions=[] กำหนดเป็นค่าว่าง


function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function autoID(){ //สุ่ม ID ใน javasrc
    return Math.floor(Math.random()*1000000)
}

function init(){ //การคัดกรอง forEach
    list.innerHTML = `` //ทำให้เป็นค่าว่าง เพิ่มลบข้อมูล
    transactions.forEach(addDataToList)
    calcuateMoney() //เรียกใช้ฟังก์ชั่น
}
function addDataToList(transactions){
    const symbol = transactions.amount < 0?"-":"+" //if,else แบบย่อ
    const status = transactions.amount < 0?"minus":"plus"
    const item = document.createElement('li')
    result = formatNumber(Math.abs(transactions.amount))
    item.classList.add(status) //สร้างclassใน li //การจัดวางตำแหน่งก่อนหลังให้ถูกต้อง
    // item.innerHTML=`ค่าซ่อมรถ<span>-฿400</span><button class="delete-btn">x</button>`;
    item.innerHTML=`${transactions.text}<span>${symbol}${result}</span><button class="delete-btn" onclick="removeData(${transactions.id})">x</button>` //Math.abs ใช้แก้ปัญหา เลขติดลบซ้อน --
    list.appendChild(item)//ยัดข้อมูลเข้าไปแสดงหน้าเว็บ ในid list
}
function calcuateMoney(){ //amounts มีตัว s
    const amounts = transactions.map(transactions=>transactions.amount)
    //คำนวณยอดคงเหลือ
    const total = amounts.reduce((result,item)=>(result+=item),0).toFixed(2);
    //คำนวณรายรับ
    const income = amounts.filter(item=>item>0).reduce((result,item)=>(result+=item),0).toFixed(2)
    //่คำนวณรายจ่าย
    const expense = (amounts.filter(item=>item<0).reduce((result,item)=>(result+=item),0)*-1).toFixed(2) //(*-1) เอาเครื่องหมายลบออก
    //แสดงผลทางจอภาพ
    balance.innerText = `฿+${formatNumber(total)}`
    money_plus.innerText = `฿${formatNumber(income)}`
    money_minus.innerText = `฿${formatNumber(expense)}`
    
}    //filter ตัวกรองค่า reduce รวมค่าทั้งหมด

function removeData(id){
    transactions = transactions.filter(transactions=>transactions.id !==id)
    init()
}
function addTransaction(e){
    e.preventDefault() //ให้หน้ายังคงเดิม
    if(text.value.trim() === '' || amount.value.trim() === ''){ //trim() ตัดช่องว่างต้นและท้ายสตริง
        alert("โปรดใส่ข้อมูล")
    }else{
        const data={
            id:autoID(),
            text:text.value,
            amount:+amount.value //ใส่เครื่องหมาย + ทำให้ amount กลายเป็น Number จาก string
        }
        transactions.push(data)
        addDataToList(data)
        calcuateMoney()
        text.value=''
        amount.value=''
    }
}

form.addEventListener("submit",addTransaction)

init() //เรียกใช้ฟังก์ชั่น init() ทำให้เอาฟังก์ฟั่น calcuateMoney ใน init()