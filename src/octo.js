(function(global) {
  class octo extends NIN.Node {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });

      this.output = {
        canvas: document.createElement('canvas'),
        x: 680 - 960,
        y: 330 - 540,
        zoom: 4,
        rotation: -130.97 / 360 * Math.PI * 2,
      };
      this.outputs.render.setValue(this.output);

      this.ctx = this.output.canvas.getContext('2d');
      this.resize();

      this.imageElement = document.createElement('img');
      Loader.load('res/octo.png', this.imageElement, () => null);

      this.eyePositions = [
        {
          x: 728,
          y: 612,
          radius: 15,
          openBean: 24,
          closeBean: 48,
        },
        {
          x: 818,
          y: 611,
          radius: 10,
          openBean: 11,
          closeBean: 17,
        },
        {
          x: 895,
          y: 605,
          radius: 10,
          openBean: 25,
          closeBean: 29,
        },
        {
          x: 965,
          y: 587,
          radius: 10,
          openBean: 5,
          closeBean: 35,
        },
        {
          x: 778,
          y: 649,
          radius: 10,
          openBean: 25,
          closeBean: 45,
        },
        {
          x: 860,
          y: 651,
          radius: 13,
          openBean: 8,
          closeBean: 42,
        },
        {
          x: 931,
          y: 653,
          radius: 15,
          openBean: 10,
          closeBean: 40,
        },
        {
          x: 860,
          y: 419,
          radius: 18,
          openBean: 17,
          closeBean: 24,
        },
        {
          x: 950,
          y: 402,
          radius: 20,
          openBean: 17,
          closeBean: 24,
        },
      ];
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
      const silver = '#c1c1c1';
      const doubleColonialWhite = '#eedda5';
      const shiraz = '#b80d13';
      const saddle ='#522e22';
      const black = '#000000';

      this.ctx.fillStyle = doubleColonialWhite;
      for (const eyePosition of this.eyePositions) {
        if (BEAN % 48 > eyePosition.openBean && BEAN % 48 < eyePosition.closeBean) {
          this.ctx.beginPath();
          this.ctx.ellipse(eyePosition.x,
                           eyePosition.y,
                           eyePosition.radius,
                           eyePosition.radius,
                           0, 0, Math.PI * 2);
          this.ctx.fill();
        }
      }

      this.ctx.restore();
    }
  }

  global.octo = octo;
})(this);
