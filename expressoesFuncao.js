// Expressões Funções

function minhaFuncao(param) {
    // bloco de codigo

}

minhaFuncao("param")

// expressao de função

const soma = function(num1, num2) { return num1 + num2} // não é uma boa pratica
console.log(soma(1, 1)) // a variavel com os valores de operação não pode ficar antes da const

// diferença principal

console.los(apresentar()) // chamar a função pode ficar antes da declaração de função, pois a declaração de função já esta com os parametros 

function apresentar() {
    return "Olá"
}
