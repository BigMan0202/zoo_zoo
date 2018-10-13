(function(global) {
  class ImageNode extends NIN.Node {
    constructor(id) {
      super(id, {
        outputs: {
          render: new NIN.Output()
        }
      });

      this.canvas = document.createElement('canvas');
      this.texture = new THREE.CanvasTexture(this.canvas);
      this.texture.minFilter = THREE.LinearFilter;
      this.texture.magFilter = THREE.LinearFilter;
      this.outputs.render.setValue(this.texture);

      this.ctx = this.canvas.getContext('2d');
      this.resize();

      this.imageElement = document.createElement('img');
      Loader.load(this.getImageName(), this.imageElement, () => null);
    }

    update(frame) {
      super.update(frame);
      this.frame = frame;
    }

    resize() {
      this.canvas.width = Math.min(16 * GU * 4, 1920);
      this.canvas.height = Math.min(9 * GU * 4, 1080);
    }

    render() {
      this.ctx.save();
      const scale = this.canvas.width / 1920;
      this.ctx.scale(scale, scale);
      this.ctx.translate(1920 / 2, 1080 / 2);

      this.ctx.globalAlpha = 1;
      this.ctx.drawImage(this.imageElement, -1920 / 2, -1080 / 2);

      this.ctx.restore();

      this.texture.needsUpdate = true;
      this.outputs.render.setValue(this.texture);
    }
  }

  global.ImageNode = ImageNode;
})(this);
