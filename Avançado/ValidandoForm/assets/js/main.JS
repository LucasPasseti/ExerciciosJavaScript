class ValidaFormulario{
    constructor() {
        this.formulario = document.querySelector('.formulario');  // SELECIONANDO FORMULARIO
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {   // ADICIONA SUBMIT AO BOTAO ENVIAR
            this.handleSubmit(e);
        })
    }

    handleSubmit(e){
        e.preventDefault();  // PREVINI QUE O SUBMIT NAO ESTEJA SEM NADA 
        const camposValidos = this.camposSaoValidos();  // CHAMA FUNCAO PARA CHECAR OS CAMPOS 
        const senhasValidas = this.senhasValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulário Enviádo');
            this.formulario.submit();
        }
    }

    senhasValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais');
        }
        
        if(senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.')
        }
        return valid;
    }

    camposSaoValidos() {
        let valid = true;
    
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
          errorText.remove();
        }
    
        for(let campo of this.formulario.querySelectorAll('.validar')) { //CHECA TODOS OS CAMPOS COM A CLASSE validar 
          const label = campo.previousElementSibling.innerText;  //SIGNIFICA CAMPO ANTERIOR DELE, AQUI ESTOU PEGANDO O NOME DA >>>LABEL<<< 
     
          if(!campo.value) {
            this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
            valid = false;
          }
    
          if(campo.classList.contains('cpf')) {  //CAMPO DE CPF
            if(!this.validaCPF(campo)) valid = false;
          }
    
          if(campo.classList.contains('usuario')) {
            if(!this.validaUsuario(campo)) valid = false;
          }
    
        }
    
        return valid;
      }
    

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;


        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números')
            valid = false;
        }
        
        return true;
    }


    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
    
        if(!cpf.valida()) {
          this.criaErro(campo, 'CPF inválido.');
          return false;
        }
    
        return true;
      }

    criaErro(campo, msg){
        const div = document.createElement('div'); // ELEMENTO DIV CRIADO PARA DESCREVER O ERRO EM ( camposSaovalidos() )
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div); // FAZ CRIAR A DIV APOS O ELEMENTO 
    }

}


const valida = new ValidaFormulario();