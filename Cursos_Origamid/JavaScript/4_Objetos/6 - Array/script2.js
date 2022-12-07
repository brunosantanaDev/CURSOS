/*
unshift("valor1", "valor2")
push(valor)
shift()
pop()
*/

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const comidaRemovinda = comidas.shift();
const comidaRemovida2 = comidas.pop();
comidas.push("Arroz", "Azeitona");
comidas.unshift("Peixe", "Batata")
//comidas.splice(4, 1);

console.log(comidaRemovinda);
console.log(comidaRemovida2);
console.log(comidas)




const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort();
estudantes.reverse();
console.log(estudantes.includes("Joana"))
console.log(estudantes.includes("Juliana"))




let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split("section").join("ul");
html = html.split("div").join("li")
console.log(html);





const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const novoCarro = carros.slice();
carros.pop();
console.log(novoCarro)
console.log(carros)
