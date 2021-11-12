//Задача 1
//Дано число. Написать функцию, которая считает факториал числа.


// функция isNumValid проверяет, является ли полученное число целым неотрицательным
const isNumValid = (num) => {
  const result = Number.isInteger(num) && (num >= 0);

  return result;
}


// функция calcFactorial непосредственно вычисляет значение факториала
const calcFactorial = (num) => {
  let result = 1;

  if(!num) {

    return  result;
  } else {
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }

    return  result;
  }
}

// numFactorial итоговая функция, 
// сначала выполняется проверка числа, если данные корректные - вычисляется факториал,
// если нет - выводится в консоль сообщение 'Incorrect data'
const numFactorial = (num) => {
  const validNum = isNumValid(num);
  const result = (validNum ? calcFactorial(num) : console.log('Incorrect data'));

  return result;
}
