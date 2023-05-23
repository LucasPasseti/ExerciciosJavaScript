class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log('estou falando')
    }
}

const p1 = new Pessoa('Lucas', 'Passeti');
console.log(p1)