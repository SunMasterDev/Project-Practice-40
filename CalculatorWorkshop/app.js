//operand operator

//operand มาก่อน operator //10 กรอง input เครื่องหมาย

const calculatorDisplay=document.querySelector('h1')
const inputBtn=document.querySelectorAll('button') //array
const clearBtn=document.getElementById('clear-btn')

const calculate={
    "/":(firstNumber,secondNumber)=>secondNumber !=0 ?firstNumber / secondNumber: "error" ,
    "*":(firstNumber,secondNumber)=>firstNumber * secondNumber,
    "+":(firstNumber,secondNumber)=>firstNumber + secondNumber,
    "-":(firstNumber,secondNumber)=>firstNumber - secondNumber,
    "=":(firstNumber,secondNumber)=>secondNumber   
}

let firstValue=0; //ตัวเลขที่1
let operatorValue=''; //ตัวดำเนินการเปลี่ยนตามผู้ใช้ป้อนเข้ามา //เก็บตัวดำเนินการ
let waitForNext=false; //รอ operand กับ operator เพื่อป้อนตัวเลข ตัวที่ 2

function setNumerValue(number){ //ฟังก์ชั่นตัวเลข //ตัวเลขตัวที่2
    if(waitForNext){
        calculatorDisplay.textContent=number;
        waitForNext=false;
    }else{
        const displayValue=calculatorDisplay.textContent; //คุณสมบัติ textContent ตั้งค่าหรือส่งคืนเนื้อหาข้อความของโหนดที่ระบุ และรายการย่อยทั้งหมด
        calculatorDisplay.textContent= displayValue === '0' ? number : displayValue+number;
    }
}

function callOperator(operator){
    const currentValue = Number(calculatorDisplay.textContent); //แปลง string เป็น number 
    if(operatorValue && waitForNext){
        operatorValue=operator;
        return; //จบการทำงานด้านล่าง กระโดดออกจากฟังก์ชั่นนี้
    }
    if(!firstValue){  //ถ้าไม่ใช่ให้ทำงาน
        firstValue=currentValue //ค่าเริ้มต้น
    }else{//ถ้าตรงเงื่อนไขให้หยุดทำงาน
        const result=calculate[operatorValue](firstValue,currentValue); //currentValue คือ secondNumber
        calculatorDisplay.textContent=result; //สับสนชื่อ ระวังให้ดี calculatorDisplay , calculator , operatorValue , operator
        firstValue=result;
        if(firstValue === "error"){
            resetAll()
        }
    }
    operatorValue=operator;
    waitForNext=true;
}

function addDecimal(){  //.includes คือ ค่าที่ return ออกมาเป็น true หรือ false แทนที่จะเป็น เลข index หรือ -1
    if(waitForNext)return;
    if(!calculatorDisplay.textContent.includes(".")){  
        calculatorDisplay.textContent=`${calculatorDisplay.textContent}.`; //อย่าลืมใส่จุด .
    }
}//! ใช่หรือไม่ not //ถ้าไม่มี . ให้ใส่ . แต่มีแล้วไม่ต้อง

inputBtn.forEach((input)=>{
    // ปุ่มตัวเลข 0-9
    if(input.classList.length === 0){ // classlist = 0
        input.addEventListener('click',()=>setNumerValue(input.value)) //ค่าของ input
    }else if(input.classList.contains("operator")){ //เปรียบเทียบผ่านชื่อ class ถ้า class เป็น operator
        input.addEventListener('click',()=>callOperator(input.value))
    }else if (input.classList.contains('decimal')) {
        input.addEventListener('click',()=>addDecimal()) //อะไรที่ใช้ value คือการเรียกค่า
    }
});

function resetAll(){ //ไม่มี let เผลอใส่ let
    firstValue=0 
    operatorValue=''
    waitForNext=false
    calculatorDisplay.textContent=0
}

clearBtn.addEventListener('click',()=>resetAll())