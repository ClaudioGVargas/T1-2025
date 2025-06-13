//  1. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos
// anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o 
// total em dias.

// Solicita os dados ao usuário
// const prompt = require ('prompt-sync') ()

// let cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia?"))
// let anosFumando = parseInt(prompt("Há quantos anos você fuma?"))

// // Calcula o total de cigarros fumados
// let totalCigarros = cigarrosPorDia * 365 * anosFumando

// // Cada cigarro reduz 10 minutos de vida
// let minutosPerdidos = totalCigarros * 10

// // Converte minutos perdidos em dias (1 dia = 1440 minutos)
// let diasPerdidos = minutosPerdidos / 1440

// // Exibe o resultado
// console.log((`Você perdeu ${diasPerdidos.toFixed(2)} dias de vida`))

// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado.
// Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

// const prompt = require('prompt-sync')()

// // Solicita a velocidade do carro
// let velocidade = parseFloat(prompt("Digite a velocidade do carro (em Km/h):"));

// // Define o limite de velocidade
// const limite = 80;

// // Verifica se houve infração
// if (velocidade > limite) {
//     let excesso = velocidade - limite;
//     let multa = excesso * 5.00;
//     console.log(`Você foi multado! Excesso de ${excesso.toFixed(1)} Km/h.\nValor da multa: R$ ${multa.toFixed(2)}`);
// } else {
//     console.log("Tudo certo! Você está dentro do limite de velocidade.");
// }

//  3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por
// Km para viagens até 200Km R$ 0.45 para viagens mais longas.

// const prompt = require('prompt-sync')()

// // Solicita a distância da viagem
// let distancia = parseFloat(prompt("Digite a distância da viagem em Km:"))

// // Calcula o preço da passagem
// let preco
// if (distancia <= 200) {
//     preco = distancia * 0.50
// } else {
//     preco = distancia * 0.45
// }

// // Exibe o resultado
// console.log(`O preço da passagem é R$ ${preco.toFixed(2)}`)

//  4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com 
// essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

// const prompt = require('prompt-sync')()

// function verificarTriangulo() {
 
//   let segmento1 = parseFloat(prompt("Digite o comprimento do primeiro segmento: "))
 
//   let segmento2 = parseFloat(prompt("Digite o comprimento do segundo segmento: "))
  
//   let segmento3 = parseFloat(prompt("Digite o comprimento do terceiro segmento: "))
  
//   // Validação da entrada
//   if (isNaN(segmento1) || isNaN(segmento2) || isNaN(segmento3) ||
//       segmento1 <= 0 || segmento2 <= 0 || segmento3 <= 0) {
//     console.log("\nPor favor, digite comprimentos válidos (números positivos) para os segmentos.")
//     return; // Encerra a função se a entrada for inválida
//   }

//   // Verificação da condição de existência de um triângulo
//   // O comprimento de cada lado deve ser menor que a soma dos outros dois
//   const condicao1 = segmento1 < (segmento2 + segmento3)
//   const condicao2 = segmento2 < (segmento1 + segmento3)
//   const condicao3 = segmento3 < (segmento1 + segmento2)

//   if (condicao1 && condicao2 && condicao3) {
//     console.log(`\nCom os segmentos de comprimento ${segmento1}, ${segmento2} e ${segmento3}, É POSSÍVEL formar um triângulo.`)
//   } else {
//     console.log(`\nCom os segmentos de comprimento ${segmento1}, ${segmento2} e ${segmento3}, NÃO É POSSÍVEL formar um triângulo.`)
//   }
// }

// // Chama a função para executar o programa
// verificarTriangulo()

