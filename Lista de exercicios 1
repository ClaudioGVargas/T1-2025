//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

// const prompt = require ('prompt-sync') ()

// let numero = Number(prompt("Digite um número:"))

// if (numero % 2 === 0) {
//     console.log(numero + " é par.")
// } else {
//     console.log(numero + " é ímpar.")
// }

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido,
// utilizando uma estrutura de controle if-else.

// const prompt = require('prompt-sync')()

// let idade = Number(prompt("Digite a idade: "))

// if (isNaN(idade) || idade < 0) {
//     console.log("A idade é inválida.")
// } else if (idade < 12) {
//     console.log("Você é uma criança.")
// } else if (idade < 18) {
//     console.log("Você é um adolescente.")
// } else if (idade < 60) {
//     console.log("Você é um adulto.")
// } else if (idade > 60) {
//     console.log("Você é um idoso.")
// }

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// const prompt = require('prompt-sync')()

// let nota = parseFloat(prompt("Digite a nota (0 a 10):"))
// classificarNota(nota)

// if (nota >= 7 && nota <= 10) {
//     console.log("Aprovado")
//   } else if (nota >= 5 && nota < 7) {
//     console.log("Recuperação")
//   } else if (nota >= 0 && nota < 5) {
//     console.log("Reprovado")
//   } else {
//     console.log("Nota inválida. Digite um valor entre 0 e 10.")
//   }

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada
// opção selecionada.

// const prompt = require('prompt-sync')()

// console.log("MENU");
// console.log("1 - Opcão 1")
// console.log("2 - Opção 2")
// console.log("3 - Opção 3")

// let opcao = prompt("Escolha uma opção (1, 2 ou 3): ")

// switch (opcao) {
//   case '1'
//     console.log("Opção 1")
//     break
//   case '2'
//     console.log("Opção 2")
//     break
//   case '3'
//     console.log("Opção 3")
//     break
//   default
//     console.log("Opção inválida. Tente novamente.")
// }

// 5. Escreva um programa que calcula o índice de m,assa corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal,
// sobrepeso, obesidade) utilizando if-else.

// const prompt = require('prompt-sync')()

// // Função para calcular o IMC
// function calcularIMC(peso, altura) {
//   const imc = peso / (altura * altura)

//   console.log("Seu IMC é: " + imc.toFixed(2))

//   // Classificação do IMC
//   if (imc < 18.5) {
//     console.log("Classificação: Baixo peso")
//   } else if (imc >= 18.5 && imc < 24.9) {
//     console.log("Classificação: Peso normal")
//   } else if (imc >= 25 && imc < 29.9) {
//     console.log("Classificação: Sobrepeso")
//   } else {
//     console.log("Classificação: Obesidade")
//   }
// }

// // Exemplo de uso
// const peso = 70     // em kg
// const altura = 1.75 // em metros

// calcularIMC(peso, altura)

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve
// ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

// const prompt = require('prompt-sync')()

// function verificarTipoTriangulo() {
//   const ladoAStr = prompt("Digite o valor do lado A: ")
//   const ladoBStr = prompt("Digite o valor do lado B: ")
//   const ladoCStr = prompt("Digite o valor do lado C: ")

//   const a = parseFloat(ladoAStr)
//   const b = parseFloat(ladoBStr)
//   const c = parseFloat(ladoCStr)

//   if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
//     console.log("Por favor, insira valores numéricos positivos para os lados do triângulo.")
//     return
//   }

//   // Verificar se os lados fornecidos formam um triângulo
//   if (a < b + c && b < a + c && c < a + b) {
//     console.log("\nOs lados fornecidos formam um triângulo.")

//     // Verificar o tipo de triângulo
//     if (a === b && b === c) {
//       console.log("Tipo: Triângulo Equilátero");
//     } else if (a === b || a === c || b === c) {
//       console.log("Tipo: Triângulo Isósceles")
//     } else {
//       console.log("Tipo: Triângulo Escaleno")
//     }
//   } else {
//     console.log("\nOs lados fornecidos NÃO formam um triângulo.")
//   }
// }

// verificarTipoTriangulo()

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$0,25 se forem compradas pelo menos doze. Escreva um algoritmo que
// leia o número de maçãs compradas, calcule e escreva o valor total da compra.

// const prompt = require('prompt-sync')()

// function calcularPrecoMacas() {
//   const numeroMacasStr = prompt("Digite o número de maçãs compradas: ")
//   const numeroMacas = parseInt(numeroMacasStr)

//   if (isNaN(numeroMacas) || numeroMacas < 0) {
//     console.log("Por favor, digite um número válido de maçãs (não negativo).")
//     return
//   }

//   let precoTotal;
//   const precoMenosDeDoze = 0.30
//   const precoDozeOuMais = 0.25
//   const umaDuzia = 12

//   if (numeroMacas < umaDuzia) {
//     precoTotal = numeroMacas * precoMenosDeDoze
//   } else {
//     precoTotal = numeroMacas * precoDozeOuMais
//   }

//   console.log(`O valor total da compra é de R$ ${precoTotal.toFixed(2)}.`)
// }

// calcularPrecoMacas()

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

// const prompt = require('prompt-sync')()

// function ordenarDoisValores() {
//   const valor1Str = prompt("Digite o primeiro valor: ")
//   const valor2Str = prompt("Digite o segundo valor (deve ser diferente do primeiro): ")

//   const valor1 = parseFloat(valor1Str)
//   const valor2 = parseFloat(valor2Str)

//   if (isNaN(valor1) || isNaN(valor2)) {
//     console.log("Por favor, digite valores numéricos válidos.")
//     return
//   }

//   if (valor1 === valor2) {
//     console.log("Os valores digitados são iguais. Por favor, insira valores diferentes.")
//     return
//   }

//   if (valor1 < valor2) {
//     console.log(`Em ordem crescente: ${valor1}, ${valor2}`)
//   } else {
//     console.log(`Em ordem crescente: ${valor2}, ${valor1}`)
//   }
// }

// ordenarDoisValores()

//  9. Implemente um programa que exibe uma contagem regressiva de 10 até  1noconsole utilizando um loop for.

// const prompt = require('prompt-sync')()

// function contagemRegressiva() {
//   for (let i = 10; i >= 1; i--) {
//     console.log(i)
//   }
//   console.log("FIM!")
// }

// contagemRegressiva()

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// const prompt = require('prompt-sync')()

// function escreverNumeroDezVezes() {
//   const numeroStr = prompt("Digite um número inteiro: ")
//   const numero = parseInt(numeroStr)

//   if (isNaN(numero) || !Number.isInteger(numero)) {
//     console.log("Por favor, digite um número inteiro válido.")
//     return;
//   }

//   console.log("\nO número digitado é:")
//   for (let i = 0; i < 10; i++) {
//     console.log(numero)
//   }
// }

// escreverNumeroDezVezes()

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

// const prompt = require('prompt-sync')()

// function calcularSomaDeCincoNumeros() {
//   let soma = 0

//   console.log("Por favor, digite 5 números:")

//   for (let i = 1; i <= 5; i++) {
//     const numeroStr = prompt(`Digite o ${i}º número: `)
//     const numero = parseFloat(numeroStr)

//     if (isNaN(numero)) {
//       console.log("Entrada inválida. Por favor, digite um número.")
//       i--; // Decrementa o contador para repetir a entrada do número atual
//       continue; // Volta para o início do loop
//     }

//     soma += numero
//   }

//   console.log(`\nA soma total dos números digitados é: ${soma}`)
// }

// calcularSomaDeCincoNumeros()

// 12. Crie um programa que exibe a tabuada de um número fornecidopelousuário (de 1 a 10) utilizando um loop for.

// const prompt = require('prompt-sync')()

// function exibirTabuada() {
//   const numeroStr = prompt("Digite um número inteiro para ver sua tabuada (de 1 a 10): ")
//   const numero = parseInt(numeroStr)

//   if (isNaN(numero) || !Number.isInteger(numero) || numero < 1 || numero > 10) {
//     console.log("Por favor, digite um número inteiro válido entre 1 e 10.")
//     return
//   }

//   console.log(`\nTabuada do ${numero}:`)
//   for (let i = 1; i <= 10; i++) {
//     const resultado = numero * i
//     console.log(`${numero} x ${i} = ${resultado}`)
//   }
// }

// exibirTabuada()

//  13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// const prompt = require('prompt-sync')()

// function calcularMediaDecimais() {

//   let soma = 0
//   let quantidade = 0
//   let numero

//   console.log("Digite números decimais para calcular a média (digite 0 para parar):")

//   do {
//     const input = prompt("Digite um número: ")
//     numero = parseFloat(input);

//     if (!isNaN(numero)) {
//       if (numero !== 0) {
//         soma += numero
//         quantidade++
//       }
//     } else {
//       console.log("Entrada inválida. Por favor, digite um número decimal ou 0.")
//     }
//   } while (numero !== 0)

//   if (quantidade > 0) {
//     const media = soma / quantidade
//     console.log(`\nA média aritmética dos ${quantidade} números digitados é: ${media.toFixed(2)}`)
//   } else {
//     console.log("\nNenhum número foi digitado além do 0.")
//   }
// }
// calcularMediaDecimais()

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

// function fatorial(n) {
//     if(n === 0){
//         return 1
//     } else {
//         return n * fatorial(n-1)
//     }
// }
// console.log(fatorial(5))

// function soma(n){
//     if(n === 1){
//         return 1
//     } else {
//         return n + soma(n-1)
//     }
// }

// console.log(soma(5))

//  15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

function fibonacci(n) {
    if(n==0){
        return 0
    } else if(n==1){
        return 1
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

console.log(fibonacci(10))