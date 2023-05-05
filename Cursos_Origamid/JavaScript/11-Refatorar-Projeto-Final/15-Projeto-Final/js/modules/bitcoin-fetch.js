export default function initiBiticoinFetch() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(".btc-preco");
      const calculo = (1000 / bitcoin.BRL.sell).toFixed(4);
      btcPreco.innerText = calculo;
    })
    .catch((erro) => console.log(Error(erro)));
}
