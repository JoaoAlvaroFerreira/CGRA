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


        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.wheel = new MyWheel(this,20,3);
        this.circle = new MyCircle(this,10);
        this.semi = new MyLamp(this,10,4);
        this.cube = new MyUnitCubeQuad(this);
        this.triang = new MyTriang(this);
        this.axis =  new CGFaxis(this);
        //this.plane = new Plane(this,TERRAIN_DIVISIONS,-25,-25,26,26);

        this.enableTextures(true);


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
        this.axis.display();

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
        this.red.apply();
        this.translate(1.61,1.38,1.25);
        this.rotate(90*Math.PI/180.0,0,0,1);
        this.rotate(90*Math.PI/180.0,1,0,0);
        this.scale(1.25,2.5,0.5);
        this.triang.display();
        this.popMatrix();

        
        this.pushMatrix();
        this.white.apply();
        this.translate(-0.4,0.5,-0.25);
        this.rotate(45*Math.PI/180.0,0,0,1);
        this.scale(0.53,0.1,0.5);
        this.cube.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0.4,0.5,-0.25);
        this.rotate(135*Math.PI/180.0,0,0,1);
        this.scale(0.53,0.1,0.5);
        this.cube.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0,0.68,-0.25);
        this.scale(0.53,0.1,0.5);
        this.cube.display();
        this.popMatrix();


        this.pushMatrix();
        this.translate(2.6,0.5,-0.25);
        this.rotate(45*Math.PI/180.0,0,0,1);
        this.scale(0.53,0.1,0.5);
        this.cube.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(3.4,0.5,-0.25);
        this.rotate(135*Math.PI/180.0,0,0,1);
        this.scale(0.53,0.1,0.5);
        this.cube.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(3,0.68,-0.25);
        this.scale(0.53,0.1,0.5);
        this.cube.display();
        this.popMatrix();


        this.pushMatrix();
        this.translate(2.6,0.5,2.75);
        this.rotate(45*Math.PI/180.0,0,0,1);
        this.scale(0.53,0.1,0.5);
        this.cube.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(3.4,0.5,2.75);
        this.rotate(135*Math.PI/180.0,0,0,1);
        this.scale(0.53,0.1,0.5);
        this.cube.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0,0.68,2.75);
        this.scale(0.53,0.1,0.5);
        this.cube.display();
        this.popMatrix();


        this.pushMatrix();
        this.translate(-0.4,0.5,2.75);
        this.rotate(45*Math.PI/180.0,0,0,1);
        this.scale(0.53,0.1,0.5);
        this.cube.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0.4,0.5,2.75);
        this.rotate(135*Math.PI/180.0,0,0,1);
        this.scale(0.53,0.1,0.5);
        this.cube.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(3,0.68,2.75);
        this.scale(0.53,0.1,0.5);
        this.cube.display();
        this.popMatrix();
        
        //light 1
        this.pushMatrix();
        this.gold.apply();
        this.translate(4,0.4,0.4);
        this.rotate(90*Math.PI/180.0,0,1,0);
        this.scale(0.3,0.3,0.3);
        this.circle.display();
        this.rotate(180*Math.PI/180.0,0,1,0);
        this.semi.display();
        this.translate(3,0,0);
        this.popMatrix();

        //light 2
        this.pushMatrix();
        this.translate(4,0.4,2);
        this.rotate(90*Math.PI/180.0,0,1,0);
        this.scale(0.3,0.3,0.3);
        this.circle.display();
        this.rotate(180*Math.PI/180.0,0,1,0);
        this.semi.display();
        this.popMatrix();

        //WindowsDoors
        this.pushMatrix();
        this.red.apply();
        this.scale(2.3,2,2.5);
        this.translate(0.2,0.5,0.5);
        this.cube.display();
        this.popMatrix();

        //Hood
        this.pushMatrix();
        this.scale(2.2,0.8,2.5);
        this.translate(1.2,0.6,0.5);
        this.cube.display();
        this.popMatrix();

        //*lowerbody
        this.pushMatrix();
        this.white.apply();
        //this.axleAppearance.apply();
        this.translate(1.5,0,1.25);
        this.scale(4.5,0.3,2.6);
        this.cube.display();
        this.popMatrix();


        //WHEELS
        this.pushMatrix();
        this.scale(0.55,0.55,0.55);
        this.rotate(180*Math.PI/180.0,0,1,0);
        this.wheel.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(3,0,0);
        this.scale(0.55,0.55,0.55);
        this.rotate(180*Math.PI/180.0,0,1,0);
        this.wheel.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(3,0,2.5);
        this.scale(0.55,0.55,0.55);
        this.wheel.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0,0,2.5);
        this.scale(0.55,0.55,0.55);
        this.wheel.display();
        this.popMatrix();
        


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

        

    };

};
