/* const doc = fetch ("./doc.txt");

doc.then(resp => resp.text())
.then(corpo => {
  const conteudo = document.querySelector(".conteudo")
  conteudo.innerText = corpo
  console.log(conteudo)
}) */


/* const cep = fetch("https://viacep.com.br/ws/26086195/json")

cep.then(resolucao => resolucao.json())
.then(dados => {
    const conteudo = document.querySelector(".conteudo")
  let {logradouro, bairro, uf, ddd} = dados
    conteudo.innerText = logradouro
}) */


/* const imagem = fetch("./doutor.jpg")

imagem.then(url => url.blob())
.then(imagem => {
  const imagemUrl = URL.createObjectURL(imagem)
  const imagemDom = document.querySelector("img")
  imagemDom.src = imagemUrl
}) */


const cep2 = fetch("https://viacep.com.br/ws/26086195/json")

cep2.then(r => {
  const r2 = r.clone()
  r.text().then(text => {
    console.log(text)
  })

  r2.json().then(json =>{
    console.log(json)
  })
})




