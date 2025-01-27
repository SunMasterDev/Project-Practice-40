const data=[
    'Python',
    'Java',
    'JavaScript',
    'React',
    'NodeJS',
    'Visual Studio Code',
    'VueJS'
]

const search=document.getElementById('search')
const output=document.getElementById('output')

search.onkeyup=function(){ //onkeyup จะอยู่ในส่วน input event ซึ่งก็คือการรับค่าผ่านการคีย์เข้ามา ทางคีย์บอร์ด
    let word=search.value; //สร้างตัวแปรสำหรับคำค้นหา 
    if(word.length){ //ทำการค้นหา
        result = data.filter((value)=>{ //กรองข้อมูลใน data
            return value.toLowerCase().includes(word.toLowerCase())//ทำให้เป็นตัวพิมเล็กทั้งหมด ก่อนค้นหา
        })
    }
    if(result.length>0){ //ที่ค้นหามากกว่า 0 จาก Length
        const content = result.map((value)=>{
            return "<li onclick=selectChoice(this)>"+value+"</li>" //เรียกใช้ฟังก์ชั่นเมื่อคลิก li
        })
        output.innerHTML="<ul>"+content.join("")+"</ul>" //.join() เอาลูกน้ำออก
    }else{
        output.innerHTML=""
    }
}

function selectChoice(word){
    search.value=word.innerHTML
}