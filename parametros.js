// Parametros

//       recebe parametros na função Soma
function soma(num1, num2){
    return num1 + num2
}

//   recebe o primeiro parametro num1 o numero 2 e no num2 o numero 2
console.log(soma(2, 2))
console.log(soma(200, 200))

// parametros vs. argumentos

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade("Paula", 25))

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2
}

console.log(multiplica(soma(10, 5)))