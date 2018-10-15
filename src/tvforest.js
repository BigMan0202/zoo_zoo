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

      // Closed TV boy eyes
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

      // Animated nerdy tv boy eyes
      this.ctx.fillStyle = '#000000';
      this.ctx.beginPath();
      this.ctx.ellipse(808 + Math.sin(this.frame / 30),
                       272 + Math.sin(this.frame / 30) * 5,
                       4,
                       4,
                       0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.ellipse(840 + Math.sin(this.frame / 30),
                       338 + Math.sin(this.frame / 30) * 5,
                       4,
                       4,
                       0, 0, Math.PI * 2);
      this.ctx.fill();

      // Floating screaming tv boy
      const floatingT = (this.frame - 4265) / 200;
      this.ctx.fillStyle = grey;
      this.ctx.fillRect(248, 384, 152, 216);
      this.ctx.drawImage(
        this.imageElement,
        248, 384,
        152, 216,
        smoothstep(248, 290, floatingT), smoothstep(384, 391, floatingT),
        152, 216
      );
      //

      // Eating TV
      const eatingT = lerp(0, (Math.sin(this.frame / 10) + 1) / 2, (this.frame - 4245) / 20);
      this.ctx.fillRect(935, 912, 178, 84);
      this.ctx.drawImage(
        this.imageElement,
        935, 912,
        178, 84,
        lerp(935, 933, eatingT), lerp(912, 904, eatingT),
        178, 84
      );

      // Pointy ear tv
      // 617, 872
      // 56, 60
      this.ctx.save();
      this.ctx.fillRect(617, 882, 56, 50);
      this.ctx.translate(617, 872);
      this.ctx.rotate(lerp(0, .18 * Math.sin(this.frame / 15), (this.frame - 4245) / 60));
      this.ctx.drawImage(
        this.imageElement,
        617, 872,
        56, 60,
        0, 0,
        56, 60
      );
      this.ctx.restore();
      //

      const eyePosPerHalfBar = {
        107: {x: 1547, y: 135},
        108: {x: 1530, y: 125},
        109: {x: 1547, y: 135},
        110: {x: 1563, y: 135},
        111: {x: 1540, y: 142},
        112: {x: 1538, y: 125},
        113: {x: 1540, y: 135},
        114: {x: 1547, y: 135},
      };
      const currentHalfBar = (BEAN / 24) | 0;
      const currentEyePos = eyePosPerHalfBar[currentHalfBar] || {x: 1547, y: 135};
      const doubleColonialWhite = '#eedda5';
      this.ctx.fillStyle = doubleColonialWhite;
      this.ctx.fillRect(1547, 135, 59, 59);
      this.ctx.drawImage(
        this.imageElement,
        1547, 135,
        59, 59,
        currentEyePos.x, currentEyePos.y,
        59, 59
      );

      // 1496 x 195

      // start eye blink
      this.ctx.fillStyle = grey;
      const closeEye = this.frame < 4300
        ? easeOut(0, 1, (this.frame - 4285) / 10)
        : easeIn(1, 0, (this.frame - 4300) / 10);
      this.ctx.beginPath();
      this.ctx.ellipse(1496 + (90 * closeEye),
                        160,
                        20 + (100 * closeEye),
                        35 + (17 * closeEye),
                        0,
                        Math.PI / 2,(3* Math.PI )/ 2);
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.ellipse( 1658 - (90 * closeEye),
                        164,
                        20 + (100 * closeEye),
                        35 + (19 * closeEye),
                        0,
                        -Math.PI/2,
                        Math.PI/2);
      this.ctx.fill();

      this.ctx.restore();
    }

    getImageName() {
      return 'res/tvforest.png';
    }
  }

  global.tvforest = tvforest;
})(this);
