const express = require('express')
const {add, subtrair, mult, divide} = require("./calculadora")
const app = express()
const port = 3000

app.get("/rota", (require,resposta) => {
    
    const respostaDaSoma = add(2,3)
    const respostaDaSub = subtrair(2,3)
    respostaDaSoma.send("A resposta do calculo é: " + respostaDaSoma)
    respostaDaSoma.send("A resposta do calculo é: " + respostaDaSub)
})

app.listen(port, () => {
    console.log('Opa, nosos servidor levantou ' + port)
    console.log(`localhost:${porta}${rota}`);
})


