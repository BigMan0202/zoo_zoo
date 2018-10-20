(function(global) {
  class ninjadev extends ImageNode {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });

      this.nin = document.createElement('img');
      Loader.load('res/nin.png', this.nin, () => null);
      this.ja = document.createElement('img');
      Loader.load('res/ja.png', this.ja, () => null);
      this.dev = document.createElement('img');
      Loader.load('res/dev.png', this.dev, () => null);

      this.fly1 = document.createElement('img');
      Loader.load('res/fly1.png', this.fly1, () => null);
      this.fly2 = document.createElement('img');
      Loader.load('res/fly2.png', this.fly2, () => null);
      this.fly3 = document.createElement('img');
      Loader.load('res/fly3.png', this.fly3, () => null);

      this.sun = document.createElement('img');
      Loader.load('res/sun.png', this.sun, () => null);
    }

    getImageName() {
      return 'res/ninjadev.png';
    }

    update(frame) {
      super.update(frame);
      this.frame = frame;

      const tStart = (frame - 5500) / 60;

      this.flyPosition1 = {
        x: 113 + lerp(0, Math.sin(frame / 20) * 10, tStart) + 255/2,
        y: 252 + lerp(0, Math.cos(frame / 12) * 10, tStart) + 268/2,
        rotation: lerp(0, Math.sin(frame / 40) / 4, tStart),
      };
      this.flyPosition2 = {
        x: 1224 + lerp(0, Math.sin(frame / 10) * 10, tStart) + 261/2,
        y: 175 + lerp(0, Math.cos(frame / 5) * 8, tStart) + 249/2,
        rotation: lerp(0, Math.sin(frame / 50) / 2, tStart),
      };
      this.flyPosition3 = {
        x: 1160 + lerp(0, Math.sin(frame / 15) * 12, tStart) + 264/2,
        y: 772 + lerp(0, Math.cos(frame / 10) * 10, tStart) + 239/2,
        rotation: lerp(0, (3.5 + frame / 100) % Math.PI * 2, tStart),
      };
    }

    render(renderer) {
      super.render(renderer);
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);

      const startbean = 6000;

      const ninX = 400;
      const ninY = 346;
      const jaX = 806;
      const jaY = 346;
      const devX = 1039;
      const devY = 346;
      const fly1X = 200;
      const fly1Y = 200;

      this.ctx.fillStyle = '#111111';
      this.ctx.fillRect(385,331,1173,416);

      this.ctx.save();
      this.ctx.translate(this.flyPosition1.x, this.flyPosition1.y);
      this.ctx.rotate(this.flyPosition1.rotation);
      this.ctx.drawImage(this.fly1, -255/2, -268/2, 127.5, 134);
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(this.flyPosition2.x, this.flyPosition2.y);
      this.ctx.rotate(this.flyPosition2.rotation);
      this.ctx.drawImage(this.fly2, -261/2, -249/2, 127.5, 134);
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(this.flyPosition3.x, this.flyPosition3.y);
      this.ctx.rotate(this.flyPosition3.rotation);
      this.ctx.drawImage(this.fly3, -264/2, -239/2, 127.5, 134);
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(651, 152);
      this.ctx.rotate(0.72 - this.frame / 40);
      this.ctx.rotate(easeIn(0, -12, (this.frame - 5850 )/ 500));
      this.ctx.drawImage(this.sun, -283.5/4, -271.5/4, 283.5/2, 271.5/2);
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(319, 825);
      this.ctx.rotate(0.72 - this.frame / 40);
      this.ctx.rotate(easeIn(0, -12, (this.frame - 5850 )/ 500));
      this.ctx.drawImage(this.sun, -283.5/4, -271.5/4, 283.5/2, 271.5/2);
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(1615, 616);
      this.ctx.rotate(0.72 - this.frame / 30);
      this.ctx.rotate(easeIn(0, -12, (this.frame - 5850 )/ 500));
      this.ctx.drawImage(this.sun, -283.5/4, -271.5/4, 283.5/2, 271.5/2);
      this.ctx.restore();

      if (BEAN >= startbean) {
        this.ctx.drawImage(this.nin, ninX, ninY);
      }
      if (BEAN >= startbean + 20) {
        this.ctx.drawImage(this.ja, jaX, jaY);
      }
      if (BEAN >= startbean + 20 + 20) {
        this.ctx.drawImage(this.dev, devX, devY);
      }

      this.ctx.restore();
    }
  }

  global.ninjadev = ninjadev;
})(this);
