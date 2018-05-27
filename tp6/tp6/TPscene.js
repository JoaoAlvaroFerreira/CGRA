var TERRAIN_DIVISIONS = 50;


class TPscene extends CGFscene
{
    constructor()
    {
        super();
    }


    init(application)
    {
        super.init(application);

        this.initCameras();

        this.initLights();
		
		//this.chao = new MyTerrain(this.scene);


        this.gl.clearColor(135/255, 206/255, 235/255, 1.0); 
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

      
        this.axis =  new CGFaxis(this);
		this.vehicle = new MyVehicle(this);
        this.sky = new MySky(this,60,100);
        this.cil = new MyCylClosed(this,10,2);
        this.rectangle = new MyUnitCubeQuad(this);
        this.crane = new MyCrane(this);
        this.park = new Plane(this,1,0,1,0,1);
        this.enableTextures(true);

		//MyInterface Variables
		this.Lights1=true; 
		this.Lights2=true;
		this.AxisSwitch = true;
		this.Brightness = 3;
		this.setUpdatePeriod(1000 / 60);

        this.white = new CGFappearance(this);
        this.white.setAmbient((1/5)*(255/255),(1/5)*(255/255),(1/5)*(255/255));
		this.white.setDiffuse((3/5)*(255/255),(3/5)*(255/255),(3/5)*(255/255),1);
		this.white.setSpecular((8/10)*(255/255),(8/10)*(255/255),(8/10)*(255/255),1);
        this.white.setShininess(300);

        this.black = new CGFappearance(this);
        this.black.setAmbient(0,0,0);
		this.black.setDiffuse(0.2,0.2,0.2);
		this.black.setSpecular(0.3,0.3,0.3);
        this.black.setShininess(300);

        this.gold = new CGFappearance(this);
        this.gold.setAmbient((1/5)*(255/255),(1/5)*(215/255),(1/5)*(0/255));
		this.gold.setDiffuse((3/5)*(255/255),(3/5)*(215/255),(3/5)*(0/255),1);
		this.gold.setSpecular((8/10)*(255/255),(8/10)*(215/255),(8/10)*(0/255),1);
        this.gold.setShininess(300);
        
        this.red = new CGFappearance(this);
        this.red.setAmbient((1/5)*(220/255),(1/5)*(20/255),(1/5)*(60/255));
		this.red.setDiffuse((3/5)*(220/255),(3/5)*(20/255),(3/5)*(60/255),1);
		this.red.setSpecular((8/10)*(220/255),(8/10)*(20/255),(8/10)*(60/255),1);
		this.red.setShininess(10);

        this.terrainAppearance = new CGFappearance(this.scene);
		this.terrainAppearance.setAmbient((1/4)*(139/255),(1/4)*(69/255),(1/4)*(19/255),1);
		this.terrainAppearance.setDiffuse((1/4)*(139/255),0.50,0.50,1);
		this.terrainAppearance.setSpecular(0.3,0.3,0.3,1);
		this.terrainAppearance.setShininess(10);
		
        //this.terrainAppearance.loadTexture("resources/images/tire.png");

        this.sand = new CGFappearance(this);
		this.sand.loadTexture("resources/images/sand.png");
        

		this.neon = new CGFappearance(this);
		this.neon.loadTexture("resources/images/neonGrid.jpg");

		this.desert = new CGFappearance(this);
		this.desert.loadTexture("resources/images/desertCamo.jpg");
		
		this.urban = new CGFappearance(this);
		this.urban.loadTexture("resources/images/urbanCamo.jpg");

		this.jungle = new CGFappearance(this);
		this.jungle.loadTexture("resources/images/woodsCamo.jpg");
		
		this.professor = new CGFappearance(this);
		this.professor.loadTexture("resources/images/professor.png");
		
		this.usa = new CGFappearance(this);
		this.usa.loadTexture("resources/images/USA.png");

		
		//RESKINS 
        var altimetry = [
        [3.0, 5.0, 2.0, 4.0, 2.5, 2.4, 2.3, 0.0, 0.0,10.0,1.0], 
        [2.0, 0.0, 0.0, 4.0, 7.5, 6.4, 4.3, 0.0, 0.0,8.0,3.0], 
        [0.0, 0.0, 0.0, .0, 0.0, 0.0, 0.0, 0.0, 0.0,6.0,2.0], 
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,5.0,6.0], 
        [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-2.0,9.0], 
        [6.4, 3.0, 2.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0,4.0,9.0], 
        [2.0, 7.0, -1.0, -3.0, 0.0, 0.0, 0.0, 0.0, 0.0,3.0,9.0], 
        [6.4, 2.0, 6.0, 2.0, 5.0, 0.0, 0.0, 0.0, 0.0,9.0,9.0], 
        [8.0, -1.0, 2.0, 0.0, 2.5, 3.4, 2.3, 0.0, 0.0,3.0,3.0],
        [3.0, 5.0, 2.0, 4.0, 2.5, 2.4, 2.3, 0.0, 0.0,7.0,1.0],
        [2.0, 3.0, 2.0, 4.0, 7.5, 6.4, 4.3, 1.3, 0.0,10.0,3.0]
        ]; 
 
        this.chao = new MyTerrain(this,10,altimetry); 
		
		
        
			 
		this.vehicleAppearances = [this.red, this.gold, this.white, this.neon, this.desert, this.urban, this.jungle, this.professor, this.usa];
		this.vehicleAppearanceList = {
			
			'red' : 0,
			'gold' : 1,
			'white' : 2,
			'neon' : 3,
			'desert' : 4,
			'urban' : 5,
			'jungle' : 6,
			'professor': 7,
			'usa': 8
		};
		
		this.currentAppearance = 0;

	
		

        // NOTE: OpenGL transformation matrices are transposed

        // Translate (5, 0, 2)

        this.tra = [  1.0, 0.0, 0.0, 0.0,
                    0.0, 1.0, 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    5.0, 0.0, 2.0, 1.0  ];

        // Rotate 30 degrees around Y
        // These constants would normally be pre-computed at initialization time
        // they are placed here just to simplify the example

        this.deg2rad=Math.PI/180.0;
        var a_rad = 30.0 * this.deg2rad;
        var cos_a = Math.cos(a_rad);
        var sin_a = Math.sin(a_rad);

        this.rot = [ cos_a,  0.0,  -sin_a,  0.0,
                    0.0,    1.0,   0.0,    0.0,
                    sin_a,  0.0,   cos_a,  0.0,
                    0.0,    0.0,   0.0,    1.0 ];

        // Scaling by (5,2,1)

        this.sca = [ 5.0, 0.0, 0.0, 0.0,
                    0.0, 2.0, 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0  ];

    };

    initLights()
    {

        this.lights[0].setPosition(2, 2, 5, 1);
        this.lights[0].setDiffuse(1.0,1.0,1.0,0.5);
        this.lights[0].enable();
        this.lights[0].update();
        
        
		this.lights[1].setPosition(0, 20, 0, 1); 
        this.lights[1].setDiffuse(1.0,1.0,1.0,1.0); 
        this.lights[1].enable(); 
        this.lights[1].update(); 

    };

    initCameras()
    {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    };

    setDefaultAppearance()
    {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    };

    display()
    {
        // ---- BEGIN Background, camera and axis setup

        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();

        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

      
        // Draw axis
		if(this.AxisSwitch){
	   this.axis.display();
		}


        this.setDefaultAppearance();

        // ---- END Background, camera and axis setup

        // ---- BEGIN Geometric transformation section
        //this.pushMatrix();
        //this.translate(0,5,0);
        //this.obj.display();
        // Multiplication of the previous transformations
        //this.multMatrix(this.tra);     // GT = GT * tra
        //this.popMatrix();
        //this.translate(5,0,2);
        //this.multMatrix(this.rot);     // GT = GT * rot
        //this.rotate(30*Math.PI/180.0,0,1,0);
        //this.multMatrix(this.sca);     // GT = GT * sca
        //this.scale(5,2,1);
        // ---- END Geometric transformation section

        
		this.pushMatrix();
		this.translate(this.vehicle.carX, 0.55, this.vehicle.carY);
		this.vehicle.display();
		this.popMatrix();
		
		this.pushMatrix();
		this.rotate(3/2*Math.PI, 1, 0, 0);
		this.scale(50, 50, 0.3);
		this.sand.apply();
		this.chao.display();
        this.popMatrix();  

        //CRANE
        this.pushMatrix();
        this.translate(-20,0,-10);
        this.rotate(180*Math.PI/180,0,1,0);
		this.crane.display();
        this.popMatrix();

        this.pushMatrix();
        this.black.apply();
        this.translate(-14,0.2,-10);
        this.scale(7,1,5);
        this.rotate(270*Math.PI/180,1,0,0);
        this.park.display();
        this.popMatrix();
        //}


        //this.translate(5,0,2);
        //this.rotate(Math.PI*30/180.0,0,1,0);
        //this.scale(5,2,1);

        // ---- BEGIN Primitive drawing section
        //this.pushMatrix();
        //this.translate(2,0,0);
        //this.obj1.display();
        //this.popMatrix();
        //this.obj.display();
        // ---- END Primitive drawing section
		
		//this.chao.display();

        

    };
	
	checkKeys()
		{
		var text="Keys pressed: ";
		var keysPressed=false;
		if (this.gui.isKeyPressed("KeyW"))
		{
		text+=" W ";
		keysPressed=true;
	//	this.vehicle.move('W');
		}
		if (this.gui.isKeyPressed("KeyS"))
		{
		text+=" S ";
		keysPressed=true;
        }
        if (this.gui.isKeyPressed("KeyA"))
		{
		text+=" A ";
		keysPressed=true;
        }
        if (this.gui.isKeyPressed("KeyD"))
		{
		text+=" D ";
		keysPressed=true;
		}
		if (keysPressed)
		console.log(text);
		}

	

	update(currTime) {
		
        this.checkKeys();
        this.vehicle.move();
		//this.crane.move();
	
};
};