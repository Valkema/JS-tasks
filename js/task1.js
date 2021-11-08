//Задача 1
//Дано число. Написать функцию, которая считает факториал числа.


// функция isNumValid проверяет, является ли полученное число целым неотрицательным
// если проверка не выполняется - генерирует ошибку с сообщением о некорректных данных
const isNumValid = (num) => {
    try {
        if (!Number.isInteger(num) || (num < 0))
        throw new RangeError("Incorrect data");
        return num;
    }catch(e){
        return e;
    };
};
// функция calcFactorial непосредственно вычисляет значение факториала
const calcFactorial = (num) => {
    let result = 1;
    if(!num) {
          return  result;
    } else {
        for (i = 1; i <= num; i++)
        result = result * i;
        return  result;
    }
};

// numFactorial итоговая функция, 
// сначала выполняется проверка числа, если данные корректные - вычисляется факториал.
const numFactorial = (num) => {
    const validNum = isNumValid(num);
    calcFactorial(validNum);
};

