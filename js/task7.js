// ### Задача 7
// Дано число. Вычислить сумму n последних цифр числа m

const m = 23135401;
const n = 5;


// функция возвращает сумму n последних цифр числа m
const calcNumsSum = (number, requiredQty) => {
  //составляется массив из всех цифр числа m
  const allDigits = number.toString()
                          .replace(/[-.]/gi, '')
                          .split('')
                          .map(Number);
  //составляется массив из n последних чисел
  const requiredDigits = allDigits.slice(allDigits.length - requiredQty);
  //вычисляется сумма элементов полученного массива
  const sumDigits = requiredDigits.reduce((sum, elem) => sum + elem);

  return sumDigits;
}

const lastNumsSum = (m, n) => {
  // проверка "белого списка" данных, 
  //если полученные данные соответствуют условиям - вызывается функция calcNumsSum
  //если данные некорректные - генерируется и возвращается ошибка 
  try {
    if (typeof(m) === 'number' && 
        typeof(n) === 'number' && 
        n >= 0 && 
        m.toString().length >= n) {

      return calcNumsSum(m, n);
    } else {
      throw new RangeError("Incorrect data");
    }
  } catch (err) {

  return err;
  }
}

console.log(lastNumsSum(m, n));