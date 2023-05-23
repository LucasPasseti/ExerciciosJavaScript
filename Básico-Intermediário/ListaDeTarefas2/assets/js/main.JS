const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoinput){
    console.log(textoinput);
}

btnTarefa.addEventListener('click',function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

