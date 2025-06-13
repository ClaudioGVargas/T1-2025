// let serie = {
//     nome: 'Supernatural',
//     dataLancamento: 2005,
//     atores: ['Jensen Ackles', 'Jared Padalecki', 'Misha Collins'],
//     status: 'finalizada',
//     classificação: 18,
//     nrTemporadas: {
//         temp: 22,
//         temp2: 22,
//         temp3: 16,
//         temp4: 22,
//         temp5: 22,
//         temp6: 22,
//         temp7: 23,
//         temp8: 23,
//         temp9: 23,
//         temp10: 23,
//         temp11: 23,
//         temp12: 23,
//         temp13: 23,
//         temp14: 20,
//         temp15: 20,
//     },

//     mostrarCaracteristicas: function () {
//     return `nome da série é; ${this.nome} a classificação é para maiores de ${this.classificação} anos e ela está ${this.status}`

//     }
// }

// console.log(serie.mostrarCaracteristicas())

// let livro = {
//     titulo: 'O Hobbit',
//     autor: 'J.R.R.Tolkien',
//     ano: 1925,

//     mostrarCaracteristicas: function(){
//         return `O nome do livro e: ${this.titulo}, foi lançado em ${this.ano} e quem escreveu foi ${this.autor}`

//     }
// }

// console.log(livro.mostrarCaracteristicas())

// let atleta = {
//     nome:'CR7',
//     time:'Aimoré',
//     esporte: 'futebol',

//     celebrarVitoria: function() {
//         console.log('Gol')
//     }
// }

// console.log(atleta.celebrarVitoria())

// let atletaSecundario = atleta
// atletaSecundario.rival = "Rivaldo"

// // console.log(atleta)
// // console.log(atletaSecundario)

// function anime(nome, personagemForte, personagemFraco, nota) {
//     this.nome = nome
//     this.personagemForte = personagemForte
//     this.personagemFraco = personagemFraco
//     this.nota = nota

//     this.mostrarAnime = function() {
//         return `
//             nome: ${this.nome},
//             maisForte: ${this.personagemForte}
//             maisFraco: ${this.personagemForte}
//             nota: ${this.nota}
//             `
//     }
// }

// let naruto = new anime("Naruto", "Ebisu", "Oruchimaru", 5)
// console.log(naruto.mostrarAnime())
// let anime2 = new anime("One Piece", "Coby", "Ace", 5)
// console.log(anime2.mostrarAnime())

// function jogos(titulo, genero, anoLancamento, empresa, jogar) {
//     return {
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar

//     }
// }

// let jogo = jogos("Dragon Age", "RPG", "2009", "Bioware", () => console.log('Morrendo'))

// // jogo.jogar()

// let personagens = [['killua', 'Mustang'], 'Minato', 'Aiorous']

// console.log(personagens)

// for(let key in personagens) {
//     console.log(personagens[key])
// }

// let palavra = 'teste'

// for(let jogo1 of object.keys(jogo)) {
//     console.log(jogo1)
// }

// let professor = {
//     nome: 'Stark',
//     disciplina: "Fisica",
//     notas: {
//         aluno1: [2, 5],
//         aluno2: [3, 2],
//             }
// }

// let somaNotas = 0
// let numeroEstudantes = 0

// for(let estudante in professor.notas) {
//     console.log(professor.notas[estudante])
//     somaNotas += Array.isArray(professor.notas[estudante])
//     ? professor.notas[estudante].reduce((acc, nota) => acc + nota, 0)/professor.notas[estudante].length : professor.notas[estudante]
    
//     numeroEstudantes++
 
// }

// let media = somaNotas/numeroEstudantes

// console.log(`A nota media turma é:${media}`)

// if (media >= 3) {
//     console.log(`${professor.nome} está acima da média`)
//     console.log(`${professor.nome} está abaixo da média`)
// }

// Verificar entro de uma lista de livros os que foram publicados antes de 2000
// utilizem for of

// const livraria = [
//     {titulo: "Codigo Limpo", autor: "Martin", ano: 2019},
//     {titulo: "The Gunslinger", autor: "Stephen King", ano: 1991},
//     {titulo: "Laanja Mecanica", autor: "Nicole", ano: 1810},
//     {titulo: "Pequeno Principe", autor: "Fabiana", ano: 1903},
//     {titulo: "As Cronicas", autor: "Bradbury", ano: 2010},
// ]

// for(let livro of livraria){
//     if (livro.ano < 2000){
//         console.log(livro)
//     }
// }

// Contar a quantidade de filmes por genero

// let filmes = [
//     {titulo: "Senhor dos Aneis", genero: "Fantasia"},
//     {titulo: "Jogo da Imitação", genero: "Historico"},
//     {titulo: "Clube da Luta", genero: "Drama"},
//     {titulo: "Ilha do Medo", genero: "Terror"},
//     {titulo: "Pulp Fiction", genero: "Ação"},
//     {titulo: "Poderoso Chefão", genero: "Máfia"},
//     {titulo: "Duna", genero: "Ficção"},
//     {titulo: "Duna2", genero: "Ficção"},
//     {titulo: "Kill Bill", genero: "Ação"},
//     {titulo: "Stigmata", genero: "Terror"},
// ]

// let contagemGenero = {}

// filmes.forEach(filme => {
//     if(contagemGenero[filme.genero]) {
//         contagemGenero[filme.genero]++
//     } else {
//         contagemGenero[filme.genero] = 1
//     }
// });

// console.table(contagemGenero)

// Calcular o atorial do número

// function calcularFatorial(numero) {
//     let fatorial = 1
//     for(let i = 1; i <= numero; i++) {
//         fatorial = fatorial * i
//     }

//     console.log(fatorial)
// }

// calcularFatorial(5)

// Imprima os 10 primeiros números da sequencia fibonacci

// function fibonacci() {
//     let a = 0, b = 1, temp
//     console.log(a)
//     console.log(b)
//     for(let i = 3; i <= 10; i++) {
//         temp = a + b
//         console.log(temp)
//         a = b
//         b = temp
//     }
// }

// fibonacci()

// function fatorial(n) {
//     let calculo  = 0
//     if(n === 0) {
//         return 1
//     } else {
//         calculo = n * fatorial(n - 1)
//         return calculo
//     }
// }

// console.log(fatorial(5))

// function soma(n) {
//     if(n === 1) {
//         return 1
//     } else {
//         return n + soma(n - 1)
//     }
// }

// console.log(soma(5))

// function fibonacci (n) {
//     if(n === 0) {
//         return 0 
//     } else if (n === 1) {
//         return 1
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2)
//     }
// }

// console.log(fibonacci(10))

// eletronicos
//     celulares
//     computadores
//     notebooks
// roupas

// const categorias = [{
//     id: 1,
//     nome: "eletronicos",
//     filhos: [
//         {id: 2, nome: "celulares", filhos: []},
//         {id: 3, nome: "computadores", filhos: [
//             {id: 4, nome: "notebooks", filhos: []}
//         ]},
//     ]
// },
// {
//     id: 5,
//     nome: "Roupas",
//     filhos: []
// }
// ]

// function imprimirCategorias(lista, nivel = 0) {
//     for(let categoria of lista) {
//         console.log(" ".repeat(nivel * 2) + categoria.nome)
//         if(categoria.filhos.length > 0) {
//             imprimirCategorias(categoria.filhos, nivel + 1)
//         }
//     }
// }
// imprimirCategorias(categorias)