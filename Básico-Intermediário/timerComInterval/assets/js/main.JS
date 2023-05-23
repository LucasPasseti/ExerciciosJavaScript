const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer;

function iniciaRelogio(){
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos)
    }, 1000)
};

function criarHoraDosSegundos(segundos){
    const data = new Date(segundos *1000);
    return data.toLocaleTimeString('pt-br',{
        hour12:false,
        timeZone: 'UTC'
    });
};


iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(){
    relogio.classList.add('pausado')
    clearInterval(timer);
});

zerar.addEventListener('click', function(){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0

});

