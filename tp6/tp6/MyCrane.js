/**
 * MyCrane
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCrane extends CGFobject
{
	constructor(scene)
	{
		super(scene);
		this.cil = new MyCylClosed(this.scene,10,2);
		this.rectangle = new MyUnitCubeQuad(this.scene);

		this.white = new CGFappearance(this.scene);
        this.white.setAmbient((1/5)*(255/255),(1/5)*(255/255),(1/5)*(255/255));
		this.white.setDiffuse((3/5)*(255/255),(3/5)*(255/255),(3/5)*(255/255),1);
		this.white.setSpecular((8/10)*(255/255),(8/10)*(255/255),(8/10)*(255/255),1);
        this.white.setShininess(300);

        this.black = new CGFappearance(this.scene);
        this.black.setAmbient(0,0,0);
		this.black.setDiffuse(0.2,0.2,0.2);
		this.black.setSpecular(0.3,0.3,0.3);
        this.black.setShininess(300);

        this.gold = new CGFappearance(this.scene);
        this.gold.setAmbient((1/5)*(255/255),(1/5)*(215/255),(1/5)*(0/255));
		this.gold.setDiffuse((3/5)*(255/255),(3/5)*(215/255),(3/5)*(0/255),1);
		this.gold.setSpecular((8/10)*(255/255),(8/10)*(215/255),(8/10)*(0/255),1);
		this.gold.setShininess(300);
		
		this.red = new CGFappearance(this.scene);
        this.red.setAmbient((1/5)*(220/255),(1/5)*(20/255),(1/5)*(60/255));
		this.red.setDiffuse((3/5)*(220/255),(3/5)*(20/255),(3/5)*(60/255),1);
		this.red.setSpecular((8/10)*(220/255),(8/10)*(20/255),(8/10)*(60/255),1);
		this.red.setShininess(10);
		
		this.rotateHorizontal = 0;
		this.rotateVertical = 0;
		this.magnetOn = false;
		this.lapse = 0;
		this.vehicle = null;
        
	};

	display()
	{
		//BASE JOINT
		this.scene.pushMatrix();
        this.gold.apply();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        this.scene.scale(1.5,1.5,0.5);
		this.cil.display();
        this.scene.popMatrix();

		//BASE ROD
        this.scene.pushMatrix();
        this.white.apply();
		this.scene.rotate(this.rotateHorizontal * Math.PI / 180, 0, 1, 0);
        this.scene.translate(0,3.5,0);
        this.scene.scale(0.5,7,0.5);
		this.rectangle.display();
        this.scene.popMatrix();
		//INCLINED ROD
        this.scene.pushMatrix();
        this.white.apply();
		this.scene.rotate(this.rotateHorizontal * Math.PI / 180, 0, 1, 0);
		
        this.scene.translate(-2,8,0);
		
        this.scene.rotate(60*Math.PI/180, 0, 0, 1);
		this.scene.rotate(this.rotateVertical * Math.PI / 180, 0, 0, 1);
		this.scene.translate(0, this.rotateVertical/25, 0);
		
        this.scene.scale(0.5,5,0.5);
		this.rectangle.display();
        this.scene.popMatrix();
		
		//CABLE
        this.scene.pushMatrix();
        this.black.apply();
		this.scene.translate(-this.rotateVertical/25, -this.rotateVertical/25,0)
		this.scene.rotate(this.rotateHorizontal * Math.PI / 180, 0, 1, 0);
        this.scene.translate(-4,9,0);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        this.scene.scale(0.1,0.1,5);
		this.cil.display();
        this.scene.popMatrix();
		//MAGNET
        this.scene.pushMatrix();
        this.red.apply();
		this.scene.translate(-this.rotateVertical/25, -this.rotateVertical/25,0)
		this.scene.rotate(this.rotateHorizontal * Math.PI / 180, 0, 1, 0);
        this.scene.translate(-4,4,0);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        this.scene.scale(1,1,0.25);
		this.cil.display();
        this.scene.popMatrix();
		//UPPER JOINT
        this.scene.pushMatrix();
        this.gold.apply();
		this.scene.rotate(this.rotateHorizontal * Math.PI / 180, 0, 1, 0);
		this.scene.translate(0,7,-0.3);
        this.scene.scale(0.6,0.6,0.6);
		this.cil.display();
        this.scene.popMatrix();
		
		 if(this.magnetOn){
		this.scene.pushMatrix();
		this.scene.translate(-this.rotateVertical/25, -this.rotateVertical/25,0)
		this.scene.rotate(this.rotateHorizontal * Math.PI / 180, 0, 1, 0);
		this.scene.translate(-4,1.75,0);
		this.scene.vehicle.display();
		this.scene.popMatrix();
			 
			
		 }
		
	};
	
	move(){ 
	this.lapse += 1;
	
        if (this.lapse == 3) {
            if (this.scene.gui.isKeyPressed("KeyL")) {
				
				this.rotateHorizontal += 1;
				
            }
            if (this.scene.gui.isKeyPressed("KeyJ")) {
				
				
				this.rotateHorizontal -= 1;
            }
      
            if (this.scene.gui.isKeyPressed("KeyK")) {
				
            if(this.rotateVertical < 12)
				this.rotateVertical += 1;
				
			}
			
			 if (this.scene.gui.isKeyPressed("KeyI")) {
				if(this.rotateVertical >-4)
				this.rotateVertical -= 1;
				
			}
			 
			 if(this.scene.gui.isKeyPressed("KeyP")){
				this.turnMagnet();
			 }
		 this.lapse = 0;
		}
	
	};
        
	turnMagnet(){
		
		if(this.rotateVertical > 10){
		if(this.magnetOn)
			this.magnetOn = false;
		else{
			this.magnetOn = true;
			
		}
		}
	}
 };
