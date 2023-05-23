const pessoas = [
    {id:3, nome: 'Lucas'},
    {id:2, nome: 'Maria'},
    {id:1, nome: 'Joao'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {... pessoa};
// }

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas.get(2));