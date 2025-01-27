const questionData = [ //object
	{
	  question:"1.ข้อใดไม่ใช่ระบบปฏิบัติการ",
      a:"ระบบปฏิบัติการดอส",
      b:"ไมโครซอฟท์เวิร์ด",
      c:"ไมโครซอฟต์วินโดวส์",
      d:"ระบบปฏิบัติการแอนดรอยด์",
      correct:"b"
	},
    {
        question:"2.ข้อใดคือโปรแกรม Web Browser",
        a:"Google Chrome",
        b:"Keyboard",
        c:"Mouse",
        d:"Monitor",
        correct:"a"
    },
    {
        question:"3.ข้อใดคือฮา์ดแวร์",
        a:"Keyboard",
        b:"Mouse",
        c:"Monitor",
        d:"ถูกทุกข้อ",
        correct:"d"
    }
]

const questionEl=document.querySelector('.question') //อ้างอิงคำถาม
const answerEls=document.querySelectorAll('.answer')
const container=document.querySelector('.queston-container') //ทำให้ไม่มีตัวเลือกติดมาด้วย
const choiceA=document.getElementById('a-text')
const choiceB=document.getElementById('b-text')
const choiceC=document.getElementById('c-text')
const choiceD=document.getElementById('d-text')

const submitBtn=document.getElementById('submit')

let currentQuestion=0; //ตัวแปรสำหรับเก็บคำถาม
let score=0;
loadQuestion()

function loadQuestion(){
    checkChoice()//ปิดการเลือกอัตโนมัติ
    const currentQuizData = questionData[currentQuestion] //ดึง arry ไปเก็บในตัวแปร
    questionEl.innerHTML=currentQuizData.question//เอาข้อมูลคำถามไปแสดงผลในอ้างอิง innerHTML ทั้ง element html คำสั่งแสดงข้อมูลออกสู่หน้าจอ
    choiceA.innerText=currentQuizData.a
    choiceB.innerText=currentQuizData.b
    choiceC.innerText=currentQuizData.c
    choiceD.innerText=currentQuizData.d
}

function checkChoice(){
    answerEls.forEach(answerEls=>answerEls.checked=false); //ปิดการเลือกอัตโนมัติ
}

submitBtn.addEventListener('click',()=>{
    //ตรวจสอบคำตอบ
    let answer = getChoiceAnswer();
    if(answer){
        if(answer === questionData[currentQuestion].correct){
            score++; //เพิ่มคะแนน
        }
        currentQuestion++; //ไปข้อถัดไป
        if(currentQuestion<questionData.length){ //ถึงข้อสุดท้าย .length
            loadQuestion();
        }else{
            container.innerHTML=`<h2>คุณได้คะแนนเท่าไร ${score}/${questionData.length}</h2>`
        }
    }
})

function getChoiceAnswer(){
    let answer;
    answerEls.forEach(answerEls=>{
        if(answerEls.checked){
            answer=answerEls.id;
        }
    })
    return answer;
}