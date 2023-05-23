function getDayWeekText(diaSemana) {    
let diaSemanaTxt;
    
    
switch (diaSemana){

    case 0 : 
        diaSemanaTxt = 'Domingo';
        return diaSemanaTxt;
    case 1: 
        diaSemanaTxt='Segunda';
        return diaSemanaTxt;  
    case 2:
        diaSemanaTxt = 'Terça';
        return diaSemanaTxt;
    case 3:
        diaSemanaTxt = 'Quarta';
        return diaSemanaTxt;    
    case 4: 
        diaSemanaTxt = 'Quinta';
        return diaSemanaTxt;   
    case 5:
        diaSemanaTxt = 'Sexta';
        return diaSemanaTxt;
    case 6:
        diaSemanaTxt = 'Sábado';
        return diaSemanaTxt;
default:
    diaSemanaTxt = '';
    return diaSemanaTxt;
}


}

const data = new Date();
const diaSemana = data.getDay();


console.log(getDayWeekText(diaSemana))