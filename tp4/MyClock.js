/**
 * MyClock
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyClock extends CGFobject
{
	constructor()
	{
		super(scene);
		h = new MyClockHand(...);
		m = new MyClockHand(...);
    s = new MyClockHand(...);
    this.initBuffers();
	};
  update(timestamp){
    h.setAngle();
    m.setAngle();
    s.setAngle();
  };
  display(){
    //imagem
    h.display();
    m.display();
    s.display();
  };
};
