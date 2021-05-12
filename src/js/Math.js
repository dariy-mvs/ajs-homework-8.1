export default class MathCharacter {
  constructor() {
    this.distance = 0;
  }

  get stoned() {
    return this.xstoned;
  }

  set stoned(boolean) {
    this.xstoned = boolean;
  }

  get attack() {
    const newAttack = (this.xattack / 100) * (100 - (this.distance - 1) * 10);
    if (this.stoned === true) {
      const attack = newAttack - Math.log2(this.distance) * 5;
      return Math.round(attack);
    }
    return (this.xattack / 100) * (100 - (this.distance - 1) * 10);
  }

  set attack(value) {
    this.xattack = value;
  }
}
