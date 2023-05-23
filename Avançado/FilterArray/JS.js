// const numeros = [1, 2, 80 ,20 ,52, 58, 74, 96, 7, 5, 6, 10, 11, 12, 13];

// function callbackFilter(valor, indice, array){
//     return valor > 10;
// }
// const numerosFilters = numeros.filter(callbackFilter);
// console.log(numerosFilters);   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< METODO 1

// const numeros = [1, 2, 80 ,20 ,52, 58, 74, 96, 7, 5, 6, 10, 11, 12, 13];  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,METODO 2

// const numerosFilters = numeros.filter( (valor, indice, array) => {
//     console.log(valor,indice);
//     return valor > 10;
// } );
// console.log(numerosFilters);

const pessoas = [
    {nome:'Lucas', idade: 22},
    {nome:'joao', idade: 16},
    {nome:'Julia', idade: 25},
    {nome:'Mateus', idade: 32},
];

const pessoasComNomeGrande = pessoas.filter( obj => obj.nome.length >= 5 );
const pessoasMaisVelhas = pessoas.filter(number => number.idade >= 25);
const pessoasTerminaComA = pessoas.filter(a => a.nome.endsWith('a'));

console.log(pessoasTerminaComA)
console.log(pessoasMaisVelhas);
console.log(pessoasComNomeGrande);