function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente ${this.saldo}`);
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + `Saldo:${this.saldo.toFixed(2)}` );
};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > this.saldo + this.limite){
        console.log(`Saldo insuficiente R$${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}
const contaCorrente = new ContaCorrente(11, 22, 0, 100);
// contaCorrente.depositar(10);
// contaCorrente.sacar(130); 


function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaPoupanca.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente R$${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

const contaPoupanca = new ContaPoupanca(22, 33, 10);
contaPoupanca.depositar(10);
contaPoupanca.sacar(100);

