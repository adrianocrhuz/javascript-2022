//strings, number (int, floats), boolean

let minhaVar = 'minha string'
let minhaVar2 = 'Minha "String" com as duplas'
var minhaVar3 = 'minha templaye literal'

let idade = 40
//let mgs = 'Eu possuo' + idade + 'anos'
let msg = `Eu possuo ${idade} anos`


console.log(msg)
console.log('Hello ' + 'Word')
//verificar o tipo de uma variável usar o typeof
console.log(typeof msg, typeof idade, typeof minhaVar)

const n1 = 10
const n2 = 1.1
console.log(`o tipo de n1 é ${typeof n1} e o seu valor é ${n1}`)
console.log(`o tipo de n2 é ${typeof n2} e o seu valor é ${n2}`)