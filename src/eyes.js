(function(global) {
  class eyes extends ImageNode {
    getImageName() {
      return 'res/eyes.png';
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);

      const handT = lerp(0, 1, (this.frame - 6091) / (6461 - 6091));
      const saddle = '#522e22';
      this.ctx.fillStyle = saddle;
      this.ctx.beginPath();
      this.ctx.moveTo(880, 313);
      this.ctx.lineTo(993, 299);
      this.ctx.lineTo(995, 365);
      this.ctx.lineTo(923, 358);
      this.ctx.lineTo(874, 335);
      this.ctx.lineTo(880, 313);
      this.ctx.fill();
      this.ctx.save();
      this.ctx.translate(lerp(1010, 981, handT), lerp(283, 301, handT));
      this.ctx.rotate(lerp(.45, .3, handT));
      this.ctx.drawImage(
        this.imageElement,
        880, 313,
        114, 42,
        -80, 0,
        114, 42
      );
      this.ctx.restore();

      this.ctx.fillRect(lerp(910, 885, handT), lerp(270, 300, handT), 30, 25);

      this.ctx.restore();
    }
  }

  global.eyes = eyes;
})(this);
