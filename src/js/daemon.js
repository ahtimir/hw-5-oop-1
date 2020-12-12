import Character from './character';

export default class Daemon extends Character {
  constructor(...rest) {
    super(...rest);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
