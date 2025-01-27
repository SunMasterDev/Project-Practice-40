// const card=document.querySelector('.card')
const showBtn=document.getElementById('show')
const hiddenBtn=document.getElementById('btn-hidden')
const addContainer=document.getElementById('add-container')
const cardContainer=document.getElementById('card-container')
const nextBtn=document.getElementById('next')
const prevBtn=document.getElementById('prev')
const currentEl=document.getElementById('current')
const clearBtn=document.getElementById('clear')
const questionEl=document.getElementById('question') //พลาด question พิมตกตัว e
const answerEl=document.getElementById('answer')

const addCard=document.getElementById('add-card')

let currentActiveCard=0;
let cardsEl=[]; //คำถามทั้งหมด
const cardData=getCardData(); //เอาฟังก์ชั่นมาแทนที่ 
// [
//     {
//         question:'1+1',
//         answer:'2'
//     },
//     {
//         question:'100+100',
//         answer:'200'
//     },
//     {
//         question:'ประเทศไทยมีกี่จังหวัด',
//         answer:'77'
//     },
//     {
//         question:'1+10',
//         answer:'11'
//     }
// ]

function createCard(){
    cardData.forEach((data,index)=>{
        createSingleCard(data,index)
    })
}

function createSingleCard(data,index){
    const card=document.createElement('div')
    card.classList.add('card')

    if(index==0){ //พลาดตรง == ต้องเป็น 2ตัว
        card.classList.add('active')
    }

    card.innerHTML=`
    <div class="inner-card">
                <div class="inner-card-front">
                    <p>${data.question}</p>
                </div>
                <div class="inner-card-back">
                    <p>${data.answer}</p>
                </div>`;
    
   card.addEventListener('click',()=>card.classList.toggle('show-answer'))//toggle click เพื่อสลับสถานะ
   cardsEl.push(card); //เพิ่มไปใน cardEl
   cardContainer.appendChild(card); //ไปเก็บใน cardContainer
   updateCurrentQusestion()
}

function updateCurrentQusestion(){
    currentEl.innerHTML=`${currentActiveCard+1} / ${cardsEl.length}`
}

createCard()

//card.addEventListener('click',()=>card.classList.toggle('show-answer'))//toggle click เพื่อสลับสถานะ
showBtn.addEventListener('click',()=>addContainer.classList.add('show'))
hiddenBtn.addEventListener('click',()=>addContainer.classList.remove('show'))
nextBtn.addEventListener('click',()=>{
    cardsEl[currentActiveCard].className='card left';//เปลี่ยนชื่อคลาสก่อน
    currentActiveCard=currentActiveCard+1
    if(currentActiveCard>cardsEl.length-1){ //-1 ตัวสุดท้าย index ที่ลบออก1 จำนวนสมาชิก 4 0,1,2,3
        currentActiveCard=cardsEl.length-1; //ถ้ามากกว่า 1 ให้เป็น index-1
    }
    cardsEl[currentActiveCard].className='card active'
    updateCurrentQusestion()
})
prevBtn.addEventListener('click',()=>{
    cardsEl[currentActiveCard].className='card right'
    currentActiveCard=currentActiveCard-1
    if(currentActiveCard<0){ //น้อยกว่า Index ที่ 0 จำนวนสมาชิก 4 0,1,2,3 //พลาด ลืมลบ cardEl.length
        currentActiveCard=0;//ถ้าน้อยกว่า 0 ให้เป็น 0
    }
    cardsEl[currentActiveCard].className='card active'
    updateCurrentQusestion()
})

addCard.addEventListener('click',()=>{
    const question=questionEl.value; //รับค่าคำถาม
    const answer=answerEl.value;//รับคำตอบ

    if(question.trim() && answer.trim()){ //ตัดช่องว่างหรืออักขระอื่น ๆ จากทางด้านซ้ายและด้านขวา 
        const newCard={question,answer}
        createSingleCard(newCard);//เอาคำถาม คำตอบไปเก็บในฟังก์ชั่น 
        questionEl.value='';//ทำให้เป็นค่าว่าง
        answerEl.value='';
        addContainer.classList.remove('show')
        cardData.push(newCard); //เอาไปเก็บใน array 
        setCardData(cardData);//เอาไปเก็บในฟังก์ชั่น
    }
})

function setCardData(cards){//cards ก็คือ cardData
    localStorage.setItem('cards',JSON.stringify(cards)) //object json to string
    window.location.reload(); //รีโหลดหน้า
}

function getCardData(){
    const cards=JSON.parse(localStorage.getItem('cards')) //JSON.parse () วิธีการใช้ในการแปลงวัตถุสตริง JSON เพื่อนำไปใช้งาน
    return cards === null ?[] : cards; //เป็นค่าว่างไหม ถ้าเป็นจริงให้เป็นค่าว่าง แต่ถ้าไม่เป็น cards
}

clearBtn.addEventListener('click',()=>{ //ปุ่ม ลบคำถาม
    localStorage.clear();
    cardContainer.innerHTML='';
    window.location.reload()// รีเฟรช (Refresh) หน้าเว็บไซต์ด้วย JavaScript
})