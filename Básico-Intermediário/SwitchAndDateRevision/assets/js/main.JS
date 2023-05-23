// const h1 = document.querySelector('.container h1');
// const date = new Date;

// function getDayWeek(diaSemana) {    
//     let diaSemanaTxt;

//     switch (diaSemana){
    
//         case 0 : 
//             diaSemanaTxt = 'Domingo';
//             return diaSemanaTxt;
//         case 1: 
//             diaSemanaTxt='Segunda-Feira';
//             return diaSemanaTxt;  
//         case 2:
//             diaSemanaTxt = 'Terça-Feira';
//             return diaSemanaTxt;
//         case 3:
//             diaSemanaTxt = 'Quarta-Feira';
//             return diaSemanaTxt;    
//         case 4: 
//             diaSemanaTxt = 'Quinta-Feira';
//             return diaSemanaTxt;   
//         case 5:
//             diaSemanaTxt = 'Sexta-Feira';
//             return diaSemanaTxt;
//         case 6:
//             diaSemanaTxt = 'Sábado';
//             return diaSemanaTxt;
//     default:
//         diaSemanaTxt = '';
//         return diaSemanaTxt;
//     }
// }

// function getNameMonth(NumberMonth) {    
//     let NameMonth;

//     switch (NumberMonth){

//         case 0: NameMonth = "Janeiro";
//                 return NameMonth;
//         case 1: NameMonth = "fevereiro";
//                 return NameMonth;      
//         case 2: NameMonth = "março";
//                 return NameMonth;  
//         case 3: NameMonth = "abril";
//                 return NameMonth;
//         case 4: NameMonth = 'maio';
//                 return NameMonth;
//         case 5: NameMonth = "Junho";
//                 return NameMonth;
//         case 6: NameMonth = "Julho";
//                 return NameMonth;      
//         case 7: NameMonth = "agosto";
//                 return NameMonth; 
//         case 8: NameMonth = "setembro";
//                 return NameMonth;
//         case 9: NameMonth = 'outubro';
//                 return NameMonth;
//         case 10: NameMonth = 'novembro';
//                 return NameMonth;
//         case 11: NameMonth = 'dezembro'
//                 return NameMonth;          
//     }
// }

// function zeroAEsquerda(num){
//     return num>=10? num: `0${num}`
// }

// function criaDate(date){
//     const diasemana = date.getDay()
//     const diames = date.getMonth()
    
//     const nomedia = getDayWeek(diasemana)
//     const nomemes = getNameMonth(diames)

//     return (
//         `${nomedia}, ${date.getDate()} de ${nomemes} de
//         de ${date.getFullYear()} 
//         ${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())} `
//     )
// }

// h1.innerHTML = criaDate(date);

const h1 = document.querySelector('.container h1');
const date = new Date;

h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "medium" }).format(new Date())