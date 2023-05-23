const produto = {nome:'produto', preco: 1.8};
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
// })
// // console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// produto.nome = 'teste';
// console.log(produto.nome);


// console.log(Object.keys(produto));
// console.log(Object.values(produto));
// console.log(Object.entries(produto));
// console.log(Object.assign(produto));


for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
};