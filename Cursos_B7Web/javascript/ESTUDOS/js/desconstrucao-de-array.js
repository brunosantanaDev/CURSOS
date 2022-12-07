

let info = ["Bruno", "Santana", 29, "Rio de Janeiro", "@brunosantanamds",
  function nomeCompleto() {
    console.log(this)
    return `${this['nome']} ${this['sobrenome']}`;
  }
];

const dados = [nome, sobrenome, idade, estado, instagram, nomeCompleto] = info;

console.log(nomeCompleto());



function criar() {
  teste = [1, 2, 3];
  return teste;
}

let [a, b, c] = criar();
console.log(a);
