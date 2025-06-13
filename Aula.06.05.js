// let listaCoisas = Array()

// listaCoisas['hardware'] = Array()
// listaCoisas['hardware'] [0] = 'Placa de video'
// listaCoisas['hardware'] [1] = 'Notebook'

// listaCoisas['Filmes'] = ['Senhor dos Aneis']
// listaCoisas['Filmes'] [1] = 'Harry Potter'

// console.table(listaCoisas)

// function parOuImpar(valor) {
//     let resultado
//     if(valor % 2 === 0) {
//         resultado = 'Par'
//     } else {
//         resultado = 'Impar'
//     }

//     return resultado
// }

// let verificaParOuImpar = parOuImpar(3)

// console.log(verificaParOuImpar)

// function calculateArea(height, width) {
//     let result = height * width
//     console.log(result)
// }

// calculateArea(10, 10)

// function ordenarArray(arr) {
//     return arr.sort((a, b) => a - b)
// }

// let result = ordenarArray([1, 5, 4, 3, 2])

// console.log(result)

// let teste = function() {
//     console.log('Internacional')
// }

// teste()

// let teste1 = (teste) => { console.log(teste) }

// teste1('Galaticos')

// function showFunction(successCallback,
// errorCallback) {
//     if(false) {
//         successCallback('Sucesso na requisição')
//     } else {
//         errorCallback('Erro na requisiçã')
//     }
// }

// let successCallback = (message) => {console.log
// (message)}

// let errorCallback = function(message) {
//     console.log(message)
// }

// showFunction(successCallback, errorCallback)

// Função que retorne a soma dos elementos de um array

// function somaArray(arr) {
//     let soma = 0

//     for(let i = 0; i < arr.length; i++) {
//         soma += arr[i]
//     }

//     return soma
// }

// console.log(somaArray([1, 2, 3, 4, 5]))

//Retorne o maior número do array

// function MaiorNumeroArray(arr) {
//     let maior = 0

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > maior) {
//             maior = arr[i]
//         }
//     }

//     return maior
// }

// console.log(MaiorNumeroArray([1, 2, 3, 4, 10, 8]))

// let ParOuImpar = function(valor) {
//     let resultado
//     if(valor % 2 === 0) {
//         resultado = 'PAR'
//     } else {
//         resultado = 'IMPAR'
//     }
//     return resultado
// }

// function VerificaArrayPares(arr, callback) {
//     let pares = []

//     for(let i = 0; i < arr.length; i++) {
//         let resultado = callback(arr[i])
//         if(resultado == 'PAR'){
//             pares.push(arr[i])
//         }
//     }
//     return pares
// }

// console.log(VerificaArrayPares([1, 2, 3, 4, 8], ParOuImpar))