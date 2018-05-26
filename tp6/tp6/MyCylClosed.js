/**
 * MyCylClosed
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCylClosed extends CGFobject
{
	constructor(scene,slices,stacks)
	{
		super(scene);
		this.slices = slices;
		this.stacks = stacks;
		this.cir=new MyCircle(this.scene,this.slices);
		this.cyl=new MyCylinder(this.scene,this.slices,this.stacks);
		this.cir.initBuffers();
		this.cyl.initBuffers();
	};

	display()
	{
		this.scene.pushMatrix();
		this.scene.translate(0,0,1);
		this.cir.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(180*Math.PI/180,0,1,0);
		this.cir.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.cyl.display();
		this.scene.popMatrix();
	};
};
