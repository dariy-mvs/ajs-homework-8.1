
export default class Math {
  constructor() {
    super(),
    this.damage = {
      get() {
        return this.xdamage
      },
      set(value) {
        if (value > 0 && value <=5) {
          return this.xdamage / 100 * (100 - (value - 1)*10);
        } else return 0
        
      }
    },
    this.attack = {
      get() {
        return this.xattack
      },
      set(value) {
        //attack - log2(value) * 5
      }
    }
  }
  }