import getReverseArr from '../js/task11.js';

describe('The function reverses the array', () => {
  const arr1 = [1, 2, 3, 10, 0, 0, -1.5];
  const [...arr1Rev] = arr1;

  const arr2 = [1, 'some string', 3, 10, NaN, 0, null];
  const [...arr2Rev] = arr2;

  test('get reversed array', () => {
  
      expect(new Set(getReverseArr(arr1))).toEqual(new Set(arr1Rev.reverse()));

      expect(new Set(getReverseArr(arr2))).toEqual(new Set(arr2Rev.reverse()));

      expect(getReverseArr([45])).toEqual([45]);

      expect(getReverseArr(NaN)).toEqual([]);

      expect(getReverseArr(45)).toEqual([]);
   
  });
  
});
  