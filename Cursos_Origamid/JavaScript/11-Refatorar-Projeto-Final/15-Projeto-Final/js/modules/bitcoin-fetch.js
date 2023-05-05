export default function fetchBiticoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      const calculo = (1000 / bitcoin.BRL.sell).toFixed(4);
      btcPreco.innerText = calculo;
    })
    .catch((erro) => console.log(Error(erro)));
}
