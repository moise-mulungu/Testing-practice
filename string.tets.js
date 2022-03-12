const { stringLength, reverseString, capitalize } = require('./stringLength.js');

describe('stringFunctions',() => {
test("The length of Hello is 5",() =>{
     expect(stringLength("Hello")).toBe(5);
})

 test("The string is too short",()=>{
     expect(() => {stringLength('');}).toThrowError(new Error('the string does not meet the reqs'));
 })

 test("The string is too long",()=>{
    expect(() => {stringLength('this text is too long');}).toThrowError(new Error('the string does not meet the reqs'));
})
test('"hello" reversed should be "olleh"', () => {
    expect(reverseString('hello')).toMatch('olleh');
  });
test("capitalize the first letter of string:hello will change to Hello",() => {
  expect(capitalize("hello")).toMatch("Hello");
})
})