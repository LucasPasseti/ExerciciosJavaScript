function Pessoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.NomeCompleto = () => `${this.nome} ${this.sobrenome}`;

}

const p1 = new Pessoa('Lucas', 'Passeti');
console.log(p1.NomeCompleto());