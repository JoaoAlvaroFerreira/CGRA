/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyUnitCubeQuad extends CGFobject
{
	constructor(scene,minS, minT, maxS, maxT)
	{
		super(scene);
    this.quad=new MyQuad(this.scene,minS,minT,maxS,maxT);
    this.quad.initBuffers();
	};
  display(){
		this.scene.pushMatrix();
		this.scene.translate(0,0,0.5);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0,-0.5);
		this.scene.rotate(180*Math.PI/180,1,1,0)
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(90*Math.PI/180,0,1,0);
		this.scene.translate(0,0,0.5);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(270*Math.PI/180,0,1,0);
		this.scene.translate(0,0,0.5);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(90*Math.PI/180,1,0,0);
		this.scene.translate(0,0,0.5);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(270*Math.PI/180,1,0,0);
		this.scene.translate(0,0,0.5);
		this.quad.display();
		this.scene.popMatrix();
  };
};
