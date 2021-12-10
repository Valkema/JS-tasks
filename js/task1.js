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

  if(num === 0) {

    return  result;
  } else {
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }

    return  result;
  }
}

// showFactorial итоговая функция, 
// сначала выполняется проверка числа, если данные корректные - выводится в консоль факториал,
// если нет - выводится в консоль сообщение 'Incorrect data'
const showFactorial = (num) => {
  const validNum = isNumValid(num);
  const result = (validNum ? calcFactorial(num) : new Error('Incorrect data').message);

  return console.log(result);
}


export {calcFactorial, showFactorial, isNumValid};
