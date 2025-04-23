// funções

let x = "";
console.log(x);
x = "Oi"

// 1) declara a fução
function imprimeTexto(texto) {
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto("Oi")



// TRÊS TIPO DE FUNÇÕES:

// funçoes com parametros
// funções com Expressão
// funções com Arrow

// sem parametros e return
function soma() {
    return 2 + 2;
}

console.log(soma());

// função dentro de função

imprimeTexto(soma())