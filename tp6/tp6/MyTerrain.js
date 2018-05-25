/**
 * MyTerrain
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTerrain extends CGFobject{
	
	constructor(scene)
	{
		super(scene);
		this.plano = new Plane(this.scene, 100, 0, 6, 0, 6);
		this.plano.initBuffers();
		this.chao = new CGFappearance(this.scene);
        this.chao.setAmbient((1/5)*(220/255),(1/5)*(20/255),(1/5)*(60/255));
		this.chao.setDiffuse((3/5)*(220/255),(3/5)*(20/255),(3/5)*(60/255),1);
		this.chao.setSpecular((8/10)*(220/255),(8/10)*(20/255),(8/10)*(60/255),1);
		this.chao.setShininess(10);
		this.chao.loadTexture("resources/images/terrain.png");
	};
	
	display()
	{
		
		
    this.scene.pushMatrix();
    this.chao.apply();
    this.plano.display();
    this.scene.popMatrix();

	};
}