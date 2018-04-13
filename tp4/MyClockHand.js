/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyClockHand extends CGFobject
{
	constructor(scene,angle)
	{
		super(scene);
    this.hand=new MyCylinder(this.scene,6,3);
    this.hand.initBuffers();
	};
  setAngle(angle){
    this.angle = angle * Math.PI /180;
  }
  display(){
    this.scene.translate(0,0,0.5);
  	this.hand.rotate(this.angle,1,0,0);
    this.scene.translate(0,0,0.5);
		this.quad.display();
  };
};
