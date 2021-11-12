// ### Задача 8
// Дан массив чисел. Определить сколько раз менялся знак в последовательности


// функция сравнивает предыдущий и текущий элементы в массиве
// если сравниваемые элементы разных знаков, то значение счетчика увеличивается на 1
const calcSignChanges = (arr) => {
  //начальное значение счетчика - 0
  let count = 0;

  for (let i=1; i < arr.length; i++) {
    if((arr[i-1] < 0) !== (arr[i] < 0)) count++;
  }

  return count;
}
