// ### Задача 7
// Дано число. Вычислить сумму n последних цифр числа m

const m = 1231354;
const n = 15;


const lastNumbersSum = (number, requiredQty) => {
    //составляется массив из всех цифр числа m
    const allDigits = number.toString().replace(/[-.]/gi, '').split('').map(Number);
    //вычисляется количество всех цифр числа m
    const allDigitsQty = allDigits.length;

    try {
    //если число n не превышает количество цифр чила m, продолжаются вычисления
    //если условие не выполняется - - генерируется ошибка с сообщением о некорректных данных
        if(requiredQty <= allDigitsQty) {
    //составляется массив из n последних чисел
        const requiredDigits = allDigits.slice(allDigitsQty - requiredQty);
    //вычисляется сумма элементов полученного массива
        const sumDigits = requiredDigits.reduce((sum, elem) => sum + elem);
        return sumDigits;
        }else {
        throw new RangeError("Incorrect data");
    }}catch(e){ 
        return e;
}};

console.log( lastNumbersSum(m, n));