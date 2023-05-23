// const pessoa = new Object();
// pessoa.nome = 'Luiz';
// pessoa.sobrenome = 'Passeti';
// pessoa.idade = 23;
// pessoa.falarnome = function(){
//     return `Olá eu sou o ${ this.nome} e desejo um feliz dia`;
// }
// pessoa.getDataNascimento = function (){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// for (let chave in pessoa){
//     console.log(pessoa[chave]);
// }     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pessoa =new Pessoa('Lucas', 'Passeti');
console.log(pessoa);

