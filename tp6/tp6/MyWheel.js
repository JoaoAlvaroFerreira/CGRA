/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyWheel extends CGFobject
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

		this.wheelAppearance = new CGFappearance(this.scene);
		this.wheelAppearance.setAmbient(0.1,0.1,0.1,1);
		this.wheelAppearance.setDiffuse(0.30,0.30,0.30,1);
		this.wheelAppearance.setSpecular(0.8,0.8,0.8,1);
		this.wheelAppearance.setShininess(100);
		this.wheelAppearance.loadTexture("resources/images/wheel.png");
        
    this.tireAppearance = new CGFappearance(this.scene);
		this.tireAppearance.setAmbient(0.1,0.1,0.1,1);
		this.tireAppearance.setDiffuse(0.50,0.50,0.50,1);
		this.tireAppearance.setSpecular(0.3,0.3,0.3,1);
		this.tireAppearance.setShininess(20);
    this.tireAppearance.loadTexture("resources/images/tire.png");
	};
  display(){
		this.scene.pushMatrix();
		this.wheelAppearance.apply();
		this.scene.translate(0,0,1);
		this.cir.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.tireAppearance.apply();
		this.cyl.display();
		this.scene.popMatrix();
  };
};
