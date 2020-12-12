import Character from './character';

export default class Bowman extends Character {
  constructor(...rest) {
    super(...rest);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}
