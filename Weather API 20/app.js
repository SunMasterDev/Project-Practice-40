let city="Tokyo";
const apiKey="af368f694925c7b3231c815fb81bcf8d";

const form=document.getElementById('form')
const search=document.getElementById('search')


function setData(){
    showWeather();
}

async function showWeather(){
    try { /*ดักขอผิดพลาด*/ 
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        const response=await fetch(url);
        const data= await response.json(); //แปลงให้เป็น json เพราะมันเป็น promise ใส่ await ด้วย 
        showDataToUi(data) //ลืมเรียกใช้
    } catch (error) {
        console.log(error);
    }
}

function showDataToUi(data){
    const city=document.getElementById('city')
    const state=document.getElementById('state')
    const weather=document.getElementById('weather')
    const status=document.getElementById('status')
    const humidity=document.getElementById('humidity')
    const wind=document.getElementById('wind')

    city.innerText=data.name;
    state.innerText=data.sys.country; //parseInt คือ คำสั่งสำหรับการแปลงชนิดของข้อมูลให้อยู่ในรูปของตัวเลขจำนวนเต็ม (Interger) 
    weather.children[0].innerHTML=calculate(parseInt(data.main.temp))+" c&deg;"; //.main ไม่ได้ .name //เข้าถึงตัวลูก children 
    weather.children[1].innerHTML="min :"+calculate(parseInt(data.main.temp_min))+" c&deg;"+"max :"+calculate(parseInt(data.main.temp_max))+" c&deg;" //temp_max min 
    //เปลี่ยนเป็น innerHTML เพื่อใช้ c&deg;
    
    status.innerText=data.weather[0].main;
    humidity.innerText="Humidity"+data.main.humidity;
    wind.innerText="Wind"+data.wind.speed;
}   

function calculate(k){
    return k-273;
}

function callDataAPI(e){
    e.preventDefault() //ไม่ให้หน้าจอ รีเฟช
    city=search.value;
    showWeather();
}

form.addEventListener('submit',callDataAPI)

setData(); //เรียกใช้ฟังก์ชั่น

