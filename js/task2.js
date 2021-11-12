// ### Задача 2
// Дано число. Написать функцию, которая выводит консоль числа фибоначчи до заданного.

// функция isNumValid проверяет, является ли полученное число целым положительным
const isNumValid = (num) => {
  const result = Number.isInteger(num) && (num > 0);

  return result;
}

// функция calcFibo выводит в консоль все числа Фибоначчи, меньше заданого числа

const calcFibo = (num) => {
  if (num === 1) {
    // если число равно 1, выводится в консоль 0, как единственное меньшее число Чибоначчи
    console.log(0);
  } else {
    // числам num-2 и num-1 присваиваются значения 0 и 1 соответственно
    let prePrevNum = 0;
    let prevNum = 1;
    //сначала выводится в консоль первая пара чисел 0 и 1
    console.log(prePrevNum);
    console.log(prevNum);

    //затем выводится сумма двух предыдущих чисел, пока результат суммы будет меньше заданного числа
    for (let fiboNum = 1; fiboNum  < num; fiboNum = prePrevNum + prevNum) {
        console.log (fiboNum);
        prePrevNum = prevNum;
        prevNum = fiboNum;
    }
  }
}

// showFiboNumbers итоговая функция, 
// сначала выполняется проверка типа данных, если данные корректные - в консоль выводятся числа фибоначчи до заданного, 
// если нет - в консоль выводится сообщение 'Incorrect data'
const showFiboNumbers = (num) => {
    const validNum = isNumValid(num);
    
    validNum ? calcFibo(num) : console.log('Incorrect data');
}
