(function(global) {
  class yolo extends ImageNode {
    getImageName() {
      return 'res/yolo.png';
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);

      const startFrame = 7199;
      const endFrame = 7199 + 369;

      const t = (this.frame - startFrame) / (endFrame - startFrame);

      const xOffsetOriginal = Math.sin(t * Math.PI * 14) * 8 * Math.exp(Math.log(4)) * Math.exp(Math.log(4));
      const yOffsetOriginal = (Math.sin(t * Math.PI * 8) + 1) * 5 * Math.exp(Math.log(4)) * Math.exp(Math.log(4));

      const rotation = -56.12 / 360 * Math.PI * 2;
      const xOffsetTmp = xOffsetOriginal * Math.cos(rotation) - yOffsetOriginal * Math.sin(rotation);
      const yOffsetTmp = yOffsetOriginal * Math.cos(rotation) + xOffsetOriginal * Math.sin(rotation);

      const rotation2 = 12.86 / 360 * Math.PI * 2;
      const xOffset = xOffsetTmp * Math.cos(rotation2) - yOffsetTmp * Math.sin(rotation2);
      const yOffset = yOffsetTmp * Math.cos(rotation2) + xOffsetTmp * Math.sin(rotation2);

      //1823, 800
      //1861, 644

      const saddle ='#522e22';
      const doubleColonialWhite = '#eedda5';
      this.ctx.fillStyle = saddle;
      this.ctx.beginPath();
      this.ctx.moveTo(1824, 800);
      this.ctx.lineTo(1862, 644);
      this.ctx.lineTo(1920, 644);
      this.ctx.lineTo(1920, 900);
      this.ctx.lineTo(1824, 800);
      this.ctx.fill();

      this.ctx.fillStyle = doubleColonialWhite;
      this.ctx.beginPath();
      this.ctx.moveTo(1823, 800);
      this.ctx.lineTo(1861, 644);
      this.ctx.lineTo(2500 + xOffset, 733 + yOffset);
      this.ctx.lineTo(2435 + xOffset, 907 + yOffset);
      this.ctx.lineTo(1823, 800);
      this.ctx.fill();

      this.ctx.restore();
    }
  }

  global.yolo = yolo;
})(this);
