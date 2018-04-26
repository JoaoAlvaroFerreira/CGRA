/**
 * MyCircle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCircle extends CGFobject
{
	constructor(scene,slices)
	{
		super(scene);
		this.slices = slices;
		this.initBuffers();
	};

	initBuffers()
	{
		var angle = (360/this.slices)*(Math.PI/180);
		var t = 1;
		var prev = 1;
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.vertices.push(0,0,0);
		this.normals.push(0,0,1);
		for(var i = 0; i < 2*this.slices; i++){
				//desinhar um retangulo
					this.vertices.push(Math.cos(i*angle),Math.sin(i*angle),0); //ponto 0
					this.vertices.push(Math.cos((i+1)*angle),Math.sin((i+1)*angle),0); //ponto 2
					this.indices.push(t,t+1,0);
					this.normals.push(0,0,1);
					this.normals.push(0,0,1);
					t += 2;
			}
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
