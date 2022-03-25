import { AnimatedSprite, Container, Graphics, Texture, Text, NineSlicePlane } from "pixi.js";
import { RobotHat } from "./RobotHat";

export class Scene extends Container{
    
    constructor(){
        super();  
        //Class extending from Container  
        const RobotWithHat: RobotHat = new RobotHat();

        RobotWithHat.scale.set(0.5);
        RobotWithHat.y=300;
    
        this.addChild(RobotWithHat);

        //Animated Sprite
        const robotAnimated: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("RobotRun0"),
                Texture.from("RobotRun1"),
                Texture.from("RobotRun2")
            ], true
        );
        robotAnimated.play();
        robotAnimated.animationSpeed = 0.2;
        this.addChild(robotAnimated);
        
        //Grapics
        const myGraph: Graphics = new Graphics();
        myGraph.lineStyle({color: 0x000000, width: 10, alpha: 1});
        myGraph.moveTo(0,0);
        myGraph.lineTo(300,500);
        myGraph.lineTo(300,100);
        myGraph.lineTo(0,0);
        myGraph.position.set(1280/2,720/2);
        myGraph.clear();
        myGraph.lineStyle({color: 0x000000, width: 10, alpha: 1});
        myGraph.beginFill(0x00FF00,1);
        myGraph.drawCircle(0,0,100);
        myGraph.endFill();
        myGraph.drawCircle(300,0,100);
        myGraph.position.set(1280/2,720/2);
        this.addChild(myGraph);

        // Nine-Slice Plane
        const panel = new NineSlicePlane(
            Texture.from("Panel"),
            35,35,35,35
        );
        this.addChild(panel);
        panel.width=500;
        panel.height=300;
        panel.scale.set(0.5);
        panel.position.x=500;

        //Text
        const myText: Text = new Text("Hello World", {fontSize: 50, fill: 0xFF0000, fontFamily:"Comic Sans MS"});
        myText.text= "TheS1";
        myText.position.x = 500;
        this.addChild(myText);
    }
}