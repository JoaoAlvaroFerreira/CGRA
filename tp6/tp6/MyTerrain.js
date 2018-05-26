/**
 * MyTerrain
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTerrain extends CGFobject{
	
	constructor(scene,nrDivs,vector = new Array[nrDivs+1](nrDivs + 1).fill(0))
	{
		super(scene);
		this.nrDivs = nrDivs;
		this.vector = vector;
		this.plano = new MyPlane(this.scene,this.nrDivs, 0, 5, 0, 5,this.vector);
		};
		

	display()
	{
		/*
		var yCoord = 0.5;
		for(var i = 0; i < this.vector.length; i++){
			var xCoord = -0.5;
			for(var j = 0; j < this.vector.length; j++){
			this.plano.vertices.push(xCoord, yCoord, this.vector[i][j]);
			xCoord += this.patchLength;
			}
			yCoord -= this.patchLength;
		}*/
		
		this.scene.pushMatrix();
     	this.plano.display();
    	this.scene.popMatrix();

	};
}