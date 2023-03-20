
const carro = {
    brand: 'Fiat',
    age: 2020,
    price: 30
}


const {brand: marca, age, price} = carro
console.log(marca, age, price)


const clientes = {
    compras: {
        ebook: ['Marketing Digital 2.0','Segredo das Mentes Milionárias'],
        dvds: ['Aero Smith','Audioslave']
    }
}

const {ebook: livros, dvds} = clientes.compras

console.log(livros, dvds)



const frutas = ['morango','pera','uva', ['laranja','limão']]
const [primeira, segunda, terceira, quarta] = frutas

console.log(quarta)