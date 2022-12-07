

let pessoa = {
    nome: "Bruno",
    sobrenome: "Santana",
    idade: 29,
    social: {
        facebook: "http://www.facebook.com/brunosantanamds",
        instagram: {
            url: "http://www.instagram.com/brunosantanamds",
            seguidores: 10000,
        }
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const dados = { nome, idade, social: { instagram: { url, seguidores } } } = pessoa;




