// function* geradora(){

//     yield 'valor1';

//     yield 'valor2';

//     yield 'valor3';
// }

// function* geradora1(){

//     i = 0;

//     while (true){
//         yield i;
//         i++;
//     }
// }

function* geradora(){
    yield 1;
    yield 2;
    yield 3;
}

function* geradora1(){
    yield* geradora();
    yield 4;
    yield 5;
    yield 6;
}

const g1 = geradora1();

for (let valor of g1){
    console.log(valor);
    
}

