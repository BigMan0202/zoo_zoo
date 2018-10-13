(function(global) {
  class tvforest extends NIN.Node {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });

      this.output = {
        canvas: document.createElement('canvas'),
        x: 1208 - 960,
        y: 414 - 540,
        zoom: 4,
        rotation: -27.45 / 360 * Math.PI * 2,
      };
      this.outputs.render.setValue(this.output);

      this.ctx = this.output.canvas.getContext('2d');
      this.resize();

      this.imageElement = document.createElement('img');
      Loader.load('res/tvforest.png', this.imageElement, () => null);
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

      this.ctx.restore();
    }
  }

  global.tvforest = tvforest;
})(this);
