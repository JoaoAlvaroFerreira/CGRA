/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicle extends CGFobject {
    constructor(scene, limit = 1) { //accelaration = 0.01, angle = 0) {
        super(scene);
        this.limit = limit;
        this.accelaration = 0;
        this.angle = 0;
        this.friction = 0;

        this.wheel = new MyWheel(scene, 20, 3);
        this.circle = new MyCircle(scene, 10);
        this.semi = new MyLamp(scene, 10, 4);
        this.cube = new MyUnitCubeQuad(scene);
        this.triang = new MyTriang(scene);
        this.exhaust = new MyPrism(scene, 6, 1);
        this.speed = 0;
        this.position = [0, 0, 0];
        this.rotationSpeed = 0;
		this.rotationWheels = 0; 
        this.angleWheels = 0; 
    };

    display() {
        this.scene.translate(this.position[0], 0, this.position[2]);
   
        this.scene.rotate(this.angle, 0, 1, 0);
		this.scene.translate(-1.5, 0, 0); 
        this.scene.translate(0, 0.55, -1.1);

        this.scene.pushMatrix();
        this.scene.white.apply();
        this.scene.translate(-1, 0.3, 2.1);
        this.scene.rotate(90 * Math.PI / 180.0, 0, 1, 0);
        this.scene.scale(0.1, 0.1, 0.5);
        this.exhaust.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.vehicleAppearances[this.scene.currentAppearance].apply();
        this.scene.translate(1.61, 1.38, 1.25);
        this.scene.rotate(90 * Math.PI / 180.0, 0, 0, 1);
        this.scene.rotate(90 * Math.PI / 180.0, 1, 0, 0);
        this.scene.scale(1.25, 2.5, 0.5);
        this.triang.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.white.apply();
        this.scene.translate(-0.4, 0.5, -0.25);
        this.scene.rotate(45 * Math.PI / 180.0, 0, 0, 1);
        this.scene.scale(0.53, 0.1, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.4, 0.5, -0.25);
        this.scene.rotate(135 * Math.PI / 180.0, 0, 0, 1);
        this.scene.scale(0.53, 0.1, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.68, -0.25);
        this.scene.scale(0.53, 0.1, 0.5);
        this.cube.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(2.6, 0.5, -0.25);
        this.scene.rotate(45 * Math.PI / 180.0, 0, 0, 1);
        this.scene.scale(0.53, 0.1, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3.4, 0.5, -0.25);
        this.scene.rotate(135 * Math.PI / 180.0, 0, 0, 1);
        this.scene.scale(0.53, 0.1, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3, 0.68, -0.25);
        this.scene.scale(0.53, 0.1, 0.5);
        this.cube.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(2.6, 0.5, 2.75);
        this.scene.rotate(45 * Math.PI / 180.0, 0, 0, 1);
        this.scene.scale(0.53, 0.1, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3.4, 0.5, 2.75);
        this.scene.rotate(135 * Math.PI / 180.0, 0, 0, 1);
        this.scene.scale(0.53, 0.1, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.68, 2.75);
        this.scene.scale(0.53, 0.1, 0.5);
        this.cube.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0.5, 2.75);
        this.scene.rotate(45 * Math.PI / 180.0, 0, 0, 1);
        this.scene.scale(0.53, 0.1, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.4, 0.5, 2.75);
        this.scene.rotate(135 * Math.PI / 180.0, 0, 0, 1);
        this.scene.scale(0.53, 0.1, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3, 0.68, 2.75);
        this.scene.scale(0.53, 0.1, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        //light 1
        this.scene.pushMatrix();
        this.scene.gold.apply();
        this.scene.translate(4, 0.4, 0.4);
        this.scene.rotate(90 * Math.PI / 180.0, 0, 1, 0);
        this.scene.scale(0.3, 0.3, 0.3);
        this.circle.display();
        this.scene.rotate(180 * Math.PI / 180.0, 0, 1, 0);
        this.semi.display();
        this.scene.translate(3, 0, 0);
        this.scene.popMatrix();

        //light 2
        this.scene.pushMatrix();
        this.scene.translate(4, 0.4, 2);
        this.scene.rotate(90 * Math.PI / 180.0, 0, 1, 0);
        this.scene.scale(0.3, 0.3, 0.3);
        this.circle.display();
        this.scene.rotate(180 * Math.PI / 180.0, 0, 1, 0);
        this.semi.display();
        this.scene.popMatrix();

        //WindowsDoors
        this.scene.pushMatrix();
        this.scene.vehicleAppearances[this.scene.currentAppearance].apply();
        this.scene.scale(2.3, 2, 2.5);
        this.scene.translate(0.2, 0.5, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        //Hood
        this.scene.pushMatrix();
        this.scene.scale(2.2, 0.8, 2.5);
        this.scene.translate(1.2, 0.6, 0.5);
        this.cube.display();
        this.scene.popMatrix();

        //*lowerbody
        this.scene.pushMatrix();
        this.scene.white.apply();
        //this.scene.axleAppearance.apply();
        this.scene.translate(1.5, 0, 1.25);
        this.scene.scale(4.5, 0.3, 2.6);
        this.cube.display();
        this.scene.popMatrix();


        //WHEELS
        this.scene.pushMatrix();
        this.scene.scale(0.55, 0.55, 0.55);
        this.scene.rotate(180 * Math.PI / 180.0, 0, 1, 0);
		this.scene.rotate(-this.rotationWheels*50*Math.PI/180,0,0,1);
        this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		
        this.scene.translate(3, 0, 0);
        this.scene.scale(0.55, 0.55, 0.55);
        this.scene.rotate(180 * Math.PI / 180.0, 0, 1, 0);
		this.scene.rotate(-this.rotationWheels*50*Math.PI/180,0,0,1);
        this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3, 0, 2.5);
        this.scene.scale(0.55, 0.55, 0.55);
		this.scene.rotate(-this.rotationWheels*50*Math.PI/180,0,0,1);
        this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0, 0, 2.5);
        this.scene.scale(0.55, 0.55, 0.55);
		this.scene.rotate(-this.rotationWheels*50*Math.PI/180,0,0,1);
        this.wheel.display();
        this.scene.popMatrix();
		


    }
    move() {
        
	if(!this.scene.crane.carroSegurado || !this.scene.carroDepositado){
        if (this.scene.gui.isKeyPressed("KeyW")) {

            this.accelaration = 0.01;
            this.friction = this.accelaration/5;
        }
        else if (this.scene.gui.isKeyPressed("KeyS")) {
            this.accelaration = -0.01;
            this.friction = Math.abs(this.accelaration/5);
        }
        else
            this.accelaration = 0;

        if (this.scene.gui.isKeyPressed("KeyA")) {
            this.rotationSpeed = 0.02;
        }
        else if (this.scene.gui.isKeyPressed("KeyD")) {
            this.rotationSpeed = - 0.02;
        }
        else
            this.rotationSpeed = 0;

        this.updateMovement();
	}
    }

    updateMovement() {
		
		
        this.speed += this.accelaration;

         if (this.speed > 0) //Makes speed = 0 when its near 0
        {
            if (this.speed - this.friction < 0)
                this.speed = 0;
            else
                this.speed -= this.friction;
        }
        else if (this.speed < 0) {
            if (this.speed + this.friction > 0)
                this.speed = 0;
            else
                this.speed += this.friction;
        }

        if(this.speed >= this.limit)
        this.speed= this.limit;
        else if(this.speed <= -this.limit)
        this.speed = -this.limit; 

		if(this.speed != 0) 
        this.angle += this.rotationSpeed;
	
		if(this.speed != 0) 
        this.rotationWheels += this.speed; 

        this.position[0] += this.speed * Math.cos(this.angle);
        this.position[2] += -this.speed * Math.sin(this.angle);
	
    }

}