// ### Задача 15
// Дана строка вида `"var_text_hello"`. Сделайте из него текст `"varTextHello"`

const TEST_STR = 'var_text_hello';

const toCamelCace = (str) => {
  // из строки создается массив из слов, раздленных символом "_"
  // для каждого слова, кроме 1го, первая буква переводится в верхний регистр 
  // и объединяется с остатком этого слова
  // массив полученных слов объединяется в строку
  const newStr = str.split('_')
                    .map((el, index) => index == 0 ? el : el.charAt(0).toUpperCase() + el.slice(1))
                    .join('');

  return newStr;
}

//создается новая строка "varTextHello"
const newStr = toCamelCace(TEST_STR);