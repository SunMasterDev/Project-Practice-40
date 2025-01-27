const videoEl=document.getElementById('video');
const btnRequest=document.getElementById('requestbtn');
const btnShare=document.getElementById('sharebtn');

btnRequest.addEventListener('click',()=>{
    selectMediaStream(); //เรียกใช้งาน
})
btnShare.addEventListener('click',async()=>{ //call back function
    btnShare.disbled=true;//ปิดปุ่มเอาไว้
    await videoEl.requestPictureInPicture();
    btnShare.disbled=false;//เปิดปุ่ม
})

//ส่งคำขอเข้าถึงอุปกรณ์
async function selectMediaStream(){
    try{
        const mediaStream=await navigator.mediaDevices.getDisplayMedia(); //navigate ไปยังหน้าต่าง ๆ ภายในแอพ เช่น เมื่อเปิดแอพขึ้นมาแล้วให้แสดงหน้าอะไร
        videoEl.srcObject=mediaStream; //การแสดง Video จาก WebCam ด้วย HTML5
        videoEl.onloadedmetadata=()=>{
            videoEl.play(); //พลาด อย่าใส่ onPlay
        }
    }catch(error){
        console.log(error);//MediaDevices. เป็น Feature สำคัญที่เอาไว้ เปิดกล้อง แล้ว Stream Video ผ่าน HTML Video Element
    }
}