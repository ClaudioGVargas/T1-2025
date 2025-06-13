// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

// function ehDataValida(dia, mes, ano) {
//     // Primeiro, vamos garantir que dia, mês e ano são números inteiros válidos.
//     if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
//         return false; // Se não for número inteiro, já era.
//     }

//     // Agora, verificamos os limites básicos: mês entre 1 e 12, dia e ano maiores que zero.
//     if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
//         return false; // Fora dos limites lógicos.
//     }

//     // Definimos os dias padrão de cada mês (fevereiro começa com 28).
//     const diasPorMes = [
//         0,  // Índice 0 é ignorado, meses vão de 1 a 12
//         31, // Janeiro
//         28, // Fevereiro (será ajustado se for bissexto)
//         31, // Março
//         30, // Abril
//         31, // Maio
//         30, // Junho
//         31, // Julho
//         31, // Agosto
//         30, // Setembro
//         31, // Outubro
//         30, // Novembro
//         31  // Dezembro
//     ];

//     // A regra para ano bissexto:
//     // Divisível por 4, mas não por 100,
//     // A MENOS QUE seja divisível por 400.
//     const isBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

//     // Se for fevereiro, ajustamos os dias se o ano for bissexto.
//     if (mes === 2 && isBissexto) {
//         diasPorMes[2] = 29; // Fevereiro tem 29 dias em ano bissexto.
//     }

//     // Por fim, verificamos se o dia está dentro do limite para o mês atual.
//     if (dia > diasPorMes[mes]) {
//         return false; // O dia é maior que o número de dias do mês.
//     }

//     // Se passou por todas as verificações, a data é válida!
//     return true;
// }

// console.log("--- Datas Válidas ---");
// console.log("31/12/2024:", ehDataValida(31, 12, 2024));     // true
// console.log("29/02/2024 (Bissexto):", ehDataValida(29, 2, 2024)); // true
// console.log("01/01/2000:", ehDataValida(1, 1, 2000));       // true
// console.log("30/06/2023:", ehDataValida(30, 6, 2023));       // true

// console.log("\n--- Datas Inválidas ---");
// console.log("31/04/2023 (Abril só tem 30 dias):", ehDataValida(31, 4, 2023)); // false
// console.log("29/02/2023 (2023 não é bissexto):", ehDataValida(29, 2, 2023)); // false
// console.log("32/01/2023 (Dia não existe):", ehDataValida(32, 1, 2023));     // false
// console.log("10/13/2023 (Mês inválido):", ehDataValida(10, 13, 2023));     // false
// console.log("00/01/2023 (Dia zero):", ehDataValida(0, 1, 2023));         // false
// console.log("10/05/-100 (Ano negativo):", ehDataValida(10, 5, -100));     // false
// console.log("10/05/abc (Ano não é número):", ehDataValida(10, 5, "abc"));   // false

// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto”
// ou “mais baixo” a cada palpite errado.

// const prompt = require('prompt-sync')()

// function jogoDaAdivinhacao () {
//     const numeroSecreto = Math.floor(Math.random() * 100) + 1
//     let tentativas = 0
//     let palpite

//     while (palpite !== numeroSecreto) {
//         const entrada = prompt("Adivinhe o número entre 1 e 100: ")
//         palpite = Number(entrada)
//         tentativas++

//         if (palpite < numeroSecreto) {
//             console.log(("Mais alto"))
//         } else if (palpite > numeroSecreto) {
//             console.log(("Mais baixo"))
//         } else {
//             console.log((`Parabéns! Você acertou em ${tentativas} tentativas.`))
//         }
//     }
// }
// jogoDaAdivinhacao()

// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

// function extrairPalavrasUnicas (texto) {
//     const palavras = texto.split(" ")
//     const unicas = []

//     for(let i = 0; i < palavras.length; i++) {
//         let palavra = palavras[i]
//         let jaExiste = false

//         for(let j = 0; j < unicas.length; j++) {
//             if(palavra === unicas[j]) {
//                 jaExiste = true
//                 break
//             }
//         }

//         if(!jaExiste) {
//             unicas.push(palavra)
//         }
//     }

//     return unicas

// }

// let resultado = extrairPalavrasUnicas("olá olá mundo mundo");
// console.log(resultado)

// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.

// function fatorial (n) {
//     if(n < 0) {
//         throw new error("O fatorial não pode ter números negativos")
//     } else if (n === 0) {
//         return 1
//     } else {
//         return n * fatorial(n-1)
//     }
// }

// function soma(n) {
//     if(n === 1) {
//         return 1
//     } else{
//         return n + soma(n - 1)
//     }
// }

// console.log(fatorial(5))
// console.log(soma(5))

// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo. 

// function debounce(fn, delay) {
//   let timeoutId;

//   return function(...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// function minhaFuncao() {
//   console.log('Função executada!');
// }

// const debouncedFunc = debounce(minhaFuncao, 1000);

// // Se chamar várias vezes rapidamente, só executa uma vez após 1 segundo da última chamada
// debouncedFunc();
// debouncedFunc();
// debouncedFunc();
// // Apenas uma mensagem "Função executada!" aparecerá no console, 1 segundo após a última chamada


// 6. Memoization 
// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

// function memoize (fn) {
//     const cache = new Map()

//     return function (...args) {
//         const key = JSON.stringify(args)

//         if(cache.has(key)){
//             return cache.get(key)
//         }

//         const result = fn.apply(this, args)
//         cache.set(key, result)
//         return result
//     }
// }

// function fibonacci(n) {
//     if(n < 2) return n
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// const fastFib = memoize(function fibonacci(n) {
//     if(n < 2) return n
//     return fastFib(n - 1) + fastFib (n - 2)
// })

// console.log(fastFib(47))
// console.log(fibonacci(47))

// 7. Mapeamento e Ordenação --REFAZER--
// Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)  // ordena pelo preço crescente
    .map(produto => produto.nome);      // extrai apenas os nomes
}

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 400 }
];

console.log(nomesOrdenadosPorPreco(produtos));
// Saída: ["Mouse", "Teclado", "Monitor"]


// 8. Agrupamento por Propriedade Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total. 


// 9. Conversão Entre Formatos Escreva duas funções: ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.