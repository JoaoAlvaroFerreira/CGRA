/**
 * MyLamp
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyLamp extends CGFobject
{
	constructor(scene,slices,stacks)
	{
		super(scene);
		this.slices = slices;
		this.stacks = stacks;
		this.initBuffers();
	};

	initBuffers()
	{
		var v = 1/this.stacks;
		var angle = (360/this.slices)*(Math.PI/180);
		var t = 0;
		var sum = 1/this.stacks;
		var prev = 1;
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.vertices.push(0,0,1);
		this.normals.push(0,0,1);
		t = 1;
		for(var j = 0; j <= this.stacks; j++){
			for(var i = 0; i < 2*this.slices; i++){
				//desinhar um retangulo
				if(i == 0){
					this.vertices.push(prev*Math.cos(i*angle),prev*Math.sin(i*angle),v*j); //ponto 0
					this.vertices.push((Math.sqrt(1-(sum*sum)))*Math.cos(i*angle),(Math.sqrt(1-(sum*sum)))*Math.sin(i*angle),v*(j+1)); //ponto 1
					this.vertices.push(prev*Math.cos((i+1)*angle),prev*Math.sin((i+1)*angle),v*j); //ponto 2
					this.vertices.push((Math.sqrt(1-(sum*sum)))*Math.cos((i+1)*angle),(Math.sqrt(1-(sum*sum)))*Math.sin((i+1)*angle),v*(j+1)); //ponto 3
					this.indices.push(t,t+2,t+1);
					this.indices.push(t+1,t+2,t+3);
					t+=2;//proxima face
					this.normals.push(prev*Math.cos(i*angle),prev*Math.sin(i*angle),v*j); //ponto 0
					this.normals.push((Math.sqrt(1-(sum*sum)))*Math.cos(i*angle),(Math.sqrt(1-(sum*sum)))*Math.sin(i*angle),v*(j+1)); //ponto 1
					this.normals.push(prev*Math.cos((i+1)*angle),prev*Math.sin((i+1)*angle),v*j); //ponto 2
					this.normals.push((Math.sqrt(1-(sum*sum)))*Math.cos((i+1)*angle),(Math.sqrt(1-(sum*sum)))*Math.sin((i+1)*angle),v*(j+1)); //ponto 3
				}
				else if(j == this.stacks - 1){
					t -= 2;
					for(var k = 0; k < this.slices ; k++){
					this.indices.push(0,t-(k+1),t-k);
					}
				}
				else{
					this.vertices.push(prev*Math.cos((i+1)*angle),prev*Math.sin((i+1)*angle),v*j); //ponto 2
					this.vertices.push((Math.sqrt(1-(sum*sum)))*Math.cos((i+1)*angle),(Math.sqrt(1-(sum*sum)))*Math.sin((i+1)*angle),v*(j+1)); //ponto 3
					this.indices.push(t,t+2,t+1);
					this.indices.push(t+1,t+2,t+3);
					this.normals.push(prev*Math.cos((i+1)*angle),prev*Math.sin((i+1)*angle),v*j);//ponto 2
					this.normals.push((Math.sqrt(1-(sum*sum)))*Math.cos((i+1)*angle),(Math.sqrt(1-(sum*sum)))*Math.sin((i+1)*angle),v*(j+1)); //ponto 3
					t+=2;//proxima face
				}
			}
			prev = Math.sqrt(1-(sum*sum));
			sum = sum + v;
		}
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
