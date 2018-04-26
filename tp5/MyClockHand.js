/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyClockHand extends CGFobject
{
	constructor(scene,angle,length)
	{
		super(scene);
		setAngle(angle);
		this.length = length;
    this.hand= new MyCylinder(this.scene,20,length);
    this.hand.initBuffers();
	};
  setAngle(angle){
    this.angle = angle * Math.PI /180;
  }
  display(){
    this.hand.translate(0,0,0.5);
		//scales update
		this.hand.scale(1,1,0.1)
  	this.hand.rotate(this.angle,1,0,0);
    this.hand.translate(0,0,0.5);
		this.hand.display();
  };
};
