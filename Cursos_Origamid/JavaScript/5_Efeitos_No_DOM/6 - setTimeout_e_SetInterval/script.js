

const display = document.querySelector(".display");
const btPlay = document.querySelector(".btPlay");
const btPause = document.querySelector(".btPause");

let i = 0;
let time;
//display.innerText = "00";


const cronometro = () => {
    display.innerText = i++;
}

function play(){
  time = setInterval(cronometro, 1000);
  btPlay.setAttribute("disabled", "");
}

function pause(){
  btPlay.removeAttribute("disabled");
  clearInterval(time);
}

function rezetar(){
  i = 0;
  display.innerText = 0;
  clearInterval(time);
  btPlay.removeAttribute("disabled");  
}

btPlay.addEventListener("click", play);
btPause.addEventListener("click", pause);
btPause.addEventListener("dblclick", rezetar);

