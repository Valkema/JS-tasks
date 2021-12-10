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
  const sumDigits = requiredDigits.reduce((sum, elem) => {
    return sum + elem;
  }, 0);

  return sumDigits;
}

const lastNumsSum = (m, n) => {
  // проверка "белого списка" данных, 
  //если полученные данные соответствуют условиям - вызывается функция calcNumsSum
  //если данные некорректные - генерируется ошибка 
  if (typeof(m) === 'number' && 
      typeof(n) === 'number' && 
      n >= 0 && 
      m.toString().length >= n) {

    return calcNumsSum(m, n);
  } else {
    throw new RangeError("Incorrect data");
  }

};

// функция run выводит в консоль результат  lastNumsSum функции для 2х заданных чисел
// при некорректных данных - выводит в консоль сообщение об ошибке
const run = (m, n) => {
  try {
    console.log(lastNumsSum(m, n));
  }
  catch (err) {
    console.log(err.message);
  }
};


