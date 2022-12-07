/*
unshift("valor")
push(valor)
shift()
pop()
*/


const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', Violão]

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]



console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6'].copyWithin(2, 0, 3));
// ['Item1', 'Item2', 'Item1', 'Item2']

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']


const fill = ['Item1', 'Item2', 'Item3', 'Item4'].fill("Banana", 1);
console.log(fill);



const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
const maisTransportes = [].concat(transporte1, transporte2, "Van");

console.log(maisTransportes)








const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5





const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const comidaRemovida = comidas.shift();
const comidaRemovida2 = comidas.pop();
comidas.push("Arroz");
comidas.unshift("Peixe", "Batata");
console.log(comidas);
console.log(comidaRemovida, comidaRemovida2);




const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes);
estudantes.sort();
console.log(estudantes);
estudantes.reverse();
console.log(estudantes);
console.log(estudantes.includes("Joana"));
console.log(estudantes.includes("Juliana"));




let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split("section").join("ul");
html = html.split("div").join("li");
console.log(html);





const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const copiaArray = carros.slice();
console.log(copiaArray);
carros.pop();
console.log(carros)
