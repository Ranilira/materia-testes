const add = (valor1, valor2) => {
    return valor1 + valor2;
}

const subtrair = (valor1, valor2) => {
    return valor1 - valor2;
}

const mult = (valor1, valor2) => {
    return valor1 * valor2;
}

const divide = (valor1, valor2) => {
    if(valor2 ==0){
        throw new Error("NAO PODE DIVDIR POR ZERO")
    }
    return valor1 / valor2;
}

module.exports = {
    add,
    subtrair,
    mult,
    divide
}