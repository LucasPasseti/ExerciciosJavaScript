// const numeros = [1, 2, 80 ,20 ,52, 58, 74, 96, 7, 5, 6, 10, 11, 12, 13];
// const total = numeros.reduce(function(acumulador, valor){
//     if (valor % 2 ===0){
//         acumulador += valor;
//     }
//     return acumulador;
// }, 0)

// console.log(total)

const pessoas = [
    {nome:'Lucas', idade: 62},
    {nome:'joao', idade: 23},
    {nome:'Julia', idade: 55},
    {nome:'Dani', idade: 10},
    {nome:'Joaquim', idade: 64},
    {nome:'Mateus', idade: 63},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})

console.log(maisVelha); 