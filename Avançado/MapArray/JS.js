// const numeros = [1, 2, 80 ,20 ,52, 58, 74, 96, 7, 5, 6, 10, 11, 12, 13];
// const numerosEmDobro = numeros.map( valor => valor*2 );

// console.log(numerosEmDobro)



const pessoas = [
    {nome:'Lucas', idade: 22},
    {nome:'joao', idade: 16},
    {nome:'Julia', idade: 25},
    {nome:'Mateus', idade: 32},
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade }));

const comIds = pessoas.map((obj,indice) => {
    obj.id = indice + 1;
    return obj;
})

console.log(nomes);
console.log(idades);
console.log(comIds)