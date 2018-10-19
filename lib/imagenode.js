(function(global) {
  class ImageNode extends NIN.Node {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });
      this.imageElement = document.createElement('img');
      Loader.load(this.getImageName(), this.imageElement, () => null);
    }

    update(frame) {
      super.update(frame);
      this.frame = frame;
      this.texture = CanvasTexturePool.getTexture();
      this.canvas = this.texture.canvas;
      this.ctx = this.texture.canvas.getContext('2d');
      this.outputs.render.setValue(this.texture);
    }

    render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.save();
      const scale = this.canvas.width / 1920;
      this.ctx.scale(scale, scale);
      this.ctx.translate(1920 / 2, 1080 / 2);

      this.ctx.globalAlpha = 1;
      this.ctx.drawImage(this.imageElement, -1920 / 2, -1080 / 2);

      this.ctx.restore();

      this.texture.needsUpdate = true;
    }
  }

  global.ImageNode = ImageNode;
})(this);
