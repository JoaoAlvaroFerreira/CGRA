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


        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

      
        this.axis =  new CGFaxis(this);
		this.vehicle = new MyVehicle(this);
        //this.plane = new Plane(this,TERRAIN_DIVISIONS,-25,-25,26,26);

        this.enableTextures(true);

		//MyInterface Variables
		this.Lights1=true; 
		this.Lights2=false;
		this.AxisSwitch = true;
		this.Brightness = 3;
		this.setUpdatePeriod(1000 / 60);

        this.white = new CGFappearance(this);
        this.white.setAmbient((1/5)*(255/255),(1/5)*(255/255),(1/5)*(255/255));
		this.white.setDiffuse((3/5)*(255/255),(3/5)*(255/255),(3/5)*(255/255),1);
		this.white.setSpecular((8/10)*(255/255),(8/10)*(255/255),(8/10)*(255/255),1);
        this.white.setShininess(300);

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

        this.terrainApperance = new CGFappearance(this.scene);
		this.terrainApperance.setAmbient((1/4)*(139/255),(1/4)*(69/255),(1/4)*(19/255),1);
		this.terrainApperance.setDiffuse((1/4)*(139/255),0.50,0.50,1);
		this.terrainApperance.setSpecular(0.3,0.3,0.3,1);
		this.terrainApperance.setShininess(10);
        //this.terrainApperance.loadTexture("resources/images/tire.png");
		
		this.neon = new CGFappearance(this);
        this.neon.setAmbient((1/5)*(220/255),(1/5)*(20/255),(1/5)*(60/255));
		this.neon.setDiffuse((3/5)*(220/255),(3/5)*(20/255),(3/5)*(60/255),1);
		this.neon.setSpecular((8/10)*(220/255),(8/10)*(20/255),(8/10)*(60/255),1);
		this.neon.setShininess(10);
		this.neon.loadTexture("resources/images/neonGrid.jpg");

		this.desert = new CGFappearance(this);
        this.desert.setAmbient((1/5)*(220/255),(1/5)*(20/255),(1/5)*(60/255));
		this.desert.setDiffuse((3/5)*(220/255),(3/5)*(20/255),(3/5)*(60/255),1);
		this.desert.setSpecular((8/10)*(220/255),(8/10)*(20/255),(8/10)*(60/255),1);
		this.desert.setShininess(10);
		this.desert.loadTexture("resources/images/desertCamo.jpg");
		
		this.urban = new CGFappearance(this);
        this.urban.setAmbient((1/5)*(220/255),(1/5)*(20/255),(1/5)*(60/255));
		this.urban.setDiffuse((3/5)*(220/255),(3/5)*(20/255),(3/5)*(60/255),1);
		this.urban.setSpecular((8/10)*(220/255),(8/10)*(20/255),(8/10)*(60/255),1);
		this.urban.setShininess(10);
		this.urban.loadTexture("resources/images/urbanCamo.jpg");

		this.jungle = new CGFappearance(this);
        this.jungle.setAmbient((1/5)*(220/255),(1/5)*(20/255),(1/5)*(60/255));
		this.jungle.setDiffuse((3/5)*(220/255),(3/5)*(20/255),(3/5)*(60/255),1);
		this.jungle.setSpecular((8/10)*(220/255),(8/10)*(20/255),(8/10)*(60/255),1);
		this.jungle.setShininess(10);
		this.jungle.loadTexture("resources/images/woodsCamo.jpg");

		
		//RESKINS
		
		
        
			 
		this.vehicleAppearances = [this.red, this.gold, this.white, this.neon, this.desert, this.urban, this.jungle];
		this.vehicleAppearanceList = {
			
			'red' : 0,
			'gold' : 1,
			'white' : 2,
			'neon' : 3,
			'desert' : 4,
			'urban' : 5,
			'jungle' : 6
		};
		
		this.vehiclePattern = 'red';
		this.currentAppearance = this.vehicleAppearanceList[this.vehiclePattern];

	
		

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
        this.lights[0].setDiffuse(1.0,1.0,1.0,1.0);
        this.lights[0].enable();
        this.lights[0].update();

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


		this.vehicle.display();

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
		}
		if (this.gui.isKeyPressed("KeyS"))
		{
		text+=" S ";
		keysPressed=true;
		}
		if (keysPressed)
		console.log(text);
		}

	

	update(currTime) {
		
		this.currentAppearance = this.vehicleAppearanceList[this.vehiclePattern];
		
		this.checkKeys();
	
};
	
	

};
