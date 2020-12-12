import Character from './character';

export default class Undead extends Character {
  constructor(...rest) {
    super(...rest);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
