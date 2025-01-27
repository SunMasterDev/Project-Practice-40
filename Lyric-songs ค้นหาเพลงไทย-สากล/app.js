const form=document.getElementById('form')
const search=document.getElementById('search')
const result=document.getElementById('result') //แสดงผลเนื้อเพลง
const more=document.getElementById('more')

const apiURL = "https://api.lyrics.ovh" //url base  // ovh ไม่มี / เพราะใส่ในตัวแปรแล้ว /suggest

form.addEventListener('submit',e=>{
    e.preventDefault()
    const songTxt = search.value.trim() //ตัดช่องว่าง ซ้ายขวา เวลาค้นหา //พิมaaa
    
    if (!songTxt) {
        alert("ป้อนข้อมูลไม่ถูกต้อง")
    }else{
        searchLyrics(songTxt) //รับ
    }
})

async function searchLyrics(song){ //ส่ง ดึง //ถ้าพิม aaa ก็ส่งมายัง parameter song
    const res = await fetch(`${apiURL}/suggest/${song}`); //callback function
    const allsongs = await res.json();
    showData(allsongs)
}

function showData(songs){
    result.innerHTML=`
    <ul class="songs">
        ${songs.data.map(song=>
            `<li>
            <span>
                <strong>${song.artist.name}</strong> - ${song.title}
            </span>
            <button class="btn"
                data-artist="${song.artist.name}"
                data-song="${song.title}"
            >เนื้อเพลง</button>
            </li>`
            ).join("")}
    </ul>
    `
    if(songs.next || songs.prev){ //&& (และ) กับ || (หรือ) //.prev .next
        more.innerHTML = `
        ${songs.prev ? `<button class="btn" onclick="getMoreSongs('${songs.prev}')">ก่อนหน้า</button>` : ''}
        ${songs.next ? `<button class="btn" onclick="getMoreSongs('${songs.next}')">ถัดไป</button>` : ''}
        `;
    }else{
        more.innerHTML = "";
    }
}

async function getMoreSongs(songsUrl){
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${songsUrl}`); //callback function
    const allsongs = await res.json();
    showData(allsongs)
}

result.addEventListener("click",e=>{
    const clickEl = e.target;

    if(clickEl.tagName=="BUTTON"){
        const artist = clickEl.getAttribute('data-artist'); //ระวังชื่อ .getAttribute
        const songName = clickEl.getAttribute('data-song');
        getLyrics(artist,songName);
    }
});

async function getLyrics(artist,songName){ //urlปิดไปแล้ว แย่มาก เข้าถึงไม่ได้
        const res = await fetch(`${apiURL}/v1/${artist}/${songName}`); //callback function //ชื่อข้างบน clickEl
        const data = await res.json();
        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g,"<br>"); //ทำให้เนื้อเพลงขึ้นบรรทัดใหม่ เมื่อเกิดพื้นที่ว่างเกิดขึ้น //เขียนติดกัน /r
        if(lyrics){
            result.innerHTML = `<h2><span>
            <strong>${artist}</strong> - ${songName}
            </span></h2>
            <span>${lyrics}</span>`;
        }else{
            result.innerHTML = `<h2><span>
            <strong>${artist}</strong> - ${songName}
            </span></h2>
            <span>ไม่มีข้อมูลเนื้อเพลงนี้</span>`;
        }
        more.innerHTML=""; //ทำให้ปุ่ม next หายไป
}

