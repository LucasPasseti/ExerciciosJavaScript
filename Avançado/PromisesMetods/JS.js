function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
        if(typeof msg !== 'string'){
            reject(new Error('ERRO'));
            return;
        }

        resolve(msg.toUpperCase());
        return;
    }, tempo);
    });
}

const promise = [ 
    esperaAi('Promise1', rand(1,5)),
    esperaAi('Promise2', rand(1,5)),
    esperaAi('Promise3', rand(1,5)),
];

Promise.race(promise)  //PROMISE RACE A PRIMEIRA QUE RESOLVE E A QUE APARECES NO CONSOLE
.then(valor => {
    console.log(valor);
}).catch(e => {
    console.log(e);
})


function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return esperaAi('baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('Error',e))


// Promise.all(promise)  //PROMISE ALL
// .then(valor => {
//     console.log(valor);
// }).catch(e => {
//     console.log(e);
// })