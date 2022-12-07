
const div = document.querySelector(".animaNumero");

for (let i = 900; i <= 1250; i++) {
  setTimeout(function () {
    div.innerHTML = "";
    div.innerHTML += i;
  }, 5 * (i - 900));
}





