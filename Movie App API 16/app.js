const apiKey='1564f41e16f4bb80df6d37a2dbfe5b61';
let years="2023";
const url=`
https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&sort_by=popularity.desc&year=${years}`;

const content=document.getElementById('content')
const urlPoster=`https://image.tmdb.org/t/p/w500/`

const dropDown=document.getElementById('years') //พลาด id years มี s

async function displayMovies(url){//ลืมใส่ parameter ใน function
    const response = await fetch(url) //ตัว fetch() เป็น method ที่ให้เราสามารถ รับ-ส่ง ข้อมูล (HTTP Request) ระหว่างเว็บได้จากเว็บบราวเซอร์ ตัว Fetch API จะ return ค่า Promise กลับมา 
    const movies = await response.json()
    
    while(content.firstChild){ //การทำงานของ Loop จะทำการตรวจสอบเงื่อนไขก่อน หากผลการตรวจสอบแล้วเป็นตามที่เงื่อไขระบุ ก็จะทำตามคำสั่ง แต่หากเป็นเท็จก็จะกระโดด ออกจาก Loop
        content.removeChild(content.firstChild);
    }

    movies.results.forEach(data=>{ //array results ไปเก็บใน data
        const movieEl=document.createElement('div')
        movieEl.classList.add('movies') //ลืม .add
        const title=document.createElement('h2')
        const poster=document.createElement('img')

        title.innerHTML=`${data.title.substring(0,24)}` //JavaScript substring คือคำสั่งกำหนดจำนวนการแสดงผลของข้อมูล หรือตัวอักษร
        poster.src=`${urlPoster}${data.poster_path}`

        movieEl.appendChild(title)//เอาชื่อเรื่องไปเก็บใน movieEl
        movieEl.appendChild(poster) 
        content.appendChild(movieEl) //เอา movieEl ไปเก็บใน content
    })
}

dropDown.addEventListener('change',()=>{
    years=dropDown.value;
    const updateURL=`
https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&sort_by=popularity.desc&year=${years}`;
    displayMovies(updateURL);
})

displayMovies(url); //ส่ง url เป็น parameter