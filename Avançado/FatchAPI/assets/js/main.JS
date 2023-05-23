// const request = obj =>{
//     return new Promise((resolve, reject) =>{

//         const xhr = new XMLHttpRequest(); // CONSTRUTOR 
//         xhr.open(obj.method , obj.url, true); // OPEN CONTEM O OBJ QUE ESTA RECEBENDO, ENVIANDO UM METODO 'GET', O URL E SE É ASSYNC OU N
//         xhr.send();
    
//         xhr.addEventListener('load', () => {
//             if(xhr.status >= 200 && xhr.status <=300) {
//                 resolve(xhr.responseText);
//             } else{
//                 reject(xhr.statusText);
//             }
//         })

//     });
// }

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); 

    if (tag === 'a'){
        e.preventDefault(); //PREVINE DE IR PARA O LINK 
        carregaPagina(el);
    }
})

    async function carregaPagina(el){   //PEGANDO O LINK DA PAGINA NO CLICK
        try{
            const href = el.getAttribute('href'); // ATRIBUINDO O LINK DA PAGINA 
            const response = await fetch(href);
            if(response.status !==200) throw new Error('ERRO 404!');
            const html = await response.text();
            carregaResultado(html) 
        } catch(e){
            console.log(e);
        }

    }

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

