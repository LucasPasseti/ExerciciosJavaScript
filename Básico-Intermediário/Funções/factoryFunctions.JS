function criaPessoa(nome, sobrenome, altura, peso){
   return {
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        fala(assunto) {
            return `Eu sou o ${this.nome} ${this.sobrenome} tenho ${altura} de altura, e vim falar sobre o assunto ${assunto}`
        },

        altura:altura,
        peso:peso,

        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed();
        }
    };
    
    
}


const p1 = criaPessoa('Lucas', 'Passeti', 1.4, 45);

console.log(p1.fala('que estou estudando no momento'));

console.log(p1.nomeCompleto);