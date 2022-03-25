import { Container, Sprite } from "pixi.js";

export class RobotHat extends Container {

    constructor(){
        super();
    const robot: Sprite = Sprite.from("Robot");

	const gorro: Sprite=Sprite.from("Gorro");

    robot.scale.set(2,2);
	gorro.scale.set(0.5,0.5);
	gorro.position.set(60,50);
    this.addChild(robot);
	this.addChild(gorro);
    }
}