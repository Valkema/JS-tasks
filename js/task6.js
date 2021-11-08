//### Задача 6
//Дано число. Написать функцию решения счастливого билета (сумма первых 3х цифр равно сумме вторых 3х)

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

// функция возвращает массив, состоящий из цифр заданного числа
const getNumArray = (num) => num.toString().split('').map(Number);


// функция вычисляет сумму элементов массива
const getSum = (arr) => arr.reduce((sum, elem) => sum + elem);

// итоговая функция
const isLuckyTicket = (num) => {
    const validNum = isNumValid (num);
    const numArray = getNumArray(validNum);
    //если число цифр не равно 6, выводит сообщение 'Not a ticket number!'
    //если в числе 6 цифр, проверяет "счастливый" билет
    if(numArray.length === 6) {
        //массив из цифр числа делится на 2 массива - первую и вторую половины
        const fisrtPart = numArray.slice(0, 3);
        const secondPart = numArray.slice(3);
        //считается сумма цифр в каждой половине "билета"
        const fisrtPartSum = getSum(fisrtPart);
        const secondPartSum = getSum(secondPart);

        //если сумма первых 3х чисел равна сумме вторых 3х чисел - выводится сообщение 'Lucky ticket!'
        //если равенство не выполняется выводится сообщение 'Not a lucky ticket!(('
        return (
            fisrtPartSum === secondPartSum ? console.log('Lucky ticket!') : console.log('Not a lucky ticket!((')
        );
    }else{
        console.log('Not a ticket number!')
    }
};