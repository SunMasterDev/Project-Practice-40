function displayResult(){
    let codeHTML=document.getElementById('html').value
    let codeCSS=document.getElementById('css').value
    let codeJS=document.getElementById('js').value
    let resultEl=document.getElementById('result')
    resultEl.contentDocument.body.innerHTML=`${codeHTML}<style>${codeCSS}</style>` //.contentDocument คำสั่งแสดงผลพื้นที่ iframe
    resultEl.contentWindow.eval(codeJS) // The eval() function evaluates JavaScript code represented as a string and returns its completion value. 
}
