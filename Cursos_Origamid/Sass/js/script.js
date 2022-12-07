//https://www.youtube.com/watch?v=37SwqREHRGI&t=1503s
//https://www.youtube.com/watch?v=37SwqREHRGI&t=1503s

const user = {
  nome: "Bruno",
  idade: 31,
  address: {
    street: "Dos Amigos",
    number: 110,
  },
};

const { nome, idade: age, address, nickname = "Santana" } = user;

//document.body.innerText = JSON.stringify({ nome, address, age });

function mostrarIdade({ idade }) {
  return idade;
}

//document.body.innerText = mostrarIdade(user);

//document.body.innerText = JSON.stringify(user["name"]);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtro = array.filter((item) => {
  return item % 2 != 0;
});

//document.body.innerText = JSON.stringify(filtro);
