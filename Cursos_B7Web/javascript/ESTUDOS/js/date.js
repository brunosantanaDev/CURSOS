
// d.getDate(); // Data do dia
// d.getDay(); // Dia da semana (0 ao 6)
// d.getMonth(); // Mês (0 ao 11)
// d.getFullYear(); // Ano

// d.getHours(); // Hora
// d.getMinutes(); // Minutos
// d.getSeconds(); // segundos
// d.getMilliseconds(); // Milisegundos


// # # # # # # # # # Manipular a Data # # # # # # # # #
// var.setDate() -> modifica data do dia
// var.setDay() -> modifica dia da semana comeca do 0 ao 6
// var.setMonth() -> modifica o mes do (0 ao 11)
// var.setFullYear() -> modifica o ano;

function showTime() {
    let d = new Date();
    let hora = d.getHours();
    let minuto = d.getMinutes();
    let segundo = d.getSeconds();
    let total = `${hora}:${minuto}:${segundo}`;
    document.querySelector(".display").innerHTML = total;
}

let time;

document.querySelector(".comecar").addEventListener("click", () => {
    time = setInterval(showTime, 1000);
});

document.querySelector(".parar").addEventListener("click", function () {
    clearInterval(time);
});




document.querySelector(".botao").style.display = "none";
document.querySelector(".botao").style.opacity = "0";

function aparecerBotao() {
    document.querySelector(".botao").style.display = "block";
    setTimeout(function () {
        document.querySelector(".botao").style.transition = "all 2s ease-in";
        document.querySelector(".botao").style.opacity = "1";
    }, 500);

}

setTimeout(aparecerBotao, 5000);




