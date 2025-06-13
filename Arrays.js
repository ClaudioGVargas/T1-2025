// let fruitList = Array()
// let nameList = ['Claudio']

// fruitList [0] = 'Maça'
// fruitList [1] = 'Banana'
// fruitList ['Vermelhas'] = 'Morango'

// console.table(fruitList)
// console.table(nameList)

// for(let i = 0; i <nameList.length; i++){
//     console.log(nameList[i])
// }

// fruitList.push('Morango')
// fruitList.unshift('Pera')
// fruitList.pop()
// fruitList.shift()

// console.log(fruitList[1])

// let resultado = fruitList.indexOf('Maça')

// console.log(resultado)
// console.table(fruitList)

// Crie um aray chamado 'numeros' contendo 10 valores numericos a sua escolha

// Use metodos de array para calcular:

// A soma de todos os elementos.
// A media dos elementos.
// 
// Gere um novo array chamado pares que contenha apenas os numeros pares de numeros.
// 
// Imprima no console:
// 
// O array original 'Numeros
// A soma
// A media
// O array pares

// let numeros = Array(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
// let pares = Array()

// let soma = 0
// let media = 0

// for(let i = 0; i < numeros.length; i++){
//     soma += numeros[i]
//     //for(let j = 0; j < numeros[i].length; j++)
//     if (numeros[i] %2 == 0) {
//         pares.push(numeros[i])
//     }
// }

// media = soma / numeros.length

// console.table(numeros)
// console.table(soma)
// console.table(media)
// console.table(pares)

// const numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// const soma = numeros.reduce((acumulador, valor) =>   acumulador + valor, 0)
// const media = soma/numeros.length

// const pares = numeros.filter(num => num %2 === 0)

// console.table(numeros)
// console.log(soma)
// console.log(media)
// console.table(pares)

// Ordene um array numeros em ordem crescente antes de calcular a soma e a media

// let numeros = [3, 2, 7, 19, 6, 4, 2, 10]
// let n = numeros.length
 
// for(let i = 0; i < n-1; i++){
//     for(let j = 0; j < n - 1 - i; j++){
//         if(numeros[j] > numeros[j + 1]){
//             const temp = numeros[j]
//             numeros[j] = numeros[j + 1]
//             numeros[j + 1] = temp
//         }
//     }
// }

// console.table(numeros)

// console.table(numeros)

// console.table(numeros.sort((a, b) => a-b))

// Arrays multidimensionais

// let matriz = []

// for(let i = 0; i < 10; i++){
//     matriz[i] = []

//     for(let j = 0; j < 10; j++){
//         matriz[i] [j] = 0
//     }
// }

// console.table(matriz)

// Calcule a diagonal de uma matriz

// let comercio = [['celulares'], ['eletrodomesticos']]
// comercio['celulares'] ['eletrodomestios']
//         ['xiaomi']    ['microondas']
//         ['samsung']   ['airfryer']