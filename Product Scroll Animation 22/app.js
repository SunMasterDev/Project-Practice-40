const categories=document.querySelectorAll('.category')

window.addEventListener('scroll',showCategory);

function showCategory(){
    const calculateHeight=window.innerHeight-20; //ความสูงลบ 100

    categories.forEach(category=>{ //ดึงมาคำนวณความสูง
        const topPosition=category.getBoundingClientRect().top; // method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
        if(topPosition<calculateHeight){
            category.classList.add('active');
        }else{
            category.classList.remove('active');
        }
    });
}