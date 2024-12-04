import Character from './Character.js';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this._stoned = true; // Маги всегда начинают с эффектом "дурмана"
  }
}
