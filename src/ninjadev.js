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
    }
    getImageName() {
      return 'res/ninjadev.png';
    }

    render(renderer) {
      super.render(renderer);
      const startbean = 6000;
      this.ctx.fillStyle = '#111111';
      this.ctx.fillRect(385,331,1173,416);

      const ninX = 400;
      const ninY = 346;
      const jaX = 806;
      const jaY = 346;
      const devX = 1039;
      const devY = 346;

      if (BEAN >= startbean) {
        this.ctx.drawImage(this.nin, ninX, ninY);
      }
      if (BEAN >= startbean + 20) {
        this.ctx.drawImage(this.ja, jaX, jaY);
      }
      if (BEAN >= startbean + 20 + 20) {
        this.ctx.drawImage(this.dev, devX, devY);
      }
    }
  }

  global.ninjadev = ninjadev;
})(this);
