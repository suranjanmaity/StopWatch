let hr = 0;
let min = 0;
let sec = 0;
let mils= 0;
let time = document.querySelector(".time");
let timeCount;
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let resume = document.querySelector("#resume");
let lap = document.querySelector("#lap");
let reset = document.querySelector("#reset");
pause.style.display = "none";
resume.style.display = "none";
start.addEventListener("click",()=>{
    start.style.display="none";
    pause.style.display="block";
    timeCount = setInterval(() => {
        if(mils==100){
            sec++;
            mils=0;
        }
        if(sec==60){
            min++;
            sec = 0;
        }
        if(min==60){
            hr++;
            min = 0;
        }
        time.innerHTML=`
        <h2> 
        ${hr}:${min}:${sec}:${mils++}
        </h2>
        `;
    },10);
});
pause.addEventListener("click",()=>{
    pause.style.display="none";
    resume.style.display="block";
    clearInterval(timeCount);
    
});
resume.addEventListener("click",()=>{
    resume.style.display="none";
    pause.style.display="block";
    timeCount = setInterval(() => {
        if(mils==100){
            sec++;
            mils=0;
        }
        if(sec==60){
            min++;
            sec = 0;
        }
        if(min==60){
            hr++;
            min = 0;
        }
        time.innerHTML=`
        <h2> 
        ${hr}:${min}:${sec}:${mils++}
        </h2>
        `;
    },10);
});
reset.addEventListener("click",()=>{
    start.style.display="block";
    pause.style.display="none";
    resume.style.display="none";
    hr=0;
    min=0;
    sec=0;
    mils=0;
    clearInterval(timeCount);
    time.innerHTML=`
    <h2>
    ${hr}:${min}:${sec}:${mils++}
    </h2>
    `;

});