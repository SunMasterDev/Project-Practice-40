const form=document.getElementById('form')
const userName=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const rePassword=document.getElementById('re-password')

form.addEventListener("submit",function(e){
    e.preventDefault() //ไม่ให้กระพริบหน้าจอ ไม่ให้รีข้อมูลใหม่
    checkInput([userName,email,password,rePassword]); //inputArray พลาด ต้องใส่ [] ข้างในด้วย
    
    // if(userName.value===''){ //ปิดเพราะ สร้าง function ขึ้นมาแล้ว
    //     showError(userName,'กรุณาป้อนชื่อผู้ใช้งาน');
    // }else{
    //     showSuccess(userName);
    // }
    // if(email.value===''){ //เปลี่ยนแค่ email ตรง userName ทั้งหมด
    //     showError(email,'กรุณาป้อนอีเมลของคุณ');

    if(!validateEmail(email.value.trim())){ //else if ใส่ ! ข้างหน้า ถ้าเงื่อนไขไม่ตรง //trim() คือลบช่องว่างซ้ายขวา
        showError(email,'อีเมลไม่ถูกต้อง');
    }else{
        showSuccess(email);
    }
    checkPassword(password,rePassword) //เรียกใช้ฟังก์ชั่น confirm password
    checkInputLength(userName,5,10);
    checkInputLength(password,5,10);
})

function showError(input,message){ //ฟังก์ชันสามารถมี parameters กี่ตัวก็ได้
    const formControl=input.parentElement;//เข้าถึงตัวแม่
    formControl.className='form-control error';//เพิ่มคลาส
    const small=formControl.querySelector('small');//เข้าถึงตัวลูก //พลาด querySelector พิมตกตัว c
    small.innerText=message;

}

function showSuccess(input){
    const formControl=input.parentElement;//เข้าถึงตัวแม่
    formControl.className='form-control success';//เพิ่มคลาส //เปลี่ยนแค่ class เป็น success
}

// function validateEmail(email){ 
//     const re = /^(([^<>()[]\\.,;:\s@\"]+(\.[^<>()[]\\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\‌​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
//     return re.test(String(email).toLowerCase());  //ได้แล้ว แค่พิม .toLowerCase() ผิด
// }

const validateEmail = (email) => { //ใช้อันนี้อีเมล
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const re = //อีเมล
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function checkInput(inputArray){ //สร้างเมื่อคำสั่งซ้ำๆ if else
    inputArray.forEach(function(input){
        if(input.value.trim()===''){ //พลาด ไม่ได้ใส่ ===''
            showError(input,`กรุณาป้อน ${getInputCase(input)}`) //{input.id} ให้ไปดึงไอดีมา //getInputCase(input) เรียกใช้ให้idตัวแรกเป็นตัวพิมใหญ่
        }else{
            showSuccess(input);
        }
    }); //ผิดพลาดวงเล็บ
}

function getInputCase(input){ //ฟังก์ชั่น idตัวแรกพิมใหญ่
    return input.id.charAt(0).toUpperCase()+input.id.slice(1); //charAt(0) ดึงทีละตัว 0 คือก็ตัวแรก //slice(1) ตัวทีเหลือตัวเหลือทั้งหมด การสมาชิกมาใช้ return array ใหม่ ที่ค่าภายในคือส่วนที่หั่นออกจาก array เดิม
} //charAt Java คือ คำสั่ง หรือฟังก์ชันสำหรับดึงตัวอักษรจากตำแหน่งที่ต้องกาง โดยคำสั่ง charAt จะคืนค่าเป็นชนิดตัวอักษร หรือ char โดยรับค่า argument 1 ค่า คือลำดับของตัวอักษรที่จะดึง

function checkPassword(password1,password2){ //confirm Password รหัสตรงกันไหม 
    if(password1.value !== password2.value){ //!== ไม่เท่ากับ
        showError(password2,'รหัสไม่ตรงกัน')
    }
}

function checkInputLength(input,min,max){ //เช็คความยาวของข้อมูล
    if(input.value.length<=min){
        showError(input,`${getInputCase(input)} ต้องมากกว่า ${min} ตัวอักษร`)
    }else if(input.value.length<=max){
        showError(input,`${getInputCase(input)} ต้องไม่เกิน ${max} ตัวอักษร`)
    }else{
        showSuccess(input);
    }
}