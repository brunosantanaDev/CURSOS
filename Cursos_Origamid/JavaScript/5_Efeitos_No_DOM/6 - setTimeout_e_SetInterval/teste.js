
// Mude a cor da tela para azul e depois para vermelho a cada 2s.


setInterval(() => {
   // document.body.classList.toggle("ativo");
}, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).


const display = document.querySelector(".display");
const btPlay = document.querySelector(".btPlay");
const btPause = document.querySelector(".btPause");
const display3 = document.querySelectorAll(".display spam");

let horas = 0;
let minutos = 0;
let segundos = 0;

let i = 0;
let time;

function cronometro(){
/*   segundos = i++;
  if(horas.length < 2) 
    horas = "0" + horas;
  if(minutos.legth < 2) 
    minutos = "0" + minutos ;
  if(segundos.legth < 2) 
    segundos = "0" + segundos;

  if(segundos > 59) {
    minutos = minutos++ 
    i=0;
  };

  if(minutos > 59){
    horas = horas++;
    minutos = "00";
  } */


  /* display3[0].innerText = horas;
  display3[1].innerText = minutos;
  display3[2].innerText = segundos; */
}

function play(){
  time = setInterval(cronometro, 1000);
  btPlay.setAttribute("disabled", "");
}

function pause(){
  clearInterval(time);
}

function zerar(){
  i = 0;
  clearInterval(time);
  btPlay.removeAttribute("disabled");  
 /*  display3[0].innerText = "00";
  display3[1].innerText = "00";
  display3[2].innerText = "00"; */
}

btPlay.addEventListener("click", play);
btPause.addEventListener("click", pause);
btPause.addEventListener("dblclick", zerar);

