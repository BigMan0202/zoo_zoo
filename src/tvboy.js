(function(global) {
  class tvboy extends ImageNode {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });
    }

    render() {
      super.render();
      this.ctx.save();
      this.ctx.scale(this.canvas.width / 1920, this.canvas.width /  1920);

      const grey = '#909090';
      this.ctx.fillStyle = grey;

      const open = easeIn(0, 1, (this.frame - 5485) / 25);
      const bottomOpen = lerp(45, 0, open * 2);
      const topOpen = lerp(1, 0, open * 2 - 1);

      this.ctx.beginPath();
      this.ctx.ellipse(868,
                       288 + 45 * topOpen,
                       55 * topOpen,
                       45 * topOpen,
                       0, Math.PI, Math.PI * 2);
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.ellipse(868,
                       332,
                       55,
                       bottomOpen,
                       0, 0, Math.PI);
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.ellipse(1089,
                       288 + 45 * topOpen,
                       55 * topOpen,
                       45 * topOpen,
                       0, Math.PI, Math.PI * 2);
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.ellipse(1089,
                       332,
                       55,
                       bottomOpen,
                       0, 0, Math.PI);
      this.ctx.fill();

      this.ctx.fillRect(718, 802, 200, 146);
      this.ctx.fillRect(1010, 802, 250, 146);

      this.ctx.save();
      this.ctx.translate(931, 911);
      this.ctx.rotate(smoothstep(-.2, .1, (this.frame - 5495) / 55));
      this.ctx.drawImage(
        this.imageElement,
        718, 802,
        210, 143,
        -213, -109,
        210, 143
      );
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(990, 911);
      this.ctx.rotate(smoothstep(.2, -.1, (this.frame - 5495) / 55));
      this.ctx.drawImage(
        this.imageElement,
        1000, 802,
        240, 143,
        10, -109,
        240, 143
      );
      this.ctx.restore();


      this.ctx.restore();
    }

    getImageName() {
      return 'res/tvboy.png';
    }
  }

  global.tvboy = tvboy;
})(this);
