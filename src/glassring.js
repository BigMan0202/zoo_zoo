(function(global) {
  class glassring extends ImageNode {
    constructor(id) {
      super(id);

      this.tounge0 = document.createElement('img');
      Loader.load('res/tounge1.png', this.tounge1, () => null);
      this.tounge2 = document.createElement('img');
      Loader.load('res/tounge2.png', this.tounge2, () => null);
      this.tounge3 = document.createElement('img');
      Loader.load('res/tounge3.png', this.tounge3, () => null);
      this.tounge4 = document.createElement('img');
      Loader.load('res/tounge4.png', this.tounge4, () => null);
    }

    getImageName() {
      return 'res/glassring.png';
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width / 1920);

      if (this.frame % 8 !== 0) {
        const saddle ='#522e22';
        this.ctx.fillStyle = saddle;
        this.ctx.beginPath();
        this.ctx.moveTo(389, 298);
        this.ctx.lineTo(458, 272);
        this.ctx.lineTo(473, 296);
        this.ctx.lineTo(407, 343);
        this.ctx.lineTo(389, 298);
        this.ctx.fill();
      }

      if (this.frame % 8 === 1 || this.frame % 8 === 7) {
        this.ctx.drawImage(this.tounge1, 396, 275);
      } else if (this.frame % 8 === 2 || this.frame % 8 === 6) {
        this.ctx.drawImage(this.tounge2, 395, 275);
      } else if (this.frame % 8 === 3 || this.frame % 8 === 5) {
        this.ctx.drawImage(this.tounge3, 395, 275);
      } else if (this.frame % 8 === 4) {
        this.ctx.drawImage(this.tounge4, 395, 275);
      }

      this.ctx.restore();
    }
  }

  global.glassring = glassring;
})(this);
