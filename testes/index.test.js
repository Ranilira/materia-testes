const {add, subtrair, mult, divide} = require('../calculadora')

describe("Iremos testar os calculos do nosso sitema", () => {
    it("Should be return the value of the sum", () => {
        expect(add(5,5)).toBe(10)
        expect(subtrair(7,5)).toBe(2)
        expect(mult(5,5)).toBe(25)
    })
})