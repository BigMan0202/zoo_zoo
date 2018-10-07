(function(global) {
  class yo extends NIN.THREENode {
    constructor(id) {
      super(id, {
        inputs: {
          a: new NIN.Input(),
          b: new NIN.Input(),
          c: new NIN.Input(),
          d: new NIN.Input(),
          e: new NIN.Input(),
          f: new NIN.Input(),
          g: new NIN.Input(),
          h: new NIN.Input(),
          i: new NIN.Input(),
          j: new NIN.Input(),
          k: new NIN.Input(),
          l: new NIN.Input(),
          m: new NIN.Input(),
          n: new NIN.Input(),
          o: new NIN.Input(),
          p: new NIN.Input(),
          q: new NIN.Input(),
          r: new NIN.Input(),
          s: new NIN.Input(),
          t: new NIN.Input(),
          u: new NIN.Input(),
          v: new NIN.Input(),
        },
        outputs: {
          render: new NIN.TextureOutput()
        },
      });

      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.resize();
      this.output = new THREE.VideoTexture(this.canvas);
      this.output.minFilter = THREE.LinearFilter;
      this.output.magFilter = THREE.LinearFilter;

      this.scenes = [
        this.inputs.a,
        this.inputs.b,
        this.inputs.c,
        this.inputs.d,
        this.inputs.e,
        this.inputs.f,
        this.inputs.g,
        this.inputs.h,
        this.inputs.i,
        this.inputs.j,
        this.inputs.k,
        this.inputs.l,
        this.inputs.m,
        this.inputs.n,
        this.inputs.o,
        this.inputs.p,
        this.inputs.q,
        this.inputs.r,
        this.inputs.s,
      ];
    }

    update(frame) {
      super.update(frame);
      this.frame = frame;
    }

    resize() {
      this.canvas.width = 16 * GU;
      this.canvas.height = 9 * GU;
    }

    render() {
      this.ctx.save();
      this.ctx.scale(16 * GU / 1920, 16 * GU /  1920);
      this.ctx.translate(1920 / 2, 1080 / 2);

      this.ctx.save();
      const progress = this.frame / 400;
      const t = progress % 1;
      const currentImage = this.scenes[progress | 0].getValue();
      const nextImage = this.scenes[(progress + 1) | 0].getValue();
      const x = lerp(0, currentImage.x, t);
      const y = lerp(0, currentImage.y, t);
      const zoom = lerp(1, currentImage.zoom, Math.pow(2, 1 + t) / 2 - 1);

      const rotation = lerp(0, currentImage.rotation, t);

      this.ctx.rotate(rotation);
      this.ctx.translate(-x * zoom, -y * zoom);
      this.ctx.scale(zoom, zoom);

      this.ctx.drawImage(currentImage.canvas, -1920 / 2, -1080 / 2, 1920, 1080);

      this.ctx.scale(1 / currentImage.zoom, 1 / currentImage.zoom);
      this.ctx.translate(currentImage.x * currentImage.zoom, currentImage.y * currentImage.zoom);
      this.ctx.rotate(-currentImage.rotation);

      this.ctx.drawImage(nextImage.canvas, -1920 / 2, -1080 / 2, 1920, 1080);

      this.ctx.restore();
      this.ctx.restore();

      this.output.needsUpdate = true;
      this.outputs.render.setValue(this.output);
    }
  }

  global.yo = yo;
})(this);
