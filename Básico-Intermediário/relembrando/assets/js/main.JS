function criaPessoa(nome, sobrenome, a, b){
    return{
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto){
            return `${this.nome} está falando ${assunto}`;
        },

        altura:a ,
        peso:b,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2) ;
        }
    };
}

const p1 = criaPessoa('Lucas','Passeti', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);
