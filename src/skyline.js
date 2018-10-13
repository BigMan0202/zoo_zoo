(function(global) {
  class skyline extends ImageNode {
    getImageName() {
      return 'res/skyline.png';
    }

    render() {
      return super.render();
    }

    stuff() {
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);
      this.ctx.globalAlpha = 0.2;
      this.ctx.drawImage(this.imageElement, 0, 0);
      this.ctx.fillStyle = '#eedda5';
      const width = 8;
      this.ctx.globalAlpha = 1;
      for(let i = 0; i < 6; i++) {
        for(let j = 0; j < 10; j++) {
          if((i ^ j ^ (BEAN / 4)) % 5 > 3) {
            this.ctx.fillStyle = '#eedda5';
            this.ctx.fillRect(1350 + i * width * 2, 485 + j * width * 1.5, width, width);
          } else {
            this.ctx.fillStyle = '#111';
          }
        }
      }

      this.ctx.fillStyle = '#eedda5';
      if(BEAN%96 >= 48) {
      this.ctx.fillStyle = '#B80D13';
      }
        switch((BEAN / 3 | 0) % (96 / 3)) {
          case 0:
            this.ctx.fill(new Path2D('M1255 421 l15 1 l -5 -48 l -25 2 Z'));
            break;
          case 4:
            this.ctx.fill(new Path2D('M1280 422 h20 l 5 -50 h -30 Z'));
            break;
          case 8:
            this.ctx.fill(new Path2D('M1310 422 l15 -1 l 10 -46 l -20 -2 Z'));
            break;

          case 16:
            this.ctx.fillRect(1270, 581, 40, 5);
            break;
          case 17:
            this.ctx.fillRect(1270, 547, 40, 5);
            break;
          case 18:
            this.ctx.fillRect(1270, 510, 40, 5);
            break;
          case 19:
            this.ctx.fillRect(1266, 476, 48, 5);
            break;
          case 20:
            this.ctx.fillRect(1270, 581, 40, 5);
            break;
        }

      this.ctx.restore();

      this.texture.needsUpdate = true;
      this.outputs.render.setValue(this.texture);
    }
  }

  global.skyline = skyline;
})(this);
