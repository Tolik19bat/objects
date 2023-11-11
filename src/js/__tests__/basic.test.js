import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});
//==============================================//
import orderByProps from "../app";

test("check sort func", () => { // проверка функции сортировки
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  const result = orderByProps(obj, ['name', 'level']);// результат функции

  expect(result).toEqual([ // сравниваем с ожиданием
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});