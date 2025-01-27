const sliderContainer=document.querySelector('.slider-container')
const sliderLeft=document.querySelector('.left-content')
const sliderRight=document.querySelector('.right-content')
const upButton=document.querySelector('.up-button')
const downButton=document.querySelector('.down-button')
//จำนวนภาพสไลด์
const sliderLenght=sliderRight.querySelectorAll('div').length; //ลืมใส่ไม่ได้ .length

let activeIndex=0; //เพิ่ม ลด ปุ่ม

upButton.addEventListener('click',()=>changeImg('up'))
downButton.addEventListener('click',()=>changeImg('down'))
//0-3
function changeImg(direction){
    const sliderHeight=sliderContainer.clientHeight;
    if(direction='up'){
        activeIndex++;
        if(activeIndex>sliderLenght-1){
            activeIndex=0;
        }
    }else if(direction='down'){
        activeIndex--;
        if(activeIndex<0){
            activeIndex=sliderLenght-1;  // index ที่ 3
        }
    }
    sliderLeft.style.transform=`translateY(-${activeIndex*sliderHeight}px)`
    sliderRight.style.transform=`translateY(-${activeIndex*sliderHeight}px)`
}