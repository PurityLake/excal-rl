import * as ex from "excalibur";

export class Player extends ex.Actor {
  constructor(emitter: ex.EventEmitter<ex.PointerEvent>) {
    super({
      name: "player",
      width: 50,
      height: 50,
      color: ex.Color.Red,
      pos: new ex.Vector(100, 100),
    });

    emitter.on("pdown", (evt) => {
      this.onClick(evt);
    });
  }

  onClick(event: any) {
    const evt = event as ex.PointerEvent;
    this.pos = evt.worldPos;
  }
}
