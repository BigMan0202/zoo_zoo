(function(global) {
  class roses extends ImageNode {
    getImageName() {
      return 'res/roses.png';
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);

      const startFrame = 7199;
      const endFrame = 7199 + 369;

      const t = (this.frame - startFrame) / (endFrame - startFrame);

      const xOffsetOriginal = Math.sin(t * Math.PI * 14) * 8 * Math.exp(Math.log(4));
      const yOffsetOriginal = (Math.sin(t * Math.PI * 8) + 1) * 5 * Math.exp(Math.log(4));

      const rotation = -56.12 / 360 * Math.PI * 2;
      const xOffset = xOffsetOriginal * Math.cos(rotation) - yOffsetOriginal * Math.sin(rotation);
      const yOffset = yOffsetOriginal * Math.cos(rotation) + xOffsetOriginal * Math.sin(rotation);

      const saddle ='#522e22';
      const doubleColonialWhite = '#eedda5';
      this.ctx.fillStyle = saddle;
      this.ctx.beginPath();
      this.ctx.moveTo(1242, 634);
      this.ctx.lineTo(1246, 355);
      this.ctx.lineTo(1427, 29);
      this.ctx.lineTo(1912, 40);
      this.ctx.lineTo(1916, 714);
      this.ctx.lineTo(1736, 857);
      this.ctx.lineTo(1242, 634);
      this.ctx.fill();

      this.ctx.fillStyle = doubleColonialWhite;
      this.ctx.beginPath();
      this.ctx.moveTo(1240, 521);
      this.ctx.lineTo(1240, 480);
      this.ctx.lineTo(1426 + xOffset, 469 + yOffset);
      this.ctx.lineTo(1426 + xOffset, 510 + yOffset);
      this.ctx.lineTo(1240, 521);
      this.ctx.fill();

      // 1412, 205
      // 489, 577
      this.ctx.save();
      this.ctx.translate(1412, 205);
      this.ctx.drawImage(
        this.imageElement,
        1412, 205,
        489, 577,
        xOffset, yOffset,
        489, 577
      );
      this.ctx.restore();

      this.ctx.drawImage(
        this.imageElement,
        1835, 718,
        85, 243,
        1835, 718,
        85, 243
      );

      this.ctx.drawImage(
        this.imageElement,
        1776, 781,
        104, 153,
        1776, 781,
        104, 153
      );

      this.ctx.drawImage(
        this.imageElement,
        1888, 683,
        50, 100,
        1888, 683,
        50, 100
      );

      this.ctx.restore();
    }
  }

  global.roses = roses;
})(this);
