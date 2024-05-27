const produtos = new Map()

const coisasPraComer = [
    {
        nome: "Banana",
        categoria: "Frutas"
    },
    {
        nome: "Alface",
        categoria: "Legumes"
    },
    {
        nome: "Maçã",
        categoria: "Frutas"
    },
    {
        nome: "Rúcula",
        categoria: "Legumes"
    },
    {
        nome: "Fruta1",
        categoria: "Frutas"
    },
    {
        nome: "Legume1",
        categoria: "Legumes"
    },
]

coisasPraComer.forEach(e => {
    produtos.set(e.categoria, e.nome)
});

console.log(produtos)