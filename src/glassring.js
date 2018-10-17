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

    update(frame) {
      super.update(frame);

      const beans = [
        1, 21, 33, 45, 49, 57, 69, 81,
        97, 117, 129, 141, 145, 153, 165, 169, 177, 181, 189,
        193, 201, 203, 205, 213, 225, 237, 241, 249, 261, 273, 285,
        289, 301, 321, 325, 333, 337, 345, 357, 361, 369, 373, 381,
      ];

      if (BEAT && beans.includes((BEAN - 192) % 384)) {
        this.throb = 1.08;
      } else {
        this.throb = Math.max(1, this.throb - .007);
      }
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

      const scale = this.throb;

      this.beatRegions = [
        {x: 1173, y: 331, width: 96, height: 103, rotation: -.1},
        {x: 1052, y: 103, width: 101, height: 95, rotation: .05},
        {x: 1216, y: 492, width: 70, height: 70, rotation: .05},
        {x: 1193, y: 206, width: 44, height: 52, rotation: -.08},
        {x: 909, y: 77, width: 67, height: 74, rotation: .03},
      ];

      for (const beatRegion of this.beatRegions) {
        this.ctx.save();
        this.ctx.translate(beatRegion.x + beatRegion.width / 2, beatRegion.y + beatRegion.height / 2);
        this.ctx.rotate(beatRegion.rotation);
        this.ctx.drawImage(
          this.imageElement,
          beatRegion.x, beatRegion.y,
          beatRegion.width, beatRegion.height,
          -beatRegion.width / 2 * scale, -beatRegion.height / 2 * scale,
          beatRegion.width * scale, beatRegion.height * scale
        );
        this.ctx.restore();
      }

      this.ctx.restore();
    }
  }

  global.glassring = glassring;
})(this);
