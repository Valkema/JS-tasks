// ### Задача 16
// Дано число. Сложите его цифры. Если сумма получилась больше 9-ти, опять сложите его цифры. 
// И так, пока сумма не станет однозначным числом (9 и менее).

const TEST_NUM = -11.1111980171;

//функция calcDigitsSum преобразует число в строку, затем в массив состоящий из всех его цифр,
//после - вычисляет сумму всех цифр этого числа
const calcDigitsSum = (num) => num.toString()
                                  .replace(/[-.]/gi, '')
                                  .split('')
                                  .map(Number)
                                  .reduce((sum, el) => sum+el);

// функция calcTotalSum вычисляет сумму цифр числа до однозначного значения
const calcTotalSum = (num) => {
    //вычисляется сумма всех цифр числа
    let summa = calcDigitsSum(num);
    //пока результат будет превышать число 9, 
    //выполняется вычисление суммы всех цифр в полученном результате
    while(summa > 9){
        summa = calcDigitsSum(summa);
    }

    return summa;
}

//вычисляется сумма цифр тестового числа TEST_NUM 
const testSumma = calcTotalSum(TEST_NUM);