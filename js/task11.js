// ### Задача 11
// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

//функция принимает исходный массив и возвращает перевернутый
const getReverseArr = (arr) => {
  //оздается пустой массив
  const reverseArr = [];

  arr.forEach(el => reverseArr.unshift(el));

  return reverseArr;
}

export default getReverseArr;