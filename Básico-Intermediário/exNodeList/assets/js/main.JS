const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosbody = getComputedStyle(document.body)
const backgroundColorBody = estilosbody.backgroundColor


for (let i of ps){
    i.style.backgroundColor = backgroundColorBody
}
