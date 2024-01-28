import * as ex from "excalibur";
import { Player } from "./player.ts";

class Game extends ex.Engine {
  player: Player;
  pointerEmiter: ex.EventEmitter<ex.Input.PointerEvent>;

  constructor() {
    super({ width: 800, height: 600 });
    this.pointerEmiter = new ex.EventEmitter<ex.Input.PointerEvent>();
    this.player = new Player(this.pointerEmiter);
  }

  initialize() {
    this.add(this.player);
    this.input.pointers.primary.on("down", (evt: ex.PointerEvent) => {
      this.pointerEmiter.emit("pdown", evt);
    });
    this.start();
  }
}

export const game = new Game();
game.initialize();
