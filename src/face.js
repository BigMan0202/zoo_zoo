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

      this.startAni1 = 1007;
      this.startAni2 = 1126;
      this.startAni3 = 1214;
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);
      this.ctx.translate(1920 / 2, 1080 / 2);

      this.ctx.fillStyle = '#522e22';
      this.ctx.fillRect(-100, -100, 50, 50);
      this.ctx.fillRect(70, -110, 50, 50);
      this.ctx.save()
      this.ctx.translate(-83, -80);
      this.ctx.fillStyle = '#eedda5';
      const size = 25;
      this.ctx.rotate(this.frame / 60);
      this.ctx.fillRect(-size / 2, -size / 2, size, size);
      this.ctx.restore();
      this.ctx.save();
      this.ctx.translate(87, -89);
      this.ctx.rotate(this.frame / 60);
      this.ctx.translate(0, 2.5);
      this.ctx.fillStyle = '#eedda5';
      this.ctx.beginPath();
      for(let i = 0; i < 4; i++) {
        const angle = i / 3;
        const x = size / 2 * Math.cos(angle * Math.PI * 2) * 1.41;
        const y = size / 2 * Math.sin(angle * Math.PI * 2) * 1.41;
        this.ctx.lineTo(x, y);
      }
      this.ctx.fill();
      this.ctx.restore();


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

      if (BEAN <= 550){
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
      } else if (BEAN < 590) {
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
