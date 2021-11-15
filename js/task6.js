//### Задача 6
//Дано число. Написать функцию решения счастливого билета (сумма первых 3х цифр равно сумме вторых 3х)


// функция isNumValid проверяет, является ли полученное число целым неотрицательным
const isNumValid = (data) => {
  const num = Number(data);
  const result = Number.isInteger(num) && (num >= 0);

  return result;
}

// функция chekData проверяет тип полученных данных:
// если получено число - оно приводится к строке
const chekData = (data) => {
  if (typeof(data) === 'number') {

    return data.toString();
  } else {

    return data;
  }
}

// функция возвращает массив, состоящий из цифр заданного числа
const getNumArray = (num) => num.split('').map(Number);


// функция вычисляет сумму элементов массива
const getSum = (arr) => arr.reduce((sum, elem) => sum + elem);

const checkLucky = (num, isValid) => {
  const numArray = getNumArray(num);

    
    //если в числе 6 цифр, проверяет "счастливый" билет
  if (numArray.length === 6 && isValid) {
    //массив из цифр числа делится на 2 массива - первую и вторую половины
    const fisrtPart = numArray.slice(0, 3);
    const secondPart = numArray.slice(3);
    //считается сумма цифр в каждой половине "билета"
    const fisrtPartSum = getSum(fisrtPart);
    const secondPartSum = getSum(secondPart);

    //если сумма первых 3х чисел равна сумме вторых 3х чисел - выводится сообщение 'Lucky ticket!'
    //если равенство не выполняется выводится сообщение 'Not a lucky ticket!(('
    fisrtPartSum === secondPartSum ? 
    console.log('Lucky ticket!') : 
    console.log('Not a lucky ticket!((');
  } else {
    //если число цифр не равно 6, выводит сообщение 'Not a ticket number!'
    console.log('Not a ticket number!'); 
  }
}

// isLuckyTicket итоговая функция
// проверяется тип данных полученного номера "билета"
// выполняется проверка числа, вызывается функция checkLucky с результатом проверки
const isLuckyTicket = (data) => {
  const number = chekData(data);
  const isValid = isNumValid (number);

  checkLucky(number, isValid);
}

