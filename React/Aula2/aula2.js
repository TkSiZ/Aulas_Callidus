//arrfunc
// let dobrarEs6 = x => 2 * x
// console.log(dobrarEs6(10), end = "\n")

// let avaliarEs6 = (x, y, z) => (x < 10 ? y + z : y * z)
// console.log(avaliarEs6(18, 15, 5))
// console.log(avaliarEs6(2, 3, 11))

// console.log(((x) => 2 * x)(40))

// -------------------------------------------------------- //

// const livros1 = ["CSS3", "JavaScript", "PHP"]
// const livros2 = ["HTML5", "React"]
// const precos = [70, 30, 90, 120]

// let livrosB = [...livros1, ...livros2]
// console.log(livrosB)


// let precoMaximo = Math.max(...precos)
// console.log(precoMaximo)

//---------------------------------------------------------------//

// const livros = ["CSS3", "HTML5", "JavaScript", "React", "PHP"]
// let livros1 = livros.map(livro => "Livro" + livro)
// let livros2 = livros.map((livro, index) => "Livro " + index + " " + livro)
// console.log(livros)
// console.log(livros1)

// console.log(livros2)

// ----------------------------------------------------------------------//

// const livrosA = [
//     {titulo: "Construindo Sites com HTML", autor: "Maurício Samy Silva"},
//     {titulo: "Web Scraping com Python", autor: "Ryan Mitchell"},
//     {titulo: "CSS3", autor: "Maurício Samy Silva"}
// ];
// let livrosX = livrosA.map(livro => "Livro " + livro.titulo)
// let livrosY = livrosA.map(livro => "Livro " + livro.autor)
// console.log(livrosA)
// console.log(livrosX)
// console.log(livrosY)

// -------------------------------------------------------------------- //

const pessoas = [
    {nome: "João", idade: 21},
    {nome: "Ana", idade: 69},
    {nome:"Carlos", idade: 23}
]

const nomes = pessoas.map(pessoa => pessoa.nome)

console.log(nomes)


método filter

[09:22, 24/07/2024] Binho: const livros = [

    //     {
    //         titulo: "Construindo Sites com HTML",
    //         autor: "Maricio"
    //     },
    //     {
    //         titulo: "Tchurubangos",
    //         autor: "Tchurubagos"
    //     },
    //     {
    //         titulo: "CSS3",
    //         autor: "Today"
    //     }
    // ]
    
    // let livros1 = livros.filter(livro => livro.titulo === "CSS3")
    // let livros2 = livros.filter(livro => livro.autor === "Maricio")
    // let livros3 = livros.filter(livro => livro.titulo.includes("Tchu"))
    
    // console.log(livros1)
    // console.log(livros2)
    // console.log(livros3)
    
    //---------------------------------------------------------------------- //
    
    const pessoas = [
        {nome: "João", idade: 21},
        {nome: "Ana", idade: 69},
        {nome:"Carlos", idade: 23}
    ]
    
    const idades = pessoas.filter(pessoa => pessoa.idade > 21)
    
    console.log(idades)
    [09:22, 24/07/2024] Binho: metodo find
    [09:22, 24/07/2024] Binho: const livros = [
        { id: 1, titulo: "Tchurubangos" },
        { id: 2, titulo: "Acaba" },
        { id: 3, titulo: "Pelo AMOR DE DEUS" }
    ]
    
    let livros1 = livros.find((livro) => livro.id === 3)
    
    console.log(livros1)
    console.log(livros1.titulo)

    metodo split

    // let str = "maçã, banana, laranja"
// let frutas = str.split(",")
// console.log(frutas)

// ------------------------------------- //

// let str = "JavaScript123é456divertido"
// let palavras = str.split(/\d+/)
// console.log(palavras)

// ------------------------------------ //

// let str = "Maça,banana,laranja,abacaxi"
// let frutas = str.split(",", 2)
// console.log(frutas)

// ----------------------------------- //

let str = "JavaScript"
let caracteres = str.split("")
console.log(caracteres)