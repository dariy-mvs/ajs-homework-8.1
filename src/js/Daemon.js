import MathCharacter from './Math';

export default class Daemon extends MathCharacter {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.defence = 40;
  }
}
