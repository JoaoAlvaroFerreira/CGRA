/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTable extends CGFobject
{
	constructor(scene)
	{
		super(scene);
    this.quadf=new MyUnitCubeQuad(this.scene);
    this.quadf.initBuffers();
	};
  display(){
		//perna 1
		this.scene.pushMatrix();
		this.scene.metal.apply();
		this.scene.translate(2.2,1.6,1.2);
		this.scene.scale(0.3,3.5,0.3);
		this.quadf.display();
		this.scene.popMatrix();
		//perna 2
		this.scene.pushMatrix();
		this.scene.translate(-2.2,1.6,1.2);
		this.scene.scale(0.3,3.5,0.3);
		this.quadf.display();
		this.scene.popMatrix();
		//perna 3
		this.scene.pushMatrix();
		this.scene.translate(2.2,1.6,-1.2);
		this.scene.scale(0.3,3.5,0.3);
		this.quadf.display();
		this.scene.popMatrix();
		//perna 4
		this.scene.pushMatrix();
		this.scene.translate(-2.2,1.6,-1.2);
		this.scene.scale(0.3,3.5,0.3);
		this.quadf.display();
		this.scene.popMatrix();
		//tampo
		this.scene.pushMatrix();
		this.scene.translate(0,3.5,0);
		this.scene.scale(5,0.3,3);
		this.scene.tableAppearance.apply();
		this.quadf.display();
		this.scene.popMatrix();
  };
};
