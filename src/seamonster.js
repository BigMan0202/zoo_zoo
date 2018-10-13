(function(global) {
  class seamonster extends ImageNode {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });

      this.sunElement = document.createElement('img');
      Loader.load('res/sun.png', this.sunElement, () => null);
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(16 * GU / 1920, 16 * GU /  1920);

      this.ctx.save();
      this.ctx.translate(409, 209);
      this.ctx.rotate(0.72 - this.frame / 30);
      this.ctx.rotate(easeIn(0, -12, (this.frame - 3860 )/ 500));
      this.ctx.drawImage(
        this.sunElement,
        -283.5, -271.5
      );
      this.ctx.restore();

      this.ctx.restore();
    }

    getImageName() {
      return 'res/seamonster.png';
    }
  }

  global.seamonster = seamonster;
})(this);
