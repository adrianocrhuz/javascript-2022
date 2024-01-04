//capturar a tag
let titulo = document.querySelector('h1')
//mudar a cor e o nome da tage
titulo.textContent = 'Funções no JS'
titulo.style.color = '#8C4C46'
titulo.style.backgroundColor = '#C8D9C7'
titulo.style.padding = '0.625rem'
titulo.style.borderRadius = '8px'
titulo.style.textAlign = 'center'

//capturar a class

let box = document.querySelectorAll('box')

/*funcoes sem parametros e sem retorno (procedure)*/

function semRetonoSemParametro() {
    console.log('Função sem parametro e retorno')
    document.write('Função sem retorno <br>')
}
//chamar a funcao
semRetonoSemParametro()

/*funco sem parametro e com retorno (function)*/

function comRetorno() {
    return 'Função com retorno<br>'
}
//chamar a funcao
document.write(comRetorno())
console.log(comRetorno())

//criar variaveis
let x = 2
let y = 1
let mensagem = 'O Senhor é meu Pastor e nada me faltará'

/*Funcoes com parametros e sem retorno (procedure)*/
function somar(a, b) {
    document.write((a + b) + "<br>")
}
//chamar a funcao
somar(x,y)
somar(38,47)

/*Funcoes com parametros e com retorno(function)*/
function adicao(c,d) {
    return c + d
}
//chamar a funcao
document.write(`<p>${adicao(x,y)}</p>`)
document.write(`<p>${adicao(1,37)} </p>`)

/*funcao anonima = não tem nome
pode ou nao ter parametros
pode ou nao ter retorno*/
titulo.addEventListener('click', function () {
    console.log('Clique no titulo do h1')
})
/*Arrow Functions (=>) ES6 2015 em diante*/
const arrowFunction = () => document.write('<p>Usa as chaves {} como elemento opcional, se você digitar uma ação</p>')
//chamar a funcao
arrowFunction()

//nao precisa usar a palavra function
//não precisa usar a palavra return
//não se usa nome na funcao
//não precisa colocar { } se for só uma instrução

const arrowFunction2 = () => 'Não vai ser imprimido na tela'

//chamar a funcao
document.write(arrowFunction2())