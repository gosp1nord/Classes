import Daemon from './daemon';
import Bowman from './bowman';
import Magician from './magician';
import Swordsman from './swordsman';
import Undead from './undead';
import Zombie from './zombie';

const warriorDeamon = new Daemon('Oleg');
warriorDeamon.levelUp();
const warriorBowman = new Bowman('Valera');
warriorBowman.levelUp();
const warriorMagician = new Magician('Grigory');
warriorMagician.levelUp();
const warriorUndead = new Undead('Stepan');
warriorUndead.levelUp();
const warriorSwordsman = new Swordsman('Pankrat');
warriorSwordsman.levelUp();
const warriorZombie = new Zombie('Robert');
warriorZombie.levelUp();
