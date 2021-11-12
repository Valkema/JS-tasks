// ### Задача 14
// Найдите все года от 1 до 2020, сумма цифр которых равна 13.


const findYears = () => {
  const years = [];
  //для всех годов от 1 до 2020 выполняется цикл
  for (let i = 1; i <= 2020; i++) {
    //число i преобразуется в строку, разбивается на массив цифр и вычисляется сумма всех цифр
    const yearDigitSum = i.toString()
                          .split('')
                          .map(Number)
                          .reduce((sum, el) => sum + el);

    //если сумма цифр равна 13, текущий год добавляется в массив years
    if (yearDigitSum === 13) years.push(i);
  }

  return years;
}

// выполняется функция findYears, которая возвращает массив с искомыми годами
const findedYears = findYears();