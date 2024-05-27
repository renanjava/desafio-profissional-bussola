const produtos = new Map()

const coisasPraComer = [
    {
        nome: "Banana",
        categoria: "Frutas"
    },
    {
        nome: "Cenoura",
        categoria: "Legumes"
    },
    {
        nome: "Maçã",
        categoria: "Frutas"
    },
    {
        nome: "Abóbora",
        categoria: "Legumes"
    },
    {
        nome: "Laranja",
        categoria: "Frutas"
    },
    {
        nome: "Cogumelo",
        categoria: "Legumes"
    },
]

const arrayFrutas = []
const arrayLegumes = []

coisasPraComer.forEach(e => {
    e.categoria == "Frutas" ? arrayFrutas.push(e.nome) : arrayLegumes.push(e.nome)
});
produtos.set("Frutas", arrayFrutas)
produtos.set("Legumes", arrayLegumes)

console.log(produtos)