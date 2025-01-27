const drag_item=document.querySelectorAll('.drag-item');
const drag_list=document.querySelectorAll('.drag-item-list');
//รายการ
let selectItem;

drag_item.forEach((item)=>{
    item.addEventListener('dragstart',onDragStart);
})
//หมวดหมู่
drag_list.forEach((list)=>{ //พลาด parameter ไม่ได้ใส่ ()
    list.addEventListener('dragover',onDragOver); //พลาด drag ไม่ใช่ drop
    list.addEventListener('dragenter',onDragEnter);
    list.addEventListener('drop',onDrop);
})
function onDrop(){
    this.append(selectItem)
    selectItem=null;//เป็นค่าว่าง
}
function onDragStart(){
    selectItem=this; //this รายการที่เราเลือก //เก็บitemในการลาก
    console.log(selectItem);
}
function onDragEnter(e){
    e.preventDefault();
}
function onDragOver(e){
    e.preventDefault();
}