/**
 * MyTriang
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTriang extends CGFobject
{
	constructor(scene)
	{
		super(scene);
		this.tri=new MyTriangle(this.scene);
		this.tri.initBuffers();
		this.quad=new MyQuad(this.scene);
		this.quad.initBuffers();
	};
  display(){
		this.scene.pushMatrix();
		this.scene.rotate(270*Math.PI/180,0,1,0);
		this.scene.translate(0.5,0,0.5);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(180*Math.PI/180,1,0,0);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0,0.5);
		this.scene.rotate(45*Math.PI/180,0,1,0);
		this.scene.scale(1.415,1,0);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(90*Math.PI/180,1,0,0);
		this.scene.translate(0,0.5,0.5);
		this.tri.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(270*Math.PI/180,1,0,0);
		this.scene.rotate(270*Math.PI/180,0,0,1);
		this.scene.translate(0.5,0,0.5);
		this.tri.display();
		this.scene.popMatrix();

  };
};
