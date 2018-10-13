(function(global) {
  class tvforest extends ImageNode {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });
    }

    render() {
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);
      this.ctx.drawImage(this.imageElement, 0, 0);

      const grey = '#909090';
      this.ctx.fillStyle = grey;

      this.ctx.beginPath();
      this.ctx.ellipse(1211,
                       356,
                       13,
                       13,
                       0, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.ellipse(1262,
                       381,
                       13,
                       13,
                       0, 0, Math.PI * 2);
      this.ctx.fill();


      // 1496 x 195

      if (BEAN >= 1739) {
        // start eye blink 
        const closeEye = this.frame <= 3359 ? easeOut(0, 1, (this.frame - 3344) / 10) : easeIn(1, 0, (this.frame - 3359)/ 10)
        this.ctx.beginPath();
        this.ctx.ellipse(1496 + (90 * closeEye),
                          160,
                          20 + (100 * closeEye),
                          35 + (17 * closeEye),
                          0,
                          Math.PI / 2,(3* Math.PI )/ 2)
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.ellipse( 1658 - (90 * closeEye),
                          164,
                          20 + (100 * closeEye),
                          35 + (19 * closeEye),
                          0,
                          -Math.PI/2,
                          Math.PI/2)
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    getImageName() {
      return 'res/tvforest.png';
    }
  }

  global.tvforest = tvforest;
})(this);
