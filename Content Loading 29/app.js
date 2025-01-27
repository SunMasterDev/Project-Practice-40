const header=document.getElementById('header')
const title=document.getElementById('title')
const desrciption=document.getElementById('desrciption')
const profile_img=document.getElementById('profile_img')
const seller_name=document.getElementById('name')
const price=document.getElementById('price')

const animated_bg=document.querySelectorAll('.animated_bg')
const animated_text=document.querySelectorAll('.animated_text')

setTimeout(showContent,2000)//รอตามเวลาที่กำหนด ครบ2วิ ให้เรียกใช้ฟังก์ชั่น

function showContent(){
    header.innerHTML=`<img src="https://cdn.pixabay.com/photo/2013/09/26/11/59/leather-sofa-186636_1280.jpg" alt="">`
    title.innerHTML=`โซฟา`
    desrciption.innerHTML=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum neque.`
    profile_img.innerHTML=`<img src="https://randomuser.me/api/portraits/women/72.jpg" alt="">`
    seller_name.innerHTML=`พิมลดา`
    price.innerHTML=`ราคา 20,000 บาท`

    animated_bg.forEach(el=>el.classList.remove('animated_bg'))
    animated_text.forEach(el=>el.classList.remove('animated_text'))
}