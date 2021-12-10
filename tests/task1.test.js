//const {calcFactorial, showFactorial, isNumValid} = require('../js/task1');
import {calcFactorial, showFactorial, isNumValid} from '../js/task1.js';

describe('Factorial function', () => {

  test('checking the validity of a number', () => {

     expect(isNumValid(5)).toBeTruthy();

     expect(isNumValid(0)).toBeTruthy();

     expect(isNumValid(11)).toBeTruthy();

     expect(isNumValid(2.7)).toBeFalsy();

     expect(isNumValid(-5)).toBeFalsy();

     expect(isNumValid('12121')).toBeFalsy();

     expect(isNumValid(null)).toBeFalsy();

     expect(isNumValid(NaN)).toBeFalsy();
    
     expect(isNumValid(undefined)).toBeFalsy();
  });

  test('calculate the factorial of a number', () => {

     expect(calcFactorial(0)).toBe(1);

     expect(calcFactorial(3)).toBe(6);

     expect(calcFactorial(7)).toBe(5040);

     expect(calcFactorial(NaN)).toBe(1);

     expect(calcFactorial(null)).toBe(1);
  });


  test('show the factorial of a number', () => {

     expect(showFactorial(2)).toBe(console.log(2));

     expect(showFactorial(5)).toBe(console.log(120));

     expect(showFactorial(0)).toBe(console.log(1));

     expect(showFactorial(-5)).toBe(console.log('Incorrect data'));

     expect(showFactorial(NaN)).toBe(console.log('Incorrect data'));

     expect(showFactorial('11113')).toBe(console.log('Incorrect data'));

     expect(showFactorial(1.5)).toBe(console.log('Incorrect data'));
  });

});

