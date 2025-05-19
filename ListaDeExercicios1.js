//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

// Importa o módulo prompt-sync
//const prompt = require ('prompt-sync') ()

// Exibe a mensagem "Digite um número" e espera o usuário digitar um número. A função Number converte o valor digitado para um número
//let numero = Number(prompt("Digite um número:"))

// Verifica se o número é par, calcula se o resto da divisão por 2 é par, caso contrário é impar.
//if (numero % 2 === 0) {
//     console.log(numero + " é par.")
//} else {
//     console.log(numero + " é ímpar.")
//}

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido,
// utilizando uma estrutura de controle if-else.


// Importa o módulo prompt-sync
//const prompt = require('prompt-sync')()

// Exibe a mensagem "Digite a idade" e espera o usuário digitar o número. A função Number converte o valor digitado para um número
//let idade = Number(prompt("Digite a idade: "))

// Verifica se o valor digitado não é um número e se o valor é menor que zero, se qualquer uma dessas condiçoes é verdadeira, imprime "A idade é invalida".
// if (isNaN(idade) || idade < 0) {
//    console.log("A idade é inválida.")

// Se o valor digitado for menor que 12, imprime "Você é uma criança".
//} else if (idade < 12) {
//    console.log("Você é uma criança.")

// Se o valor digitado for menor que 18, imprime "Você é um adolescente".
//} else if (idade < 18) {
//    console.log("Você é um adolescente.")

// Se o valor digitado for menor que 60, imprime "Você é um adulto".
//} else if (idade < 60) {
//    console.log("Você é um adulto.")

// Se o valor digitado for maior que 60, imprime "Você é um idoso".
//} else if (idade > 60) {
//    console.log("Você é um idoso.")
//}

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// Importa o módulo prompt-sync
//const prompt = require('prompt-sync')()

// Exibe a mensagem "Digite uma nota de 0 a 10", e espera o usuário digitar o número, a função parseFloat converte o número digitado em ponto flutuante
//let nota = parseFloat(prompt("Digite a nota  de 0 a 10:"))

// Se o valor digitado for maior ou igual a 7 e menor ou igual a 10, imprime "Aprovado".
// if (nota >= 7 && nota <= 10) {
//    console.log("Aprovado")

// Se o valor digitado for maior ou igual a 5 e menor que 7, imprime "Recuperação".
//} else if (nota >= 5 && nota < 7) {
//    console.log("Recuperação")

// Se o valor digitado for maior ou igual a 0 e menor que 5, imprime "Reprovado".
//} else if (nota >= 0 && nota < 5) {
//    console.log("Reprovado")
//}

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada
// opção selecionada.

// Importa o módulo prompt-sync
// const prompt = require('prompt-sync')()

// // Exibe no terminal um menu com três opções: "Opção 1", "Opção 2" e "Opção 3" 
// console.log("MENU");
// console.log("1 - Opcão 1")
// console.log("2 - Opção 2")
// console.log("3 - Opção 3")

// Exibe a mensagem "Escolha uma opção (1, 2 ou 3):" e espera o usuário digitar a opção 
// let opcao = prompt("Escolha uma opção (1, 2 ou 3): ")

// // O switch compara a variável opção com os três valores dos case: "Opção 1", "Opção 2" e "Opção 3" e se nenhum valor digitado estiver entre as opções, imprime: "Opção inválida. Tente novamente."
// switch (opcao) {
//   case '1':
//     console.log("Opção 1")
//     break
//    case '2':
//     console.log("Opção 2")
//     break
//    case '3':
//     console.log("Opção 3")
//      break
//    default:
//     console.log("Opção inválida. Tente novamente.")
// }

// 5. Escreva um programa que calcula o índice de massa corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal,
// sobrepeso, obesidade) utilizando if-else.

// Importa o módulo prompt-sync
// const prompt = require('prompt-sync')()

// Exibe a mensagem "digite o seu peso:", espera o usuário digitar o valor e converte o valor em ponto flutuante.
// let peso = parseFloat(prompt("Digite o seu peso:"))
// // Exibe a mensagem "digite a sua altura:", espera o usuário digitar o valor e converte o valor em ponto flutuante.
// let altura = parseFloat(prompt("Digite a sua altura:"))

// // Função para calcular o IMC, divide o valor do peso digitado pelo valor digitado da altura vezes a altura
// function calcularIMC(peso, altura) {
//    const imc = peso / (altura * altura)

// Imprime "Seu IMC é: " com duas casas decimais
//    console.log("Seu IMC é: " + imc.toFixed(2))

// Classificação do IMC
// Se o valor calculado for menor a 18,5 imprime "Baixo peso"
//    if (imc < 18.5) {
//      console.log("Classificação: Baixo peso")

// Se o valor calculado for maior ou igual a 18,5 e menor a 24,9, imprime "Peso normal"
//    } else if (imc >= 18.5 && imc < 24.9) {
//      console.log("Classificação: Peso normal")

// Se o valor calculado for maior ou igual a 25 e menor a 29,9, imprime "Sobrepeso", caso contrário imprime "Obesidade"
//    } else if (imc >= 25 && imc < 29.9) {
//      console.log("Classificação: Sobrepeso")
//    } else {
//      console.log("Classificação: Obesidade")
//    }
//  }

//  calcularIMC(peso, altura)

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve
// ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

// Importa o módulo prompt-sync
// const prompt = require('prompt-sync')()

//Função verificarTipoTriangulo, Exibe a mensagem "digite o valor do lado A:", espera o usuário digitar o valor do lado A, exibe a mensagem "digite o valor do lado B:", espera o usuário digitar o valor do lado B e exibe a mensagem "digite o valor do lado C:" e espera o usuário digitar o valor do lado C,
// function verificarTipoTriangulo() {
//    let ladoA = prompt("Digite o valor do lado A: ")
//    let ladoB = prompt("Digite o valor do lado B: ")
//    let ladoC = prompt("Digite o valor do lado C: ")

// Converte os valores dos lados digitados em pontos flutuantes.
//    let a = parseFloat(ladoA)
//    let b = parseFloat(ladoB)
//    let c = parseFloat(ladoC)

// Imprime "Digite valores para os lados do triângulo.", espera o usuário digitar os valores e verifica se os valores são números
// if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
//      console.log("Digite valores para os lados do triângulo.")
//      return
// }

// Verifica se os lados digitados formam um triângulo e imprime "Os lados fornecidos formam um triângulo."
//    if (a < b + c && b < a + c && c < a + b) {
//      console.log("Os lados fornecidos formam um triângulo.")

// Verifica o tipo de triângulo, se os lados A, B e C forem iguais, imprime "Tipo: Triângulo Equilátero", se dois lados forem iguais, imprime "Tipo: Triângulo Isósceles" e se os lados forem diferentes imprine "Tipo: Triângulo Escaleno", caso contrário imprime "Os lados fornecidos NÃO formam um triângulo."
//      if (a === b && b === c) {
//        console.log("Tipo: Triângulo Equilátero");
//      } else if (a === b || a === c || b === c) {
//        console.log("Tipo: Triângulo Isósceles")
//      } else {
//        console.log("Tipo: Triângulo Escaleno")
//      }
//   } else {
//     console.log("Os lados fornecidos NÃO formam um triângulo.")
//  }
// }
// verificarTipoTriangulo()

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$0,25 se forem compradas pelo menos doze. Escreva um algoritmo que
// leia o número de maçãs compradas, calcule e escreva o valor total da compra.

// Importa o módulo prompt-sync
// const prompt = require('prompt-sync')()

//Função calcular o preço das maças
// function calcularPrecoMacas() {

// Imprime "Digite o número de maçãs compradas: ", espera o usuário digitar o valor e converte o valor em número inteiro,
//   let numeroMacas = parseInt(prompt("Digite o número de maçãs compradas: "))
 
// Verifica se o número digitado é um número válido e não negativo, caso contrário imprime: "Por favor, digite um número válido."
//   if (isNaN(numeroMacas) || numeroMacas < 0) {
//     console.log("Por favor, digite um número válido.")
//     return
//   }

// Define o valor das maças conforme a quantidade digitada
//   let precoTotal
//   let precoMenosDeDoze = 0.30
//   let precoDozeOuMais = 0.25
//   let umaDuzia = 12

// Calcula o valor das maças conforme a quantidade digitada
//   if (numeroMacas < umaDuzia) {
//     precoTotal = numeroMacas * precoMenosDeDoze
//   } else {
//     precoTotal = numeroMacas * precoDozeOuMais
//   }

// Imprime o valor da compra com duas casas decimais.
//   console.log(`O valor total da compra é de R$ ${precoTotal.toFixed(2)}.`)
// }
// Função para calcular o preço das maças.
// calcularPrecoMacas()

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

// Importa o módulo prompt-sync
// const prompt = require('prompt-sync')()

// Função para ordenar os dois valores digitados, imprime "Digite o primeiro valor: ", aguarda o usuário digitar o valor e imprime "Digite o segundo valor: " e converte os valores para pontos flutuantes
// function ordenarDoisValores() {
// let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
// let valor2 = parseFloat(prompt("Digite o segundo valor: "))

// Verifica se os valores são números
// if (isNaN(valor1) || isNaN(valor2)) {
// console.log("Por favor, digite valores numéricos válidos.")
//    return
//   }

// Verifica se os valores digitados são iguais e imprime Os valores digitados são iguais. Por favor, insira valores diferentes."
//   if (valor1 === valor2) {
//      console.log("Os valores digitados são iguais. Por favor, insira valores diferentes.")
//      return
//   }

  // Verifica se o primeiro número digitado é maior que o segundo número digitado e ordena os valores em ordem crescente.
//   if (valor1 < valor2) {
//      console.log(`Em ordem crescente: ${valor1}, ${valor2}`)
//    } else {
//      console.log(`Em ordem crescente: ${valor2}, ${valor1}`)
//    }
//  }

//  ordenarDoisValores()

//  9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

// Importa o módulo prompt-sync
// const prompt = require('prompt-sync')()

// Função contagem regressiva, declara a variável i = 10, define a condição de continuação até quando i for igual a 1, decremento de 1 a cada repetição e imprime os valores de i.
// function contagemRegressiva() {
//    for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }
// }

// contagemRegressiva()

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// Importa o módulo prompt-sync
// const prompt = require('prompt-sync')()

// Função escrever o número 10 vezes, imprime "Digite um número inteiro: ", espera o usuário digitar o valor e converte o valor em número inteiro
// function escreverNumeroDezVezes() {
// let numero = parseInt(prompt("Digite um número inteiro: "))

// Verifica se o valor não é um número e garante que o número seja inteiro sem casas decimais, caso contrário imprime "Por favor, digite um número inteiro válido."
//    if (isNaN(numero) || !Number.isInteger(numero)) {
//      console.log("Por favor, digite um número inteiro válido.")
//      return;
// }

// Imprime "O número digitado é:" e imprime o valor digitado 10 vezes. Declara a variável i = 0, define a condição de continuação até quando i for menor 10, incremento de 1 a cada repetição e imprime os valores de i.
//   console.log("O número digitado é:")
//    for (let i = 0; i < 10; i++) {
//      console.log(numero)
//    }
//  }

//  escreverNumeroDezVezes()

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

// Importa o módulo prompt-sync
// const prompt = require('prompt-sync')()

// Função para calcular a soma dos 5 números, inicializa a variável soma e imprime "Digite 5 números:" e espera o usuário digitar os números
// function calcularSomaDeCincoNumeros() {
// let soma = 0

// console.log("Digite 5 números:")

// declara a variável i = 1, define a condição de continuação até quando o valor for menor ou igual a 5, incrementa de 1 a cada repetição e converte os valores para pontos flutuantes.
// for (let i = 1; i <= 5; i++) {
//     let numero = parseFloat(prompt(`Digite o ${i}º número: `))

// Verifica se o valr não é um número e imprime "Entrada inválida. Por favor, digite um número.", decrementa em 1 a cada repetição e volta para o início do loop,
//     if (isNaN(numero)) {
//     console.log("Entrada inválida. Por favor, digite um número.")
//     i--
//     continue;
// }

//     soma += numero
// }
// Imprime a soma total dos números digitados
// console.log(`A soma total dos números digitados é: ${soma}`)
// }

// calcularSomaDeCincoNumeros()

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

// Importa o módulo prompt-sync
// const prompt = require('prompt-sync')()

// Função Tabuada, imprime "Digite um número de 1 a 10 para sua tabuada: " e converte para número inteiro
// function Tabuada() {
// let numero = parseInt(prompt("Digite um número de 1 a 10 para sua tabuada): "))

// Verifica se o valor digitado não é um número, garante que o valor digitado seja um número inteiro e restringe o intervalo de 1 a 10 e imprime "Digite um número inteiro entre 1 e 10."
// if (isNaN(numero) || !Number.isInteger(numero) || numero < 1 || numero > 10) {
//     console.log("Digite um número inteiro entre 1 e 10.")
//     return
// }

// Imprime a tabuada do número digitado, declara o valor i = 1, define a condição de continuação ate quando o valor for menor ou igual a 10 e incrementa em 1 a cada repetição, multiplica a variável resultado pelo número escolhido e imprime a tuabuada.
// console.log(`Tabuada do ${numero}:`)
//   for (let i = 1; i <= 10; i++) {
//     let resultado = numero * i
//     console.log(`${numero} x ${i} = ${resultado}`)
// }
// }

// Tabuada()

//  13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// Importa o módulo prompt-sync
// const prompt = require('prompt-sync')()

// Função para calcular a média dos números decimais, declara as variávies "soma" armazena a soma dos números digitados, "quantidade" conta os números digitados e "numero" gaurda temporariamente o número digitado a cada repetição.
// function calcularMediaDecimais() {
//   let soma = 0
//   let quantidade = 0
//   let numero

  // Imprime "Digite números decimais para calcular a média ou digite 0 para parar:"
  // console.log("Digite números decimais para calcular a média ou digite 0 para parar:")

  // Imprime "Digite um número: " e converte em ponto flutuante
  // do {
  //   const input = prompt("Digite um número: ")
  //   numero = parseFloat(input)

    // Verifica se o valor digitado é um número e se for diferente de zero, soma e conta, se o valor digitado não for numérico, exibe mensagem de erro.
//     if (!isNaN(numero)) {
//       if (numero !== 0) {
//         soma += numero
//         quantidade++;
//       }
//     } else {
//       console.log("Entrada inválida. Por favor, digite um número decimal ou 0.")
//     }
  
//     // Condição de parada quando for digitado 0.
//   } while (numero !== 0)

// // Calcula a média dos valores digitados, imprime com duas casas decimais
//   if (quantidade > 0) {
//     const media = soma / quantidade;
//     console.log(`A média aritmética dos ${quantidade} números digitados é: ${media.toFixed(2)}`)
//   } else {
//  }
// }

// calcularMediaDecimais();

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

// Importa o módulo prompt-sync
// const prompt = require('prompt-sync')()

// Função para calcular o fatorial, imprime "Digite um número inteiro para calcular o fatorial: " e converte o valor em um número inteiro.
// function Fatorial() {

// let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "))

// Verifica se o número digitado não é um número, inteiro e não negativo e imprime Por favor, digite um número inteiro não negativo válido."
  // if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
  //   console.log("Por favor, digite um número inteiro não negativo válido.")
  //   return;
  // }

  // declara a variavel fatorial igual a 1, declara i igual a 2 e multiplica o fatorial por i até a variável número.
  // let fatorial = 1
  // for (let i = 2; i <= numero; i++) {
  //   fatorial *= i
  // }

  // Imprime o fatorial do número
//    console.log(`O fatorial de ${numero} é: ${fatorial}`)
// }

// Fatorial()

//  15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

// Função recebe n para calcular os 10 primeiros números da sequencia Fibonacci
// Se n for igual a 0, retorna 0 e se n for iguala 1, retorna 1

// A função Fibonacci chama a si mesma para calcular a soma dos dois termos anteriores (n-1 e n-2), até atingir n igual a 0 ou n igual a 1 e imprime a sequencia dos 10 primeiros números.

// function fibonacci(n) {
//     if(n==0){
//        return 0
//     } else if(n==1){
//        return 1
//     } else {
//        return fibonacci(n-1) + fibonacci(n-2)
//     }
// }

// console.log(fibonacci(10))