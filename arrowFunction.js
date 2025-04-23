// Arrow Function 
// Função Flecha =>

// antes
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

// depois com ArrowFunction
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2

// ArrowFunction com + 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10 ) {
        return "Somente numeros de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// Arrow =! Operador igual maior que
//   =>    =!       >=

// Hoisting: Arrow Function se comporta da mesma forma