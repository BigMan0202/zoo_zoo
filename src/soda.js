(function(global) {
  class soda extends ImageNode {
    getImageName() {
      return 'res/soda.png'; 
    }

    constructor(id) {
    	super(id);

    	this.startStarShootFrame = 3138;
      // shoots in clockwise, starting from top left
    	this.shoot1 = {x: 1048, y: 161};
      this.shoot2 = {x: 1083, y: 141};
      this.shoot3 = {x: 1113, y: 183};
      this.shoot4 = {x: 1092, y: 213};
      this.shoot5 = {x: 1052, y: 201};

    }


    render() {
    	super.render();
    	this.ctx.save();
    	this.ctx.scale(this.canvas.width / 1920, this.canvas.width / 1920);

    	// star animation!
    	// Start BEAN 1632 / frame 3138
    	// end BEAN 2000 / frame 3779
    	if (BEAN >= 1632){
    		const frameInAnimation = (this.frame - this.startStarShootFrame) % 100
        const move = lerp(0, 1, frameInAnimation / 70);
        const seeThrough = easeIn(1, 0, frameInAnimation / 70);
        this.ctx.fillStyle = "rgba(238,221,165," + seeThrough + ")";
        this.ctx.save();
        this.ctx.translate(1078, 178);
        this.ctx.save();
        // left
        this.ctx.rotate(0.869);
        this.ctx.fillRect(0,52+(100 * move),10, 100*move);
        this.ctx.restore();
        this.ctx.save();
        // top left
        this.ctx.rotate(2.3);
        this.ctx.fillRect(0,52+(100 * move),10, 100*move);
        this.ctx.restore();
        this.ctx.save();
        // top right
        this.ctx.rotate(3.52);
        this.ctx.fillRect(0,52+(100 * move),10, 100*move);
        this.ctx.restore();
        this.ctx.save();
        // right
        this.ctx.rotate(4.8);
        this.ctx.fillRect(0,52+(100 * move),10, 100*move);
        this.ctx.restore();
        this.ctx.save();
        // bottom
        this.ctx.rotate(5.96);
        this.ctx.fillRect(0,52+(100 * move),10, 100*move);
        this.ctx.restore();
        this.ctx.restore();

    	}

    	// top left star corner 1048 x 161

    	// top right 1083 x 141

    	// right 1113 x 183

    	// bottom 1092 x 213

    	// left 1052 x 201

    	this.ctx.restore()

    }
  }

  global.soda = soda;
})(this);
