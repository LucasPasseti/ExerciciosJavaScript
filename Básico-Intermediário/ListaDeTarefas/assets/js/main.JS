const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class','apagar')
    li.appendChild(botaoApagar);
}

function criaTarefa(textoinput){
    const li = criaLi();
    li.innerHTML = textoinput;
    tarefas.appendChild(li) // adiciona para Ul do html
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }

}

btnTarefa.addEventListener('click',function(){
    if (!inputTarefa.value)return; // caso esteja em branco o input  nao retorna nada

    criaTarefa(inputTarefa.value)
    
})

// aqui é o input

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!inputTarefa.value)return; 
        criaTarefa(inputTarefa.value)
        

    }
})

document.addEventListener('click',function(e){
    const el = e.target
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [] 

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
}
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    console.log(tarefasJSON)
    localStorage.setItem('tarefas', tarefasJSON)

}

adicionaTarefasSalvas()