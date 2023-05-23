// // const treshoras = 60*60*3*1000
// // const umDia = 60*60 * 24 *1000  
// const date = new Date(2019, 4, 17, 00,00,00, 000)


// console.log ('Dia', date.getDate())
// console.log ('Mes', date.getMonth())
// console.log ('Ano', date.getFullYear())
// console.log ('Hora', date.getHours())
// console.log ('min', date.getMinutes())
// console.log ('Segundo', date.getSeconds())
// console.log ('ms', date.getMilliseconds())
// console.log ('Dia semana', date.getDay())

// console.log(date.toString())

function formataData (data) {
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const hora = data.getHours()
    const min = data.getMinutes()
    const seg = data.getSeconds()

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formataData(data)

console.log(dataBrasil)