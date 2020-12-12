import Character from './character';

export default class Swordsman extends Character {
  constructor(...rest) {
    super(...rest);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
