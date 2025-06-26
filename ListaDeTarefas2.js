// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

// Função ehDataValida, verifica se os argumentos dia, mes e ano são números inteiros e retorna false se não for um número inteiro
// Verifica se o dia é maior que zero, o mês está entre 1 e 12 e se o ano é maior que zero e retorna fase se o número for inválido
// function ehDataValida(dia, mes, ano) {
//     if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
//         return false;
//     }    
//     if (dia < 1 || mes < 1 || mes > 12 || ano < 1) {
//         return false;
//     }

// Array que representa o número de dias de cada mês
    // let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// Cálculo se o ano é bissexto, verifica se o ano é divisível por 4, verifica se o ano não é divisível por 100 e verifica se o ano é divisível por 400
    // let isBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)

// Corrige o número de dias do mês de fevereiro se o ano for bissexto
    // if (mes === 2 && isBissexto) {
//         diasPorMes[1] = 29; 
//     }
//     if (dia > diasPorMes[mes - 1]) {
//         return false; 
//     }

//         return true;
// }

// Imprime true para ano bissexto e false para o ano que não é bissexto
// console.log(ehDataValida(29, 2, 2020))
// console.log(ehDataValida(29, 2, 2021))
// console.log(ehDataValida(31, 4, 2022))
// console.log(ehDataValida(31, 12, 2022))

// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto”
// ou “mais baixo” a cada palpite errado.

// Chama o módulo prompt-sync
// const prompt = require('prompt-sync')()

// função jogoDaAdivinhacao, gera um número aleatório entre 1 e 100 e as variáveis tentativas que conta o número de tentativas e palpite que armazena o número
// function jogoDaAdivinhacao () {
//     const numero = Math.floor(Math.random() * 100) + 1
//     let tentativas = 0
//     let palpite

// Loop para rodar o programa até o jogador acertar o valor aleatório gerado, compara o número digitado com o número aleaqtório e imprime o número de tentivas do jogador
//     while (palpite !== numero) {
//         const entrada = prompt("Adivinhe o número entre 1 e 100: ")
//         palpite = Number(entrada)
//         tentativas++

//         if (palpite < numero) {
//             console.log(("Digite um número mais alto"))
//         } else if (palpite > numero) {
// console.log(("Digite um número mais baixo"))
//         } else {
// console.log((`Você acertou em ${tentativas} tentativas.`))
//         }
//     }
// }
// jogoDaAdivinhacao()

// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

// Função extrair palavras únicas, recebe a frase e divide em palavras e cria um array e cria um array vazio para as palavras que não se repetem
// function extrairPalavrasUnicas (frase) {
//     let palavras = frase.split(" ")
//     let unicas = []

// Percorre todas as palavras da frase e inicializa a variável jaExiste para verificar se a palavra já está na variável unicas
    // for(let i = 0; i < palavras.length; i++) {
    //     let palavra = palavras[i]
    //     let jaExiste = false

// Verifica se a palavra foi adicionada no array
        // for(let j = 0; j < unicas.length; j++) {
        //     if(palavra === unicas[j]) {
        //         jaExiste = true
        //         break
        //     }
        // }

// Adiciona a palavra no array e retorna o resultado
//         if(!jaExiste) {
//             unicas.push(palavra)
//         }
//     }

//     return unicas
// }

// Recebe a frase e imprimne as palavras únicas
// let resultado = extrairPalavrasUnicas("olá olá mundo mundo");
// console.log(resultado)

// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.

// Função fatorial, se o número for negativo o programa lança um erro, se o valor for igual a zero, retorna 1, caso contrário chama a função
// recursiva pra calcular o fatorial
// function fatorial (n) {
//     if(n < 0) {
//         throw new Error("O fatorial não pode ter números negativos")
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

// Imprime o fatorial de 5 e a soma de 5
// console.log(fatorial(5))
// console.log(soma(5))

// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada
// novamente dentro do intervalo. 

// Função debounce, declar a função com let timeOutId, retorna a função fn e cancela qualquer eecução anterior com clearTimeOut e depois agenda
// a função fn para ser executada após o tempo definido em delay

// function debounce(fn, delay) {
//   let timeoutId

//   return function(...args) {
//     clearTimeout(timeoutId)
//     timeoutId = setTimeout(() => {
//       fn.apply(this, args)
//     }, delay)
//   };
// }

// Chama a função e imprime Função executada
// function funcao() {
//   console.log('Função executada!')
// }

// Chama a função debounce três vezes com o atraso definido
// let debouncedFunc = debounce(funcao, 1000)

// debouncedFunc()
// debouncedFunc()
// debouncedFunc()

// 6. Memoization 
// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

// Função memoize, recebe uma função fn e retorna uma nova função com cache embutido, em Map armazena os resultados anteriores e retorna a nova
// função com args, converte o array de argumentos em uma string JSON, para poder usar como chave no Map. Se já foi feito uma chamada anterior
// com os mesmo argumentos, retorna o valor do cache, caso contrário calcula, armazena o resultado no cache e retorna o resultado
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

// Exemplos de uso da função memoize comparando duas funções fibonacci dados em aula
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

// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente,
// usando map, sort.

// Função nomes ordenados por preço, reordena o array de produtos com base no preço com sort e extrai apenas os nomes com map
// function nomesOrdenadosPorPreco(produtos) {
//   return produtos
//     .sort((a, b) => a.preco - b.preco)
//     .map(produto => produto.nome)
// }

// // Array com os produtos e preços
// let produtos = [
//   { nome: "Celular", preco: 3000 },
//   { nome: "Notebook", preco: 7000 },
//   { nome: "Smartwatch", preco: 2000 }
// ]

// Imprime os produtos de acordo com o preço
// console.log(nomesOrdenadosPorPreco(produtos))
// Saída: ["Celular", "Notebook", "Smartwatch"]


// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor
// é a soma de todos os seus total. 

// Função agrupar propriedades em vendas, reduce percorrer o arqay vendase usa um objeto vazio como acumulador, para cada venda executa a funçãoi
// e atualiza o acumulador, extrai as propriedades cliente e total de cada item do array, verifica se o cliente já existe no acumulador
// function agruparPropriedadeEmVendas(vendas) {
//   return vendas.reduce((acumulador, venda) => {
//     let { cliente, total } = venda

//     if (!acumulador[cliente]) {
//       acumulador[cliente] = 0
//     }

// Soma o total de cada venda pra cada cliente e retorna o valor acumulado
//     acumulador[cliente] += total
//     return acumulador;
//   }, {})
// }

// Array de cliente e total e imprime op resultado
// let vendas = [
//   { cliente: "Luiza", total: 1500 },
//   { cliente: "Laura", total: 3000 },
//   { cliente: "Pedro", total: 2500 },
//   { cliente: "Luiza", total: 100 },
//   { cliente: "Laura", total: 2100 },
//   { cliente: "Pedro", total: 150 }
// ];

// let resultado = agruparPropriedadeEmVendas(vendas)
// console.log(resultado)


// 9. Conversão Entre Formatos
// Escreva duas funções:
// paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.
// objeto ParaPares(obj) faz o inverso, retornando um array de pares.

// Função pares para objeto transforma um array de pares em um objeto, para cada par (chave, valor) vira uma propriedade do objeto e imprime
// o resultado
// function paresParaObjeto(pares) {
//   return Object.fromEntries(pares)
// }

// let pares = [["nome", "Laura"], ["idade", 3]]
// console.log(paresParaObjeto(pares))

// // função objeto para pares transforma um objeto em um array de pares, percorre o objeto e par cada chave e valor cria um par e imprime o resultado
// function objetoParaPares(obj) {
//   return Object.entries(obj)
// }

// let pessoa = { nome: "Laura", idade: 3}
// console.log(objetoParaPares(pessoa))