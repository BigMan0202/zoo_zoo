(function(global) {
  class radio extends ImageNode {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });

      this.jigglers = [
        {
          x: 883,
          y: 564,
          width: 220,
          height: 160,
          speed: .1,
          amount: .1,
        },
        {
          x: 715,
          y: 754,
          width: 192,
          height: 198,
          speed: .15,
          amount: .05,
        },
        {
          x: 907,
          y: 300,
          width: 256,
          height: 108,
          speed: .15,
          amount: .05,
        },
        {
          x: 853,
          y: 40,
          width: 209,
          height: 180,
          speed: .03,
          amount: .03,
        },
        {
          x: 185,
          y: 680,
          width: 245,
          height: 108,
          speed: .05,
          amount: .04,
        },
        {
          x: 138,
          y: 432,
          width: 242,
          height: 90,
          speed: .08,
          amount: .07,
        },
        {
          x: 202,
          y: 172,
          width: 210,
          height: 178,
          speed: .09,
          amount: .06,
        },
      ];
    }


    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(16 * GU / 1920, 16 * GU / 1920);

      for (const jiggler of this.jigglers) {
        this.ctx.save();
        this.ctx.translate(jiggler.x + 60, jiggler.y + 60);
        this.ctx.rotate(Math.sin(this.frame * jiggler.speed) * jiggler.amount);
        this.ctx.drawImage(
          this.imageElement,
          jiggler.x, jiggler.y,
          jiggler.width, jiggler.height,
          -60, -60,
          jiggler.width, jiggler.height);
        this.ctx.restore();
      }

      this.ctx.restore();
    }

    getImageName() {
      return 'res/radio.png';
    }
  }

  global.radio = radio;
})(this);
