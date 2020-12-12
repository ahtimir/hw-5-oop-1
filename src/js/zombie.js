import Character from './character';

export default class Zombie extends Character {
  constructor(...rest) {
    super(...rest);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
