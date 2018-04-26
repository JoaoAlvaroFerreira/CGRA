/**
 * MyClock
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyClock extends CGFobject
{
	constructor(scene)
	{
		super(scene);
		this.h = new MyClockHand(this.scene, 0, 6);
		this.m = new MyClockHand(this.scene, 0, 10);
    this.s = new MyClockHand(this.scene, 0, 10));
		this.circ = new MyCircle(this.scene,30);
		this.timeinit = -1;
		this.cil = new MyCilinder(this.scene,30,3);
    this.initBuffers();
	};


  update(timestamp){
		this.m.setAngle(180+(timestamp-this.timeinit)/1000 * 360 / (60*60));
		this.s.setAngle(270+(timestamp-this.timeinit)/1000 * 360 / 60);
		this.h.setAngle(90+(timestamp-this.timeinit)/1000 * 360 / (60*60*24));
  };
  display(){
    //imagem
		this.pushMatrix();
			this.translate(0, 0, -1);
			this.scale(1,1,0.2);
			this.circ = new CGFappearance(this);
			this.circ.setAmbient(0.2,0.05,0.01,1);
			this.circ.setDiffuse(0.40,0.20,0.06,1);
			this.circ.setSpecular(0.6,0.3,0.1,1);
			this.circ.setShininess(30);
			this.circ.loadTexture("resources/clock.png");
			this.cil.display();
		this.popMatrix();
		this.enableTextures(true);

//scale para thickness + cor

		this.circ.display();
    h.display();
    m.display();
    s.display();
  };
};
