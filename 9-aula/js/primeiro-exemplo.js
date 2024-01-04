//Manipular o h1
let titulo = document.querySelector('h1')
titulo.textContent = 'Manipular com JS'

//Manipular imagem com JS
let imagem = document.querySelector('#foto')

//use o comando .setAttibute()
imagem.setAttribute('src', "img/coimbra.jpg")
imagem.setAttribute('width', '250px')

/*Manipular CSS*/ 
//usar a propriedade .style.
document.querySelector('h1').style.color = '#D92211'
//tambem posso usar dessa maneira
titulo.style.color = '#D92211'
titulo.style.backgroundColor = '#7ED994'
titulo.style.padding = '0.625rem'
titulo.style.borderRadius = '8px'

//Manipular classes usando o .setAttibute
let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'azul')

//remove classe usando o .remove
//box[0].setAttribute.remove(class)

//Manipular a Tela
let mudarCorTela = document.querySelector('main')

let btnverde = document.querySelector('#btnverde')
let btnvermelho = document.querySelector('#btnvermelho')

btnverde.addEventListener('click', modoLigth)
btnvermelho.addEventListener('click', modoDark)

//criar funcoes para mudar a tela

function modoLigth() {
    console.log('Mudar a cor para ligth')
    mudarCorTela.classList.add('light')
    mudarCorTela.classList.remove('dark')
}
function modoDark() {
    console.log('Mudar a cor para dark')
    mudarCorTela.classList.add('dark')
    mudarCorTela.classList.remove('light')
}

//sair do node usar ctrl + c duas vezes