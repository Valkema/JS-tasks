import {toSortStr, checkAnagram} from '../js/task4.js';


describe('Сhecking two strings for anagram', () => {

    test('sort string in lowercase', () => {
  
      expect(toSortStr('  ')).toBe('');

      expect(toSortStr('Hello   !')).toBe('ehllo');

      expect(toSortStr('123')).toBe('123');
    });
  
    test('comparing sorted strings', () => {

      expect(checkAnagram('The eyes', 'They   see!!')).toBeTruthy();

      expect(checkAnagram('A gentleman', 'Elegant man')).toBeTruthy();

      expect(checkAnagram('123', '123')).toBeTruthy();

      expect(checkAnagram('123', 'asd11')).toBeFalsy();

    });
  
});
  
  