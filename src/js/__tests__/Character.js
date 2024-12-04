import Character from '../Character.js';

let character; // Глобальная переменная для тестов

beforeEach(() => {
  character = new Character('Hero', 'Bowman'); 
});

test('Character: создание персонажа с корректными данными', () => {
  expect({ name: character.name, type: character.type }).toEqual({ name: 'Hero', type: 'Bowman' });
});

// Тесты на проверку имени
test('Character: выбрасывает ошибку, если имя не строка', () => {
  expect(() => new Character(123, 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test('Character: выбрасывает ошибку, если имя слишком короткое', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test('Character: выбрасывает ошибку, если имя слишком длинное', () => {
  expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

// Тесты на проверку типа персонажа
test('Character: выбрасывает ошибку, если тип персонажа некорректный', () => {
  expect(() => new Character('Hero', 'InvalidType')).toThrow('Тип персонажа должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('Character: успешно создаётся персонаж с допустимым типом', () => {
  const anotherCharacter = new Character('Hero', 'Zombie');
  expect(anotherCharacter.type).toBe('Zombie');
});

// Проверка set distance
test('Character: выбрасывает ошибку, если расстояние меньше 1', () => {
  expect(() => { character.distance = 0; }).toThrow('Расстояние должно быть >= 1');
});

test('Character: корректно устанавливает расстояние', () => {
  character.distance = 3;
  expect(character.distance).toBe(3);
});

// Проверка get distance
test('Character: корректно возвращает значение расстояния', () => {
  character.distance = 5;
  expect(character.distance).toBe(5);
});

// Проверка set stoned
test('Character: корректно устанавливает состояние дурмана', () => {
  character = new Character('Hero', 'Magician'); // Для этого теста нужен другой тип персонажа
  character.stoned = true;
  expect(character.stoned).toBe(true);
});

// Проверка set attack
test('Character: выбрасывает ошибку, если атака меньше 0', () => {
  expect(() => { character.attack = -10; }).toThrow('Атака должна быть >= 0');
});

test('Character: корректно устанавливает значение атаки', () => {
  character.attack = 120;
  expect(character.attack).toBe(120);
});
