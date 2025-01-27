const left =document.querySelector('.left')
const right=document.querySelector('.right')
const container=document.querySelector('.container')

left.addEventListener('mouseenter',()=>{ //.mouseenter() ควบคุมผูกตัวจัดการเหตุการณ์ event ที่ mouseenter เหตุการณ์ JavaScript, หรือทริกเกอร์เหตุการณ์ที่เกี่ยวกับ element 
    container.classList.add('hover-left')
})

right.addEventListener('mouseenter',()=>{ //.mouseenter() ควบคุมผูกตัวจัดการเหตุการณ์ event ที่ mouseenter เหตุการณ์ JavaScript, หรือทริกเกอร์เหตุการณ์ที่เกี่ยวกับ element 
    container.classList.add('hover-right')
})

left.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-left')
})

right.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-right')
})