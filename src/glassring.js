(function(global) {
  class glassring extends ImageNode {
    constructor(id) {
      super(id);

      this.tounge1 = document.createElement('img');
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

      const beans = [
        1, 21, 33, 45, 49, 57, 69, 81,
        97, 117, 129, 141, 145, 153, 165, 169, 177, 181, 189,
        193, 201, 203, 205, 213, 225, 237, 241, 249, 261, 273, 285,
        289, 301, 321, 325, 333, 337, 345, 357, 361, 369, 373, 381,
      ];

      if (beans.includes((BEAN - 192) % 384)) {
        const scale = 1.05;
        this.ctx.save();
        this.ctx.translate(1173 + 96 / 2, 331 + 103 / 2);
        this.ctx.rotate(-0.1);
        this.ctx.drawImage(
          this.imageElement,
          1173, 331,
          96, 103,
          -96 / 2 * scale, -103 / 2 * scale,
          96 * scale, 103 * scale
        );
        this.ctx.restore();

        this.ctx.save();
        this.ctx.translate(1052 + 101 / 2, 103 + 95 / 2);
        this.ctx.rotate(.05);
        this.ctx.drawImage(
          this.imageElement,
          1052, 103,
          101, 95,
          -101 / 2 * scale, -95 / 2 * scale,
          101 * scale, 95 * scale
        );
        this.ctx.restore();

        this.ctx.save();
        this.ctx.translate(1216 + 70 / 2, 492 + 70 / 2);
        this.ctx.rotate(.05);
        this.ctx.drawImage(
          this.imageElement,
          1216, 492,
          70, 70,
          -70 / 2 * scale, -70 / 2 * scale,
          70 * scale, 70 * scale
        );
        this.ctx.restore();

        this.ctx.save();
        this.ctx.translate(1193 + 44 / 2, 206 + 52 / 2);
        this.ctx.rotate(-.08);
        this.ctx.drawImage(
          this.imageElement,
          1193, 206,
          44, 52,
          -44 / 2 * scale, -52 / 2 * scale,
          44 * scale, 52 * scale
        );
        this.ctx.restore();

        this.ctx.save();
        this.ctx.translate(909 + 67 / 2, 77 + 74 / 2);
        this.ctx.rotate(.03);
        this.ctx.drawImage(
          this.imageElement,
          909, 77,
          67, 74,
          -67 / 2 * scale, -74 / 2 * scale,
          67 * scale, 74 * scale
        );
        this.ctx.restore();
      }

      this.ctx.restore();
    }
  }

  global.glassring = glassring;
})(this);
