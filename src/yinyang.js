(function(global) {
  class yinyang extends ImageNode {
    getImageName() {
      return 'res/yinyang.png';
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);

      const startFrame = 6830;
      const endFrame = 7199;

      const t = (this.frame - startFrame) / (endFrame - startFrame);

      const xOffset = Math.sin(t * Math.PI * 14) * lerp(0, 8, (this.frame - startFrame) / 15);
      const yOffset = (Math.sin(t * Math.PI * 8) + 1) * lerp(0, 5, (this.frame - startFrame) / 15);

      const saddle ='#522e22';
      const doubleColonialWhite = '#eedda5';
      this.ctx.fillStyle = saddle;
      this.ctx.beginPath();
      this.ctx.moveTo(646, 669);
      this.ctx.lineTo(740, 610);
      this.ctx.lineTo(831, 677);
      this.ctx.lineTo(778, 805);
      this.ctx.lineTo(663, 807);
      this.ctx.lineTo(646, 669);
      this.ctx.fill();

      this.ctx.fillStyle = doubleColonialWhite;
      this.ctx.beginPath();
      this.ctx.moveTo(659, 655);
      this.ctx.lineTo(668, 649);
      this.ctx.lineTo(697 + xOffset, 688 + yOffset);
      this.ctx.lineTo(689 + xOffset, 695 + yOffset);
      this.ctx.lineTo(659, 655);
      this.ctx.fill();

      // 658, 656
      // 125, 151
      this.ctx.save();
      this.ctx.translate(658, 686);
      this.ctx.drawImage(
        this.imageElement,
        658, 686,
        125, 121,
        xOffset, yOffset,
        125, 121
      );
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(698, 656);
      this.ctx.drawImage(
        this.imageElement,
        698, 656,
        85, 51,
        xOffset, yOffset,
        85, 51
      );
      this.ctx.restore();

      this.ctx.drawImage(
        this.imageElement,
        625, 793,
        33, 32,
        625, 793,
        33, 32
      );

      this.ctx.drawImage(
        this.imageElement,
        659, 813,
        41, 18,
        659, 813,
        41, 18
      );

      this.ctx.drawImage(
        this.imageElement,
        756, 789,
        200, 150,
        756, 789,
        200, 150
      );

      this.ctx.restore();
    }
  }

  global.yinyang = yinyang;
})(this);
