const container=document.querySelector('.container')
const seats=document.querySelectorAll('.row .seat:not(.occupied)') //ต้องเว้นวรรค

const count=document.getElementById('count')
const total=document.getElementById('total')

const movieSelect=document.getElementById('movie')

let price = +movieSelect.value; //+ คือ convert to integer เป็นจำนวนเต็ม

container.addEventListener('click',e=>{ 
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){ //พลาด contains ไม่ใช่ container
        e.target.classList.toggle('selected'); //toggle สลับไปใช้คลาส selected เมื่อคลิก
        updateSelected()
    }
})

movieSelect.addEventListener('change',e=>{
    price = +e.target.value; //+ คือ convert to integer เป็นจำนวนเต็ม
    setMovieData(e.target.selectedIndex,e.target.value) //เก็บข้อมูลชื่อและราคาของหนัง //พลาด selectIndex ไม่ใช่ seatIndex
    updateSelected()
})

function updateSelected(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected')
    const countSeats=selectedSeats.length;// จำนวนเลือกที่นั้ง

    const seatIndex=[...selectedSeats].map(seat=>[...seats].indexOf(seat)) // Spread & Rest Operators //พลาดตรง seat parameter

    localStorage.setItem('selectedSeats',JSON.stringify(seatIndex))//localStorage.setItem(key,value) คือคำสั่งเพื่อบันทึกค่าลงใน Storage โดยเราจะระบุค่าคีย์พร้อมกับค่าที่จะเก็บ
    
    count.innerText=countSeats; //ไปเก็บในตัวแปร count
    total.innerText=countSeats*price;//ราคาตามจำนวนที่นั่ง
}

function setMovieData(movieName,moviePrice){ //เก็บของหนัง
    localStorage.setItem('movieName',movieName) //ตั้งเป็น movieName ไม่ใช่ movieIndex พลาด
    localStorage.setItem('moviePrice',moviePrice)
}

function showDataToUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) //JSON parser สำหรับแปลง JSON object เป็น javascript object 
    const selectedMovieIndex=localStorage.getItem('movieName') //ตำแหน่งหนังที่เรากดจองเอาไว้

    seats.forEach((seat,index)=>{
        if(selectedSeats.indexOf(index)>-1){ //index parameter คนสอนทำผิด
            seat.classList.add('selected')
        }
    })//พลาด ใส่ในวงเล็บ().forEach
        if(selectedMovieIndex!=null){ //.selectedIndex การเลือก index
            movieSelect.selectedIndex=selectedMovieIndex;
        }
}

showDataToUI(); //เรียกใช้ตรงนี้ คือเรียกใช้ก่อนเพื่อน
updateSelected(); //เรียกใช้หลัง showDataToUI คนสอนผิด


//innerHTML เป็นคำสั่งที่ใช้แทรก HTML Tag ลงในตำแหน่งที่ต้องการ
//innerText เป็นคำสั่งที่ใช้แทรก ข้อความ ลงในตำแหน่งที่ต้องการ
//JSON.stringify()เป็นการแปลงข้อมมูลจาก JavaScript Object ให้อยู่ในรูปของ JSON String