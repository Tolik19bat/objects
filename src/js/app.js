// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
//=======================================================//
export default function orderByProps(obj, arrayArgs) {
  const arrayElements = Object.keys(obj);// список ключей объекта
  let elements = [];                    // новый массив
  arrayElements.forEach((key) => {      // при переборе списока
    if (arrayArgs.includes(key)) {       // если совпадение с аргументом
      return                            // завершаем функцию
    } else {                            // если совпадений нет
      elements.push(key)              // добавляем в массив
    }
  })
  elements.sort();                       // сортируем массив
  const result = [...arrayArgs, ...elements]; // соединяем в массив
  const out = result.map((key) => ({ key, value: obj[key] })); // собираем новый массив объектов
  return out;
}