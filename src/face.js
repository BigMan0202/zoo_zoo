(function(global) {
  class face extends ImageNode {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });

      this.tooth1 = document.createElement('img');
      Loader.load('res/tooth1.png', this.tooth1, () => null);
      this.tooth2 = document.createElement('img');
      Loader.load('res/tooth2.png', this.tooth2, () => null);
      this.tooth3 = document.createElement('img');
      Loader.load('res/tooth3.png', this.tooth3, () => null);
      this.tooth4 = document.createElement('img');
      Loader.load('res/tooth4.png', this.tooth4, () => null);
      this.tooth5 = document.createElement('img');
      Loader.load('res/tooth5.png', this.tooth5, () => null);
      this.tooth6 = document.createElement('img');
      Loader.load('res/tooth6.png', this.tooth6, () => null);

      this.startAni1 = 1107;
      this.startAni2 = 1226;
      this.startAni3 = 1314;
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);
      this.ctx.translate(1920 / 2, 1080 / 2);


      const tooth1X = 782;
      const tooth1Y = 73;
      const tooth2X = tooth1X + 20;
      const tooth2Y = tooth1Y - 10;
      const tooth3X = tooth1X + 56;
      const tooth3Y = tooth1Y - 13;
      const tooth4X = tooth1X + 80;
      const tooth4Y = tooth1Y - 5;
      const tooth5X = tooth1X + 58;
      const tooth5Y = tooth1Y + 10;
      const tooth6X = tooth1X + 25;
      const tooth6Y = tooth1Y + 16;

      // first bean 459
      if (BEAN <= 606){
        if (this.frame >= this.startAni1)
          this.ctx.drawImage(this.tooth1, tooth1X, tooth1Y);
        if (this.frame >= this.startAni1 + 10)
          this.ctx.drawImage(this.tooth2, tooth2X, tooth2Y);
        if (this.frame >= this.startAni1 + 20)
          this.ctx.drawImage(this.tooth3, tooth3X, tooth3Y);
        if (this.frame >= this.startAni1 + 30)
          this.ctx.drawImage(this.tooth4, tooth4X, tooth4Y);
        if (this.frame >= this.startAni1 + 40)
          this.ctx.drawImage(this.tooth5, tooth5X, tooth5Y);
        if (this.frame >= this.startAni1 + 50)
          this.ctx.drawImage(this.tooth6, tooth6X, tooth6Y);
      } else if (BEAN < 684) {
        if (this.frame <= this.startAni2 + 50)
          this.ctx.drawImage(this.tooth1, tooth1X, tooth1Y);
        if (this.frame <= this.startAni2 + 40)
          this.ctx.drawImage(this.tooth2, tooth2X, tooth2Y);
        if (this.frame <= this.startAni2 + 30)
          this.ctx.drawImage(this.tooth3, tooth3X, tooth3Y);
        if (this.frame <= this.startAni2 + 20)
          this.ctx.drawImage(this.tooth4, tooth4X, tooth4Y);
        if (this.frame <= this.startAni2 + 10)
          this.ctx.drawImage(this.tooth5, tooth5X, tooth5Y);
        if (this.frame <= this.startAni2)
          this.ctx.drawImage(this.tooth6, tooth6X, tooth6Y);
      } else {
        if (this.frame <= this.startAni3 + 10)
          this.ctx.drawImage(this.tooth3, tooth3X, tooth3Y);
        if (this.frame > this.startAni3 + 10 && this.frame <= this.startAni3 + 30)
          this.ctx.drawImage(this.tooth4, tooth4X, tooth4Y);
        if (this.frame > this.startAni3 + 20 && this.frame <= this.startAni3 + 50)
          this.ctx.drawImage(this.tooth6, tooth6X, tooth6Y);
        if (this.frame > this.startAni3 + 20 && this.frame <= this.startAni3 + 40)
          this.ctx.drawImage(this.tooth1, tooth1X, tooth1Y);
        if (this.frame > this.startAni3 + 30 && this.frame <= this.startAni3 + 60)
          this.ctx.drawImage(this.tooth2, tooth2X, tooth2Y);
        if (this.frame > this.startAni3 + 50 && this.frame <= this.startAni3 + 70)
          this.ctx.drawImage(this.tooth4, tooth4X, tooth4Y);
        if (this.frame > this.startAni3 + 80 && this.frame <= this.startAni3 + 110)
          this.ctx.drawImage(this.tooth5, tooth5X, tooth5Y);
        if (this.frame > this.startAni3 + 83 && this.frame <= this.startAni3 + 110)
          this.ctx.drawImage(this.tooth3, tooth3X, tooth3Y);
        if (this.frame > this.startAni3 + 90 && this.frame <= this.startAni3 + 120)
          this.ctx.drawImage(this.tooth2, tooth2X, tooth2Y);
        if (this.frame > this.startAni3 + 100 && this.frame <= this.startAni3 + 130)
          this.ctx.drawImage(this.tooth1, tooth1X, tooth1Y);
        if (this.frame > this.startAni3 + 100 && this.frame <= this.startAni3 + 130)
          this.ctx.drawImage(this.tooth4, tooth4X, tooth4Y);
        if (this.frame > this.startAni3 + 120 && this.frame <= this.startAni3 + 140)
          this.ctx.drawImage(this.tooth3, tooth3X, tooth3Y);
        if (this.frame > this.startAni3 + 120 && this.frame <= this.startAni3 + 140)
          this.ctx.drawImage(this.tooth5, tooth5X, tooth5Y);
        if (this.frame > this.startAni3 + 140 && this.frame <= this.startAni3 + 160)
          this.ctx.drawImage(this.tooth2, tooth2X, tooth2Y);
        if (this.frame > this.startAni3 + 150 && this.frame <= this.startAni3 + 170)
          this.ctx.drawImage(this.tooth1, tooth1X, tooth1Y);
      }
      // end at 1176 (ani 3 is ~176 frames)

      this.ctx.restore();
    }

    getImageName() {
      return 'res/face.png';
    }
  }

  global.face = face;
})(this);
