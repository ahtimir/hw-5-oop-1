/* eslint-disable linebreak-style */

export default class Character {
  constructor(name, type, attack, defence) {
    if (typeof name === 'string' || name.length < 2 || name.length > 10) {
      this.name = name;
    } else {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }

    const classList = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (Object.prototype.hasOwnProperty.call(classList, type)) {
      this.type = type;
    } else {
      throw new Error('Такого класса не существует');
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
    } else {
      throw new Error('Ошибка! Здоровье ниже 0.');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Ошибка! Здоровье ниже 0.');
    }
  }
}
