function Produto (nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: false, //pode alterar valor ou nao
        configurable: true, // chave reconfiguravel ou nao
    });

    Object.defineProperties(this,{
        nome: {
            enumerable: true,
            value: nome, 
            writable: false, 
            configurable: true, 
        },
        preco: {
            enumerable: true,
            value: preco, 
            writable: false, 
            configurable: true, 
        },
    })
}

const p1 = new Produto ('Lucas', 2, 3);
console.log(Object.keys(p1));