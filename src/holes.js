(function(global) {
  class holes extends ImageNode {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });
      this.fly1 = document.createElement('img');
      Loader.load('res/fly1.png', this.fly1, () => null);
      this.fly2 = document.createElement('img');
      Loader.load('res/fly2.png', this.fly2, () => null);
      this.fly3 = document.createElement('img');
      Loader.load('res/fly3.png', this.fly3, () => null);
    }

    getImageName() {
      return 'res/holes.png';
    }

    update(frame) {
      super.update(frame);
      this.frame = frame;

      const tStart = (frame - 3507) / 60;

      this.flyPosition1 = {
        x: 215 + lerp(0, Math.sin(frame / 20) * 10, tStart) + 255/2,
        y: 112 + lerp(0, Math.cos(frame / 12) * 10, tStart) + 268/2,
        rotation: lerp(0, Math.sin(frame / 40) / 4, tStart),
      };
      this.flyPosition2 = {
        x: 1320 + lerp(0, Math.sin(frame / 10) * 10, tStart) + 261/2,
        y: 215 + lerp(0, Math.cos(frame / 5) * 8, tStart) + 249/2,
        rotation: lerp(0, Math.sin(frame / 50) / 2, tStart),
      };
      this.flyPosition3 = {
        x: 1200 + lerp(0, Math.sin(frame / 15) * 12, tStart) + 264/2,
        y: 665 + lerp(0, Math.cos(frame / 10) * 10, tStart) + 239/2,
        rotation: lerp(0, (3.5 + frame / 100) % Math.PI * 2, tStart),
      };
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);

      this.ctx.save();
      this.ctx.translate(this.flyPosition1.x, this.flyPosition1.y);
      this.ctx.rotate(this.flyPosition1.rotation);
      this.ctx.drawImage(this.fly1, -255/2, -268/2);
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(this.flyPosition2.x, this.flyPosition2.y);
      this.ctx.rotate(this.flyPosition2.rotation);
      this.ctx.drawImage(this.fly2, -261/2, -249/2);
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(this.flyPosition3.x, this.flyPosition3.y);
      this.ctx.rotate(this.flyPosition3.rotation);
      this.ctx.drawImage(this.fly3, -264/2, -239/2);
      this.ctx.restore();

      this.ctx.restore();
    }
  }

  global.holes = holes;
})(this);
