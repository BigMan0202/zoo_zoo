(function(global) {
  class dudes extends ImageNode {
    getImageName() {
      return 'res/dudes.png';
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);

      const handT = lerp(0, 1, (this.frame - 7015) / 500);
      const saddle = '#522e22';
      this.ctx.fillStyle = saddle;
      this.ctx.fillRect(880, 91, 430, 213);
      this.ctx.save();
      this.ctx.translate(lerp(1150, 1070, handT), lerp(0, 100, handT));
      this.ctx.rotate(lerp(.3, 0, handT));
      this.ctx.drawImage(
        this.imageElement,
        880, 91,
        430, 193,
        -200, 0,
        430, 193
      );

      this.ctx.restore();

      this.ctx.restore();
    }
  }

  global.dudes = dudes;
})(this);
