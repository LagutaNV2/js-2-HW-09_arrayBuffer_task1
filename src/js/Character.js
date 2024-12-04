export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
    }
    if (!types.includes(type)) {
      throw new Error(`Тип персонажа должен быть одним из: ${types.join(', ')}`);
    }

    this.name = name;
    this.type = type;
    this._baseAttack = 100; // Базовое значение атаки
    this._distance = 1; // Расстояние по умолчанию
    this._stoned = false; // Эффект дурмана отключён по умолчанию
  }

  set distance(value) {
    if (value < 1) {
      throw new Error('Расстояние должно быть >= 1');
    }
    this._distance = value;
  }

  get distance() {
    return this._distance;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    if (value < 0) {
      throw new Error('Атака должна быть >= 0');
    }
    this._baseAttack = value;
  }

  get attack() {
    let result = this._baseAttack * (1 - (this._distance - 1) * 0.1);
    if (this._stoned) {
      result -= Math.log2(this._distance) * 5;
    }
    return Math.max(result, 0);
  }
}
