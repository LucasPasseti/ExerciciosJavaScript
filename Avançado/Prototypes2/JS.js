function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.desconto = function(percentual){  //sempre que for adicionar um metodo dentro da Function, Adicionar no prototype em vez disso <<<<<<<<<<<
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumentaPreco = function(percentual){  //sempre que for adicionar um metodo dentro da Function, Adicionar no prototype em vez disso <<<<<<<<<<<
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15,
}

const p3 = Object.create(Produto.prototype,{   // Object.create Para criar algo da Funcao construtora Principal           
    preco:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho2:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    },
});
Object.setPrototypeOf(p2, Produto.prototype);

p3.aumentaPreco(10);
console.log(p3)
