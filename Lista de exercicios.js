// const prompt = require('prompt-sync')()

// let celsius = 20

// let fahrenheit = (celsius * 9/5) + 32

// console.log(`${celsius} celsius equivale a ${fahrenheit} fahrenheit`)

// Escreva um algoritmo para ler o número de eleitores de um município, o númerto de votos brancos, nulos e válidos. Calcular e escrever o
// percuntual que cada um representa em relação ao total de eleitores

// let totalEleitores = 100
// let votosEmBranco = 0
// let votosNulos = 30
// let votosValidos = 70

// let percentualVotosEmBranco = votosEmBranco/totalEleitores * 100
// let percentualVotosNulos = votosNulos/totalEleitores * 100
// let percentualVotosValidos = votosValidos/totalEleitores * 100

// console.log(`O percentual de votos em braco, nulos e válidos é respectivamente ${percentualVotosEmBranco}, ${percentualVotosNulos}, ${percentualVotosValidos} `)

// A turma C é composta de 60 alunos e a turma D de 20 alunos. Escreva um algoritno que leia o perentual de alunos reprovados na turma C, o 
// percentual de aprovados na turma D, calcule e escreva:

//a) o núnero de alunos reprovados na turma C
//b) o número de alunos aprovados na turma D
//c) O percentual de alunos reprovados em relaçao ao total de alunos das duas turmas

//Exemplo de dados de entrada
//10 (perentual de alunos reprovados na turma C)
//85 (percentual de alunos aprovados da turma D)

//Saída para os dados de entrada acima
//6 (quantidade de alunos reprovados na turma C)
//3 (quantidade de alunos reprovados na turma D)
//11.25 (perentual de alunos reprovados em relação ao total de alunos das duas turmas

// let totalAlunosC  = 60
// let totalAlunosD = 20


// let percetualReprovadosTurmaC = 10
// let percentualAproadosTurmaD = 85

// let quantidadeAlunosReprovadosTurmaC = (percetualReprovadosTurmaC)/100 * totalAlunosC
// let percentualReprovadosTurmaD = 100 - percentualAproadosTurmaD
// let quantidadeAlunosReprovadosTurmaD = (percentualReprovadosTurmaD/100) * totalAlunosD

// let totalAlunos = totalAlunosC + totalAlunosD

// let percentualReprovadosTotal = (quantidadeAlunosReprovadosTurmaC + quantidadeAlunosReprovadosTurmaD) / totalAlunos * 100

// console.log(`A quantidade de alunos reprovados na turma C é: ${quantidadeAlunosReprovadosTurmaC}`)
// console.log(`A quantidade de alunos reprovados na turma D é: ${quantidadeAlunosReprovadosTurmaD}`)
// console.log(`O total de reprovados em relação aos aprovados é de: `)
// console.log(`O percentual de alunos reprovados em relação ao total de alunos: ${percentualReprovadosTotal.toFixed(2)}`)

// Faça um programa que leia o dia da semana (domingo, segunda, terça, quarta, quinta, sexta e sabado). Esse dia deve ser um texto. Se for sabado
// ou domingo imprimir "Final de Semana!", se não imprimir "Dia Util"


// let diaDaSemana = 'Segunda-feira'

// if((diaDaSemana == 'sabado') || (diaDaSemana == 'domingo')){
//     console.log|('Final de Semana')
//     } else {
//         console.log('Dia Util')
//     }


// let diaDaSemana = 'Segunda-feira'

// switch(diaDaSemana){
//     case 'Sábado':
//         console.log('Final de semana')
//         break
//     case 'Domingo':
//         console.log('Final de Semana')
//         break
//     default:
//         console.log("Dia útil")
// }

// Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de zero. Para cada número fornecido,
// imprimir se ele é negativo ou positivo. Quando o numero 0 for fornecido a repetição deve  ser encerrada sem imprimir mensagem alguma

// const prompt = require('prompt-sync')()

// let valor

// do {
//     valor = Number(prompt('Informe um número: '))

//     if(valor > 0) {
//         console.log('Positivo!')
//     } else if (valor == 0) {
//         break
//     } else {
//         console.log('Negativo')
//     }
// } while (valor != 0)

// Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha incorreta escrever a mensagem "SENHA INVÁLIDA". Quando a senha for
// informada corretamente deve ser impressa amensagem "ACESSO PERMITIDO" e o algoritmo encerrado. Considere que a senha correta é o valor 2807.

// const prompt = require('prompt-sync')()

// let senha

// do {
//     senha = Number(prompt('Informe a senha: '))
//     if(senha == 2807) {
//         console.log('ACESSO PERMITIDO!')
//     } else {
//         console.log('SENHA INVÁLIDA!')
//     }
// } while (senha != 2807)