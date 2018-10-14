(function(global) {
  class cocktail extends ImageNode {
    getImageName() {
      return 'res/cocktail.png';
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);

      const saddle ='#522e22';
      this.ctx.fillStyle = saddle;
      this.ctx.fillRect(833, 207, 345, 872);

      this.ctx.save();
      this.ctx.translate(1005.5, 800);
      const t = smoothstep(0, 1, (this.frame - 2215) / 700);
      this.ctx.rotate(t * 0.2);
      const yOffset = (Math.sin(t * 30 - Math.PI / 2) + 1) * 95;
      this.ctx.drawImage(
        this.imageElement,
        833, 207,
        345, 872,
        -345/2, -593 + yOffset,
        345, 872
      );
      this.ctx.restore();

      this.ctx.drawImage(
        this.imageElement,
        1230, 442,
        210, 262,
        1253, 180,
        210, 262
      );

      this.ctx.save();
      this.ctx.translate(1220, 180);
      const localT = smoothstep(0, 1, (this.frame - 2215) / 700);
      const y2Offset = (Math.sin(localT * 30 - Math.PI / 2) + 1) * 40;
      this.ctx.drawImage(
        this.imageElement,
        1220, 180,
        244, 262,
        0, - y2Offset,
        244, 262
      );
      this.ctx.restore();

      this.ctx.restore();
    }
  }

  global.cocktail = cocktail;
})(this);
