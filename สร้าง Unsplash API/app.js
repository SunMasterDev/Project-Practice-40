const count=10; //$ //ดึงมา10ภาพ
const apiKey='';//$ //ต้อง Login Unslash //ใส่ลิ้งค์ ? = & =
// const apiUrl=`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`


const imageContainer=document.getElementById('img-container')
let photoArrays=[]; //ใส่เป็นค่าว่าง

async function getPhoto(){ //คำสั่ง try catch นั้นเป็นคำสั่งที่ใช้สำหรับกำหนดบล็อคเพื่อตรวจสอบและจัดการกับข้อผิดพลาดที่อาจจะเกิดขึ้นในโปรแกรม
    try{ // Try to do something that may cause errors
        const response = await fetch(apiUrl)
        photoArrays= await response.json()//ตอบกลับเป็น JSON //ใส่ await ด้วยเพื่อให้ได้ object
        displayImage()
    }catch(err){  // Handing errors
        console.log(err);
    }
}//เพื่อจัดการและเตรียมรับมือกับ exception

function displayImage(){ //สร้างภาพ
    photoArrays.forEach((photo)=>{
        const item=document.createElement('a'); //สร้างแท็ก a
        item.setAttribute('href',photo.links.html); //สร้าง attribute 
        item.setAttribute('target','_blank');//แท็กไปหน้าใหม่ Unslash

        const img=document.createElement('img'); //สร้างtag img
        img.setAttribute('src',photo.urls.regular); //ไปดึงรูปภาพใน object Unslash API
        img.setAttribute('title',photo.alt_description);
        img.setAttribute('alt',photo.alt_description);

        item.appendChild(img); //เอาแท็ก img ไปใส่ในแท็ก a
        imageContainer.appendChild(item);//เอาแท็ก a ไปใส่ใน container
    })
}
getPhoto(); //ลืมเรียกใช้ function

window.addEventListener('scroll',()=>{ //document.body เนื้อหาภายในเว็บ
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){
        //ดึงภาพมาแสดงผล
        getPhoto(); 
    } //เช็คว่าเกินขอบเขตเนื้อหาหรือยัง

}) //เข้าถึงหน้า window

//Exception คือการที่โปรแกรมพยายามจะทำงานบางอย่าง แต่เกิดข้อผิดพลาดขึ้น แล้วโปรแกรมไม่สามารถจัดการข้อผิดพลาดนั้นได้ ซึ่งทำให้เกิด exception ขึ้น และส่งผลทำให้โปรแกรมหยุดทำงาน
// ยกตัวอย่างเช่น โปรแกรมกำลังจะเปิดไฟล์ขึ้นมา แต่ไฟล์ที่ต้องการไม่มีอยู่ เป็นต้น รูปแบบการใช้ exception