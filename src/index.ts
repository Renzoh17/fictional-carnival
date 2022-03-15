import { Application, Container, Loader, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize", ()=>{
	const scaleX =  window.innerWidth / app.screen.width; 
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX,scaleY);
	const gameWidht = Math.round(app.screen.width*scale);
	const gameHeight = Math.round(app.screen.height*scale);
	const marginHorizontal = Math.floor((window.innerWidth-gameWidht)/2);
	const marginVertical = Math.floor((window.innerHeight-gameHeight)/2);
	app.view.style.width = gameWidht + "px";
	app.view.style.height = gameHeight + "px";
	app.view.style.marginLeft=marginHorizontal + "px";
	app.view.style.marginRight=marginHorizontal + "px";
	app.view.style.marginTop=marginVertical + "px";
	app.view.style.marginBottom=marginVertical + "px";
})
window.dispatchEvent(new Event("resize"));

Loader.shared.add({url: "./pikachu.png", name: "Pika"}); //Cargar al principio
Loader.shared.add({url: "./gorrofino.png", name: "Gorro"});

//Sprite.from("./mancha.png"); //Cargar en el momento

Loader.shared.onComplete.add(()=>{
	const pika: Sprite = Sprite.from("Pika");

	console.log("Hola mundo!",pika.width,pika.height);
	
	//clampy.anchor.set(0);
	
	const gorro: Sprite=Sprite.from("Gorro");

	gorro.scale.set(0.65,0.65);
	gorro.position.set(35,-90);
	gorro.angle=7;
	const pikaWithHat: Container = new Container();
	pikaWithHat.addChild(pika);
	pikaWithHat.addChild(gorro);
	pikaWithHat.scale.set(0.5);
	pikaWithHat.x=200;
	pikaWithHat.y=200;

	console.log(gorro.toGlobal(new Point()));

	/*const aux=hat.parent.toLocal(new Point(0,360));
	hat.position.x=aux.x;
	hat.position.y=aux.y; */

	app.stage.addChild(pikaWithHat);
});

Loader.shared.load();
