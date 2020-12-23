import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('Character creation', () => {
  const palyer = new Character('newb1', 'Undead', 25, 25);
  expect(palyer).toEqual({
    name: 'newb1',
    type: 'Undead',
    attack: 25,
    defence: 25,
    level: 1,
    health: 100,
  });
});

test('Bowman creation', () => {
  const palyer = new Bowman('newb2', 'Bowman', 25, 25);
  expect(palyer).toEqual({
    name: 'newb2', 
    type: 'Bowman',
    attack: 25,
    defence: 25,
    level: 1,
    health: 100,
  });
});

test('Swordsman creation', () => {
  const palyer = new Swordsman('newb3', 'Swordsman', 40, 10);
  expect(palyer).toEqual({
    name: 'newb3',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    level: 1,
    health: 100,
  });
});

test('Magician creation', () => {
  const palyer = new Magician('newb4', 'Magician', 10, 40);
  expect(palyer).toEqual({
    name: 'newb4',
    type: 'Magician',
    attack: 10,
    defence: 40,
    level: 1,
    health: 100,
  });
});

test('Undead creation', () => {
  const palyer = new Undead('newb5', 'Undead', 25, 25);
  expect(palyer).toEqual({
    name: 'newb5', 
    type: 'Undead',
    attack: 25,
    defence: 25,
    level: 1,
    health: 100,
  });
});

test('Zombie creation', () => {
  const palyer = new Zombie('newb6', 'Zombie', 40, 10);
  expect(palyer).toEqual({
    name: 'newb6', 
    type: 'Zombie',
    attack: 40,
    defence: 10,
    level: 1,
    health: 100,
  });
});

test('Daemon creation', () => {
  const palyer = new Daemon('newb7', 'Daemon:', 10, 40);
  expect(palyer).toEqual({
    name: 'newb7', 
    type: 'Daemon',
    attack: 10,
    defence: 40,
    level: 1,
    health: 100
  });
});

test('Level Up', () => {
  const palyer = new Character('newb8', 'Daemon', 10, 40);
  palyer.levelUp();
  expect(palyer).toEqual({
    name: 'newb8', 
    type: 'Daemon',
    attack: 12, 
    defence: 48, 
    level: 2,
    health: 100,
  });
});

test('Level Up Error', () => {
  expect(() => {
    const palyer = new Character('newb9', 'Daemon', 10, 40, 1, -1);
    palyer.levelUp();
  }).toThrow('Ошибка! Здоровье ниже 0.');
});

test('Damage Error', () => {
  expect(() => {
    const palyer = new Character('newb9', 'Daemon', 10, 40, 1, -1);
    palyer.damage();
  }).toThrow('Ошибка! Здоровье ниже 0.');
});

test('Long Name Error', () => {
  expect(() => new Character('long_12345678910_long', 'Daemon', 10, 40)).toThrow(new Error('Имя должно содержать от 2 до 10 символов'));
});

test('Short Name Error', () => {
  expect(() => new Character('s', 'Daemon', 10, 40)).toThrow(new Error('Имя должно содержать от 2 до 10 символов'));
});

test('Not String Name Error', () => {
  expect(() => new Character(12345, 'Daemon', 10, 40)).toThrow(new Error('Имя должно содержать от 2 до 10 символов'));
});

test('Wrong Class Error', () => {
  expect(() => new Character('800', 'Terminator', 100, 100)).toThrow(new Error('Такого класса не существует'));
});

test('Damage', () => {
  const palyer = new Character('newb8', 'Daemon', 10, 40);
  expect(palyer.damage(40)).toEqual(24);
});
