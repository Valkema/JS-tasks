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

});

