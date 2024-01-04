//Mudar cor da Tela
let mudaCorTela = document.querySelector('main')

let btnLigth = document.querySelector("#btnlight")
let btnDark = document.querySelector("#btndark")

btnLigth.addEventListener('click', modoLigth)
btnDark.addEventListener('click', modoDark)

function modoDark() {
    console.log('Modo escuro')
    mudaCorTela.classList.add('escuro')
    mudaCorTela.classList.remove('claro')
}
function modoLigth() {
    console.log('Modo ligth')
    mudaCorTela.classList.add('claro')
    mudaCorTela.classList.remove('escuro')
}