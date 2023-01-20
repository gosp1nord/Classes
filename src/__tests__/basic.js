import Daemon from '../daemon';
import Bowman from '../bowman';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';
import Character from '../character';

test('create Daemon', () => {
  const warriorDeamon = new Daemon('Oleg');
  expect(warriorDeamon).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'Oleg', type: 'Daemon',
  });
});

test('create Bowman', () => {
  const warriorBowman = new Bowman('Valera');
  expect(warriorBowman).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Valera', type: 'Bowman',
  });
});

test('create Magician', () => {
  const warriorMagician = new Magician('Grigory');
  expect(warriorMagician).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'Grigory', type: 'Magician',
  });
});

test('create Undead', () => {
  const warriorUndead = new Undead('Stepan');
  expect(warriorUndead).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Stepan', type: 'Undead',
  });
});

test('create Swordsman', () => {
  const warriorSwordsman = new Swordsman('Pankrat');
  expect(warriorSwordsman).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'Pankrat', type: 'Swordsman',
  });
});

test('create Zombie', () => {
  const warriorZombie = new Zombie('Robert');
  expect(warriorZombie).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'Robert', type: 'Zombie',
  });
});

test('create Zombie', () => {
  expect(() => {
    const warriorZombie = new Zombie('veryLongName');
  }).toThrowError('Длина имени от 2 до 10 символов');
});

test('create Character', () => {
  expect(() => {
    const warriorCharacter = new Character('Robert', 'Robert', 0, 0);
  }).toThrowError('Неверный тип персонажа');
});

test('test damage Zombie', () => {
  const warriorZombie = new Zombie('Robert');
  warriorZombie.damage(80);
  expect(warriorZombie).toEqual({
    attack: 40, defence: 10, health: 28, level: 1, name: 'Robert', type: 'Zombie',
  });
});

test('test kill Zombie', () => {
  const warriorZombie = new Zombie('Robert');
  warriorZombie.damage(240);
  expect(warriorZombie).toEqual({
    attack: 40, defence: 10, health: 0, level: 1, name: 'Robert', type: 'Zombie',
  });
});

test('test double kill Zombie', () => {
  const warriorZombie = new Zombie('Robert');
  warriorZombie.damage(240);
  warriorZombie.damage(100);
  expect(warriorZombie).toEqual({
    attack: 40, defence: 10, health: 0, level: 1, name: 'Robert', type: 'Zombie',
  });
});

test('test level up Zombie', () => {
  const warriorZombie = new Zombie('Robert');
  warriorZombie.levelUp();
  expect(warriorZombie).toEqual({
    attack: 48, defence: 12, health: 100, level: 2, name: 'Robert', type: 'Zombie',
  });
});

test('test level up killed Zombie', () => {
  expect(() => {
    const warriorZombie = new Zombie('Robert');
    warriorZombie.damage(240);
    warriorZombie.levelUp();
  }).toThrowError();
});
