import MathCharacter from './Math';

export default class Magician extends MathCharacter {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.defence = 40;
  }
}
