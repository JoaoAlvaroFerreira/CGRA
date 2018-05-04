/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyFloor extends CGFobject
{
	constructor(scene)
	{
		super(scene);
    this.quad=new MyUnitCubeQuad(this.scene);
    this.quad.initBuffers();
	};
  display(){
		this.scene.translate(4,0.05,3)
		//chao
		this.scene.pushMatrix();
		this.scene.scale(8,0.1,6);
		this.quad.display();
		this.scene.popMatrix();
  };
};
