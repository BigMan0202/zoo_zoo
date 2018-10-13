(function(global) {
  class seamonster extends NIN.Node {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });

      this.output = {
        canvas: document.createElement('canvas'),
        x: 0,
        y: 0,
        zoom: 4,
        rotation: -3.48 / 360 * Math.PI * 2,
      };
      this.outputs.render.setValue(this.output);

      this.ctx = this.output.canvas.getContext('2d');
      this.resize();

      this.imageElement = document.createElement('img');
      Loader.load('res/seamonster.png', this.imageElement, () => null);
      this.sunElement = document.createElement('img');
      Loader.load('res/sun.png', this.sunElement, () => null);
    }

    update(frame) {
      super.update(frame);
      this.frame = frame;
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
      this.ctx.translate(409, 209);
      this.ctx.rotate(0.72 - this.frame / 30);
      this.ctx.drawImage(
        this.sunElement,
        -283.5, -271.5
      );
      this.ctx.restore();

      this.ctx.restore();
    }
  }

  global.seamonster = seamonster;
})(this);
