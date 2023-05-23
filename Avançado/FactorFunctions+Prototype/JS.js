const falar = {
    falar() {
        console.log('Estou falando');
    }
}

const comer = {
    comer() {
        console.log('Estou comendo');
    }
}

const beber = {
    beber() {
        console.log('Estou bebendo');
    }
}

// const pessoaPrototype = { ...falar, ...comer, ...beber};
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value:nome},
        sobrenome: {value:sobrenome}
    });
}
const pessoa1 = criaPessoa('Lucas', 'Passeti');

pessoa1.comer();