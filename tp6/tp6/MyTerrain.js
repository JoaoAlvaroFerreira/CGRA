/**
 * MyTerrain
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTerrain extends CGFobject{
	
	constructor(scene,nrDivs,vector = [])
	{
		super(scene);
		this.nrDivs = nrDivs;
		this.vector = vector;
		this.plano = new Plane(this.scene, nrDivs, 0, 1, 0, 1);
	
		
	};

	display()
	{
		this.plano.indices = this.vector.slice(); //copIar vetor, não está a funcionar não sei porquê
		this.scene.pushMatrix();
     	this.plano.display();
    	this.scene.popMatrix();

	};
}