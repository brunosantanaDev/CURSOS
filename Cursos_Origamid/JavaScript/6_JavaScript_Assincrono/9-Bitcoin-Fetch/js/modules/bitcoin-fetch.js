export default function initiBiticoinFetch() {
    
    fetch("https://blockchain.info/ticker")
    .then(response => response.json())
    .then(bitcoin => {
        const btcPreco = document.querySelector(".btc-preco")
        btcPreco.innerText = (100 / bitcoin.BRL.buy).toFixed(4)
    })
}





