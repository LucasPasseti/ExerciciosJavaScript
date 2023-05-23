// 704.484.450-52   070.987.720-03

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');;
cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.reduce((ac,valor) => ac + Number(valor), 0));
