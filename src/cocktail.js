(function(global) {
  class cocktail extends ImageNode {
    getImageName() {
      return 'res/cocktail.png';
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);

      const saddle = '#522e22';
      this.ctx.fillStyle = saddle;
      this.ctx.fillRect(1419, 424, 252, 266);
      this.ctx.fillRect(1253, 190, 220, 252);

      // Tounge guy
      this.ctx.fillStyle = saddle;
      this.ctx.fillRect(833, 207, 345, 872);

      this.ctx.save();
      this.ctx.translate(1005.5, 800);
      const t = smoothstep(0, 1, (this.frame - 1663) / 700);
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
      //

      // Hat guy
      this.ctx.fillStyle = saddle;
      this.ctx.fillRect(1525, 47, 300, 250);

      this.ctx.save();
      this.ctx.translate(1754, 345);
      // top left: 1525, 47
      // size: 266, 292
      const rotation = easeIn(0,
                              easeOut(-.5, 0, (this.frame - 1903) / 150),
                              (this.frame - 1803) / 100);
      this.ctx.rotate(rotation);
      this.ctx.drawImage(
        this.imageElement,
        1525, 47,
        265, 292,
        1525 - 1754, 47 - 345,
        265, 292
      );
      this.ctx.restore();
      //

      // Pointy eye guy
      /*
      this.ctx.drawImage(
        this.imageElement,
        1230, 442,
        180, 252,
        1253, 190,
        180, 252
      );
      */

      const localT = smoothstep(0, 1, (this.frame - 1663) / 700);
      const y2Offset = (Math.sin(localT * 30 - Math.PI / 2) + 1) * 42 - 5;
      const initY = easeOut(442, 190, (this.frame - 1661) / 60);
      const initHeight = easeOut(548, 836, (this.frame - 1661) / 60);
      const initHeadX = easeOut(1220, 1204, (this.frame - 1661) / 60);

      this.ctx.drawImage(
        this.imageElement,
        1230, 442,
        180, 584,
        1230, initY,
        180, initHeight
      );

      this.ctx.save();
      this.ctx.translate(initHeadX, 180);
      this.ctx.drawImage(
        this.imageElement,
        1220, 180,
        244, 262,
        0, - y2Offset,
        244, 262
      );
      this.ctx.restore();
      //

      // Multi eye guy
      // Top left: 1419, 424
      // Size: 252, 266
      const multiEyeT = (this.frame - 1903) / 100;
      this.ctx.drawImage(
        this.imageElement,
        1419, 424,
        252, 266,
        easeOut(1419, 1400, multiEyeT), easeOut(430, 624, multiEyeT),
        252, 266
      );
      this.ctx.fillRect(easeOut(1419, 1400, multiEyeT), easeOut(430, 624, multiEyeT), 5, 5);
      this.ctx.restore();
    }
  }

  global.cocktail = cocktail;
})(this);
