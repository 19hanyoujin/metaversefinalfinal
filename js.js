


const content = "우리는 진짜 현실을 보는 것이 아니라 \n 그저 우리 눈 앞에 보여지는 세상만을 \n 진짜 현실로 착각할 뿐이다. \n\n - 영화 <트루먼 쇼> -";
const text = document.querySelector(".text");
let i = 0;

let tyInt = setInterval(typing, 130);

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i >= content.length) {
        //text.textContent = "";
        //i = 0;
        clearInterval(tyInt);
    }
}





/*
if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
    }
*/