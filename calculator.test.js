const {add, subtract, multiply, divide } = require("./calculator");


describe("calculator testing block",() =>{
    test('sum of 2+3 is 5',() =>{
        expect(add(2,3)).toBe(5);
    })
    test('subtract of 5-2 is 3',() =>{
        expect(subtract(5,2)).toBe(3);
    })
    test('multiply of 2*3 is 6',() =>{
        expect(multiply(2,3)).toBe(6);
    })
    test('divide of 6/2 is 3',() =>{
        expect(divide(6,2)).toBe(3);
    })
})