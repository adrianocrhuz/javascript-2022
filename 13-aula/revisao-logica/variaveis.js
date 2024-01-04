//var, let, const

// var -> ES5 - cross-browser
// let e const -> ES2015

let teste = "minha string"
//reatribuir outro  valor para uma variavel
teste = '10'
//imprimir
console.log(teste)

//const não pode ser redeclarado na variavel
const teste2 = 20
//imprimir
console.log(teste2)

//posso criar uma variavel e depois posso passar um valor pra ela
let teste3
teste3 = 38
//imprimir
console.log(teste3)

/*
//no const nao é possivel deixar de declarar um valor a variavel gera erro
const teste4
*/

const teste4 = 'Eu sou imutavel'
console.log(teste4)