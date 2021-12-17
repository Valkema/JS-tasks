import getReverseArr from '../js/task11.js';

describe('The function reverses the array', () => {
  const arr1 = [1, 2, 3, 10, 0, 0, -1.5];
  const arr1Rev = [...arr1].reverse();

  const arr2 = [1, 'some string', 3, 10, NaN, 0, null];
  const arr2Rev = [...arr2].reverse();


  test('get reversed array', () => {
      expect(getReverseArr(arr1)).toEqual(arr1Rev);

      expect(getReverseArr(arr2)).toEqual(arr2Rev);

      expect(getReverseArr([])).toEqual([]);

  });

});
