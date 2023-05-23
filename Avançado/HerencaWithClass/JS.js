class DispositivoEletronico{
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já desligado`);
            return;
        }
        this.ligado = false;  
    }

}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
};
const s1 = new Smartphone('iphone', 'Preto', '11plus');

class Tablet extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.temWifi = false;
        this.cor = cor;
        this.modelo = modelo;
    }

    ligaWifi(){
        if(!this.temWifi){
            this.temWifi = true
            return
        }

        return
    }

    desligaWifi(){
        if(this.temWifi){
            this.temWifi = false
            return
        }

        return
    }
}

const t1 = new Tablet('Sansumg', 'Branco', 'G12');

t1.ligaWifi();
t1.desligaWifi();
console.log(t1);