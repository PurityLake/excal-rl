import { Engine } from "excalibur";

class Game extends Engine {
  constructor() {
    super({ width: 800, height: 600 })
  }

  initialize() {
    this.start()
  }
}

export const game = new Game();
game.initialize();
