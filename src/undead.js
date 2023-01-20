import Character from './character';

export default class Undead extends Character {
  constructor(name, type = 'Undead', attack = 25, defence = 25) {
    super(name, type, attack, defence);
  }
}
