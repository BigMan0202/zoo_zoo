(function(global) {
  class holes extends NIN.Node {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });

      this.output = {
        canvas: document.createElement('canvas'),
        x: 740.64 - 960,
        y: 649 - 540,
        zoom: 4,
        rotation: -66.55 / 360 * Math.PI * 2,
      };
      this.outputs.render.setValue(this.output);

      this.ctx = this.output.canvas.getContext('2d');
      this.resize();

      this.imageElement = document.createElement('img');
      Loader.load('res/holes.png', this.imageElement, () => null);
      this.fly1 = document.createElement('img');
      Loader.load('res/fly1.png', this.fly1, () => null);
      this.fly2 = document.createElement('img');
      Loader.load('res/fly2.png', this.fly2, () => null);
      this.fly3 = document.createElement('img');
      Loader.load('res/fly3.png', this.fly3, () => null);
    }

    update(frame) {
      super.update(frame);
      this.frame = frame;

      this.flyPosition1 = {
        x: 220 + Math.sin(frame / 20) * 10 + 255/2,
        y: 120 + Math.cos(frame / 12) * 10 + 268/2,
        rotation: Math.sin(frame / 40) / 4,
      };
      this.flyPosition2 = {
        x: 1330 + Math.sin(frame / 10) * 10 + 261/2,
        y: 220 + Math.cos(frame / 5) * 8 + 249/2,
        rotation: Math.sin(frame / 50) / 2,
      };
      this.flyPosition3 = {
        x: 1200 + Math.sin(frame / 15) * 12 + 264/2,
        y: 665 + Math.cos(frame / 10) * 10 + 239/2,
        rotation: 3.5 + frame / 100,
      };
    }

    resize() {
      this.output.canvas.width = 16 * GU;
      this.output.canvas.height = 9 * GU;
    }

    render() {
      this.ctx.save();
      this.ctx.scale(16 * GU / 1920, 16 * GU /  1920);

      this.ctx.drawImage(this.imageElement, 0, 0);

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
