import Magician from '../Magician.js';

let magician;

beforeEach(() => {
  magician = new Magician('Gandalf');
});

test('Magician: создание объекта с именем и типом', () => {
  expect({ name: magician.name, type: magician.type, stoned: magician._stoned }).toEqual({ name: 'Gandalf', type: 'Magician', stoned: true });
});

test('Magician: атака с учётом расстояния и без дурмана', () => {
  magician._stoned = false; // Отключаем "дурман"
  magician.distance = 2;
  const expected = 100 * 0.9; // 100 * 0.9
  expect(magician.attack).toBeCloseTo(expected, 2);
});

test('Magician: атака с учётом расстояния и с дурманом', () => {
  magician.distance = 2;
  const expected = 100 * 0.9 - Math.log2(2) * 5; // 100 * 0.9 - log2(2) * 5
  expect(magician.attack).toBeCloseTo(expected, 2);
});
