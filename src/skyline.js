(function(global) {
  class skyline extends ImageNode {
    getImageName() {
      return 'res/skyline.png';
    }

    constructor(id) {
      super(id);
      this.texture = CanvasTexturePool._createTexture();
      this.canvas = this.texture.canvas;
      this.ctx = this.canvas.getContext('2d');
    }

    resize() {
      this.canvas.width = Math.min(16 * GU * 4, 1920);
      this.canvas.height = Math.min(9 * GU * 4, 1080);
    }

    update() {
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);
      this.ctx.globalAlpha = 0.2;
      this.ctx.drawImage(this.imageElement, 0, 0);
      if(BEAN >= 5040) {
        return;
      }
      this.ctx.fillStyle = '#eedda5';
      const width = 8;
      this.ctx.globalAlpha = 1;
      if(BEAN >= 384) {
        for(let i = 0; i < 5; i++) {
          for(let j = 0; j < 10; j++) {
            if((i ^ j ^ (BEAN / 4)) % 5 > 3) {
              this.ctx.fillStyle = '#eedda5';
              this.ctx.fillRect(1350 + i * width * 2, 485 + j * width * 1.5, width, width);
            } else {
              this.ctx.fillStyle = '#111';
            }
          }
        }
      }

      if(BEAN >= 384) {
        this.ctx.fillStyle = '#eedda5';
        if(BEAN % 48 > 24) {
          this.ctx.fillRect(1170, 540 - 10, 5, 5);
        }
        if(BEAN % (48 + 12) > 36) {
          this.ctx.fillRect(1085, 540 - 25, 5, 5);
        }
        if(BEAN % (12) > 6) {
          this.ctx.fillRect(590, 540 + 40, 10, 10);
        } else {
          this.ctx.fillRect(570, 540 + 40, 10, 10);
        }

        if((BEAN % 48) < 24) {
          this.ctx.fillStyle = '#b80d13';
          this.ctx.fillRect(1288, 540 - 360, 5, 5);
        }
        this.ctx.fillStyle = '#eedda5';


        this.ctx.globalAlpha = 0.2;
        for(let i = 0; i < 13; i++) {
          if((BEAN + i) % (32) > 16) {
            this.ctx.fillRect(997, 540 - 65 + 10 * i, 15, 3);
          }
        }
        this.ctx.globalAlpha = 1;

        this.ctx.fillRect(1110, 540, 10, 8);
        this.ctx.fillRect(925, 520, 10, 8);
      }

      this.ctx.fillStyle = '#eedda5';
        switch(BEAN % 96) {
          case 0:
            this.ctx.fill(new Path2D('M1255 421 l15 1 l -5 -48 l -25 2 Z'));
            break;
          case 12:
            this.ctx.fill(new Path2D('M1280 422 h20 l 5 -50 h -30 Z'));
            break;
          case 24:
            this.ctx.fill(new Path2D('M1310 422 l15 -1 l 10 -46 l -20 -2 Z'));
            break;

          case 48 - 4:
            this.ctx.fillRect(1270, 581, 40, 5);
            break;
          case 48:
            this.ctx.fillRect(1270, 547, 40, 5);
            break;
          case 48 + 8:
            this.ctx.fillRect(1270, 510, 40, 5);
            break;
          case 48 + 12 + 8:
            this.ctx.fillRect(1266, 476, 48, 5);
            break;
        }

      this.ctx.restore();
    }

    render() {
      this.texture.needsUpdate = true;
      this.outputs.render.setValue(this.texture);
    }
  }

  global.skyline = skyline;
})(this);
