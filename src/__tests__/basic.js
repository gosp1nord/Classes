import Daemon from '../daemon';
import Bowman from '../bowman';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('create Daemon', () => {
  const warriorDeamon = new Daemon('Oleg', 'Daemon');
  expect(warriorDeamon).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'Oleg', type: 'Daemon',
  });
});

test('create Bowman', () => {
  const warriorBowman = new Bowman('Valera', 'Bowman');
  expect(warriorBowman).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Valera', type: 'Bowman',
  });
});

test('create Magician', () => {
  const warriorMagician = new Magician('Grigory', 'Magician');
  expect(warriorMagician).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'Grigory', type: 'Magician',
  });
});

test('create Undead', () => {
  const warriorUndead = new Undead('Stepan', 'Undead');
  expect(warriorUndead).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Stepan', type: 'Undead',
  });
});

test('create Swordsman', () => {
  const warriorSwordsman = new Swordsman('Pankrat', 'Swordsman');
  expect(warriorSwordsman).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'Pankrat', type: 'Swordsman',
  });
});

test('create Zombie', () => {
  const warriorZombie = new Zombie('Robert', 'Zombie');
  expect(warriorZombie).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'Robert', type: 'Zombie',
  });
});

test('create Zombie', () => {
  const warriorZombie = new Zombie('veryLongName', 'Zombie');
  expect(warriorZombie).toThrow('Длина имени от 2 до 10 символов');
});

test('create Zombie', () => {
  const warriorZombie = new Zombie('Robert', 'Robert');
  expect(warriorZombie).toThrow('Неверный тип персонажа');
});
