// ### Задача 4
// Даны две строки. Написать функцию, которая проверяет, 
// являются ли строки анаграммами (регистр букв не имеет значения).


//функция toSortStr убирает в строке лишние символы, 
//приводит все буквы к нижнему регистру,
//возвращает отсортированную строку
const toSortStr = (str) => {
  const sortedStr = str.replace(/[-_!@#$%^&*(),.?":{}|<>\s]+/gi, '')
                        .toLowerCase()
                        .split('')
                        .sort()
                        .join('');

  return sortedStr;
}


//функция checkAnagram вызывает метод сортировки к обоим строкам, переданным в аргумент
//затем, сравниваются две отсортированные строки и возвращается соответствующее булевое значение
const checkAnagram = (str1, str2) => {
    const sortStr1 = toSortStr(str1);
    const sortStr2 = toSortStr(str2);

    return (sortStr1 === sortStr2);
}

export {toSortStr, checkAnagram};