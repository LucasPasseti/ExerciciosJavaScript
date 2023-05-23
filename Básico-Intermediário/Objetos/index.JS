const pessoa1 = {
    nome:'Lucas',
    sobrenome: 'Passeti',
    idade: 22,

    fala(){
        console.log(`Olá, o ${this.nome} ${this.sobrenome} de ${this.idade} anos quer falar algo muito importante para voçê`)
    },

    incrementoIdade(){
        ++this.idade
    },
}

pessoa1.incrementoIdade()
pessoa1.fala()