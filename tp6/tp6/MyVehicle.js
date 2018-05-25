/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
 
 class MyVehicle extends CGFobject
{
	constructor(scene)
	{
		super(scene);
		
		this.wheel = new MyWheel(scene,20,3);
        this.circle = new MyCircle(scene,10);
        this.semi = new MyLamp(scene,10,4);
        this.cube = new MyUnitCubeQuad(scene);
        this.triang = new MyTriang(scene);
        this.exhaust = new MyPrism(scene,6,1);
		
		this.carX = 1;
		this.carY = 1;
	};
	
	display(){
		
        this.scene.pushMatrix();
        this.scene.white.apply();
        this.scene.translate(-1,0.3,2.1);
        this.scene.rotate(90*Math.PI/180.0,0,1,0);
        //this.scene.rotate(90*Math.PI/180.0,1,0,0);
        this.scene.scale(0.1,0.1,0.5);
        this.exhaust.display();
        this.scene.popMatrix();

		
	
        this.scene.pushMatrix();
        this.scene.red.apply();
        this.scene.translate(1.61,1.38,1.25);
        this.scene.rotate(90*Math.PI/180.0,0,0,1);
        this.scene.rotate(90*Math.PI/180.0,1,0,0);
        this.scene.scale(1.25,2.5,0.5);
        this.triang.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix();
        this.scene.white.apply();
        this.scene.translate(-0.4,0.5,-0.25);
        this.scene.rotate(45*Math.PI/180.0,0,0,1);
        this.scene.scale(0.53,0.1,0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.4,0.5,-0.25);
        this.scene.rotate(135*Math.PI/180.0,0,0,1);
        this.scene.scale(0.53,0.1,0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.68,-0.25);
        this.scene.scale(0.53,0.1,0.5);
        this.cube.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(2.6,0.5,-0.25);
        this.scene.rotate(45*Math.PI/180.0,0,0,1);
        this.scene.scale(0.53,0.1,0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3.4,0.5,-0.25);
        this.scene.rotate(135*Math.PI/180.0,0,0,1);
        this.scene.scale(0.53,0.1,0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3,0.68,-0.25);
        this.scene.scale(0.53,0.1,0.5);
        this.cube.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(2.6,0.5,2.75);
        this.scene.rotate(45*Math.PI/180.0,0,0,1);
        this.scene.scale(0.53,0.1,0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3.4,0.5,2.75);
        this.scene.rotate(135*Math.PI/180.0,0,0,1);
        this.scene.scale(0.53,0.1,0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.68,2.75);
        this.scene.scale(0.53,0.1,0.5);
        this.cube.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-0.4,0.5,2.75);
        this.scene.rotate(45*Math.PI/180.0,0,0,1);
        this.scene.scale(0.53,0.1,0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.4,0.5,2.75);
        this.scene.rotate(135*Math.PI/180.0,0,0,1);
        this.scene.scale(0.53,0.1,0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3,0.68,2.75);
        this.scene.scale(0.53,0.1,0.5);
        this.cube.display();
        this.scene.popMatrix();
        
        //light 1
        this.scene.pushMatrix();
        this.scene.gold.apply();
        this.scene.translate(4,0.4,0.4);
        this.scene.rotate(90*Math.PI/180.0,0,1,0);
        this.scene.scale(0.3,0.3,0.3);
        this.circle.display();
        this.scene.rotate(180*Math.PI/180.0,0,1,0);
        this.semi.display();
        this.scene.translate(3,0,0);
        this.scene.popMatrix();

        //light 2
        this.scene.pushMatrix();
        this.scene.translate(4,0.4,2);
        this.scene.rotate(90*Math.PI/180.0,0,1,0);
        this.scene.scale(0.3,0.3,0.3);
        this.circle.display();
        this.scene.rotate(180*Math.PI/180.0,0,1,0);
        this.semi.display();
        this.scene.popMatrix();

        //WindowsDoors
        this.scene.pushMatrix();
		this.scene.vehicleAppearances[5].apply();
        this.scene.scale(2.3,2,2.5);
        this.scene.translate(0.2,0.5,0.5);
        this.cube.display();
        this.scene.popMatrix();

        //Hood
        this.scene.pushMatrix();
        this.scene.scale(2.2,0.8,2.5);
        this.scene.translate(1.2,0.6,0.5);
        this.cube.display();
        this.scene.popMatrix();

        //*lowerbody
        this.scene.pushMatrix();
        this.scene.white.apply();
        //this.scene.axleAppearance.apply();
        this.scene.translate(1.5,0,1.25);
        this.scene.scale(4.5,0.3,2.6);
        this.cube.display();
        this.scene.popMatrix();


        //WHEELS
        this.scene.pushMatrix();
        this.scene.scale(0.55,0.55,0.55);
        this.scene.rotate(180*Math.PI/180.0,0,1,0);
        this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3,0,0);
        this.scene.scale(0.55,0.55,0.55);
        this.scene.rotate(180*Math.PI/180.0,0,1,0);
        this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3,0,2.5);
        this.scene.scale(0.55,0.55,0.55);
        this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,2.5);
        this.scene.scale(0.55,0.55,0.55);
        this.wheel.display();
        this.scene.popMatrix();
        
	
	}
	
	move(key){
		
		 switch(key){		
		 
		 case 65: this.carY -= this.carY + 0.01; //a
		 break;
		 case 83: this.carX -= this.carX + 0.01; //s
		 break;
		 case 68: this.carY -= this.carY + 0.01; //d
		 break;
		 case 87: this.carX += this.carX + 0.01; //w
		 break;
		 default: return;
		 
		// if (key == 97 || key == 65) { //a || A
				// this.carY -= this.carY + 0.01;
			// }

			// if (key == 115 || key == 83) { //s || S
				// this.carX -= this.carX + 0.01;

			// }

			// if (key == 100 || key == 68) { //d || D
				// this.carY -= this.carY + 0.01;

			// }

			// if (key == 119 || key == 87) { //w || W
				// this.carX += this.carX + 0.01;			
			// }		
				
			
		}
}
}