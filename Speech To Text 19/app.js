const SpeechRecognize=window.SpeechRecognition || window.webkitSpeechRecognition;

const recognize=new SpeechRecognize();
const btn=document.querySelector('.control')

function recordVoice(){//เปลี่ยนคลาสลบคลาส
    const isRecord=btn.classList.contains('record');

    if(isRecord){
        recognize.start()
        btn.classList.remove('record');
        btn.classList.add('pause');
        btn.innerHTML='Pause';
    }else{
        recognize.stop()
        btn.classList.remove('pause');
        btn.classList.add('record');
        btn.innerHTML='Record';
    }
}

function setVoiceToText(){
    let message=document.querySelector('.message')
    message.innerText+=e.results[0][0].transcript; //+ คือให้ข้อความต่อกัน
}
function continueRecord(){
    const isPause=btn.classList.contains('pause') //contains คือ คำสั่งของ jQuery ในหมวดของ Selector ซึ่งมีไว้สำหรับการเข้าถึง และจับคู่ข้อมูลที่อยู่ใน Elements ต่าง ๆ กับการประมวลผล 
    
    if(isPause){//รับเสียงต่อ
        recognize.start();
    }
}

function setUpVoice(){
    recognize.lag="th-TH"; //เพิ่มภาษาไทย
    btn.addEventListener('click',recordVoice);
    recognize.addEventListener('result',setVoiceToText);
    recognize.addEventListener('end',continueRecord);
}
setUpVoice()//อย่าลืมเรียกใช้ฟังก์ชั่น