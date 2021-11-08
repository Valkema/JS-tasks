// ### Задача 2
// Дано число. Написать функцию, которая выводит консоль числа фибоначчи до заданного.

// функция isNumValid проверяет, является ли полученное число целым положительным
// если проверка не выполняется - генерирует ошибку с сообщением о некорректных данных
const isNumValid = (num) => {
    try {
        if (!Number.isInteger(num) || (num <= 0))
        throw new RangeError("Incorrect data");
        return num;
    }catch(e){
        return e;
    };
};

// функция calcFibo для заданого положительного целого числа выводит в консоль все числа Фибоначчи, 
// меньше заданого числа
const calcFibo = (num) => {
    if (num === 1) {
       console.log(0);
    } else {
    let prePrevNum = 0;
    let prevNum = 1;
    for (fiboNum = 1; fiboNum  < num ; fiboNum  = prePrevNum + prevNum) {
        console.log (fiboNum);
        prePrevNum = prevNum;
        prevNum++;
    }
    }
};

// showFiboNumbers итоговая функция, 
// сначала выполняется проверка типа данных, если данные корректные - 
//  выводит в консоль числа фибоначчи до заданного.
const showFiboNumbers = (num) => {
    const validNum = isNumValid(num);
    calcFibo(validNum);
};

