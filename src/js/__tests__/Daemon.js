import Daemon from '../Daemon.js';

let daemon;

beforeEach(() => {
  daemon = new Daemon('Inferno');
});

test('Daemon: создание объекта с именем и типом', () => {
  expect({ name: daemon.name, type: daemon.type, stoned: daemon._stoned }).toEqual({ name: 'Inferno', type: 'Daemon', stoned: true });
});

test('Daemon: атака с учётом расстояния и без дурмана', () => {
  daemon._stoned = false; // Отключаем эффект дурмана
  daemon.distance = 2;
  expect(daemon.attack).toBeCloseTo(90, 2); // 100 * 0.9
});

test('Daemon: атака с учётом расстояния и с дурманом', () => {
  daemon.distance = 3;
  const expected = 100 * 0.8 - Math.log2(3) * 5; // 100 * 0.8 - log2(3) * 5
  expect(daemon.attack).toBeCloseTo(expected, 2);
});
