const rating=document.querySelectorAll('i') //all
const result=document.getElementById('result')

rating.forEach((star,selectIndex)=>{
    star.addEventListener('click',()=>{
        rating.forEach((star,Choices)=>{
            if(selectIndex>=Choices){
                //เติมสี
                star.classList.add('active')
            }else{
                //ลบสี
                star.classList.remove('active')
            }
        })
        result.innerText="ผลการประเมิน "+(selectIndex+1)+"/5" //+1 เพิ่มค่าเลข index 
    })
})