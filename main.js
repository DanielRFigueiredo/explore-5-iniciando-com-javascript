alert('Hello World')

const numberSomaOne = 10, numberSomaTwo = 20
const soma = numberSomaOne + numberSomaTwo
console.log('2-> ' + soma)

const isNumber = '10'
if (typeof isNumber === 'number') {
  console.log('3-> ' + 'É um número')
} else {
  console.log('3-> ' + 'Não é um número')
}

const isString = 'null'
if (typeof isString === 'string') {
  console.log('4-> ' + 'É um string')
} else {
  console.log('4-> ' + 'Não é um string')
}

const isBoolean = true
if (typeof isBoolean === 'boolean') {
  console.log('5-> ' + 'É um boolean')
} else {
  console.log('5-> ' + 'Não é um boolean')
}

const numberSubOne = 10, numberSubTwo = 20
const sub = numberSubOne + numberSubTwo
console.log('6-> ' + sub)

const numberMultOne = 10, numberMultTwo = 20
const mult = numberMultOne + numberMultTwo
console.log('7-> ' + mult)

const numberDivOne = 10, numberDivTwo = 20
const div = numberDivOne + numberDivTwo
console.log('8-> ' + div)

const isEven = 8
console.log((isEven % 2) === 0 ? 'É um número par' : 'Não é um número par')

const isOdd = 9
console.log((isOdd % 2) === 1 ? 'É um número ímpar' : 'Não é um número ímpar')
