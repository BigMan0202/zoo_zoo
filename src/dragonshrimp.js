(function(global) {
  class dragonshrimp extends ImageNode {
    getImageName() {
      return 'res/dragonshrimp.png';
    }

    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });

      this.eyePositions = [
        {
          x: 1332,
          y: 394,
          radius: 20,
          openBean: 6,
          closeBean: 40,
        },
        {
          x: 1065,
          y: 626,
          radius: 15,
          openBean: 11,
          closeBean: 42,
        },
        {
          x: 748,
          y: 628,
          radius: 15,
          openBean: 17,
          closeBean: 44,
        },
        {
          x: 523,
          y: 423,
          radius: 20,
          openBean: 25,
          closeBean: 46,
        },
        {
          x: 822,
          y: 211,
          radius: 20,
          openBean: 32,
          closeBean: 48,
        },
      ];
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(16 * GU / 1920, 16 * GU /  1920);
      this.ctx.drawImage(this.imageElement, 0, 0);

      const doubleColonialWhite = '#eedda5';

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

  global.dragonshrimp = dragonshrimp;
})(this);
