function rand(min=0, max=3){
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

// esperaAi('fase1', rand())
// .then(valor => {
//     console.log(valor);
//     return esperaAi('fase2', rand())
// })
// .then(fase => {
//     console.log(fase)
//     return esperaAi('fase3', rand())
// })
// .then(fase => {
//     console.log(fase)
// })
// .catch(e => {
//     console.log(e);
// })

async function executa() {   //É IGUAL UMA FUNCAO NORMAL SO MUDA QUE COLOCA ASYNC EM FUNCTION E AWAIT DEPOIS DE CRIAR A VARIÁVEL
    try {const fase1 = await esperaAi('Fase1', rand());     // NAO É PRECISA TER TRY CATCH APENAS PRA VERIFICAR O ERRO, OU SEJA RODA SEM O TRY CATCH MAS É MAIS DO QUE NECESSARIO ELE;
    console.log(fase1);

    const fase2 = await esperaAi('Fase2', rand());
    console.log(fase2);

    const fase3 = await esperaAi('Fase3', rand());
    console.log('terminamos na Fase:', fase3);
} catch(e) {
    console.log(e);
}
    
}

executa();