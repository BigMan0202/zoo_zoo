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
          h1: new NIN.Input(),
          h2: new NIN.Input(),
          h3: new NIN.Input(),
          h4: new NIN.Input(),
          h5: new NIN.Input(),
          h6: new NIN.Input(),
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
          render: new NIN.TextureOutput(),
          zoom: new NIN.Output(),
          x: new NIN.Output(),
          y: new NIN.Output(),
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
        this.inputs.h1,
        this.inputs.h2,
        this.inputs.h3,
        this.inputs.h4,
        this.inputs.h5,
        this.inputs.h6,
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

      this.throb = 0;
    }

    beforeUpdate(frame) {
      for (const scene of this.scenes) {
        scene.enabled = false;
      }
      const numBars = Math.max(0, ((BEAN / 48) | 0) - 8);
      const nextBackBean = 8 * 48 + numBars * 48 + 24;
      const throbTime = lerp(0, 1, (frame - FRAME_FOR_BEAN(nextBackBean - 4)) / (FRAME_FOR_BEAN(nextBackBean + 4) - FRAME_FOR_BEAN(nextBackBean - 4)));
      const throb = 10 * (Math.sin(0.5 * Math.PI * throbTime) + numBars);
      this.progress = (frame + throb) / 300;
      const currentScene = this.scenes[this.progress | 0];
      currentScene.enabled = true;
      const nextScene = this.scenes[(this.progress + 1) | 0];
      nextScene.enabled = true;

      this.currentImage = currentScene.getValue();
      this.nextImage = nextScene.getValue();
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
      const t = this.progress % 1;
      const x = lerp(0, this.currentImage.x, t);
      const y = lerp(0, this.currentImage.y, t);
      const zoom = lerp(1, this.currentImage.zoom, Math.pow(2, 1 + t) / 2 - 1);

      const rotation = lerp(0, this.currentImage.rotation, t);

      this.ctx.rotate(rotation);
      this.ctx.translate(-x * zoom, -y * zoom);
      this.ctx.scale(zoom, zoom);

      this.ctx.drawImage(this.currentImage.canvas, -1920 / 2, -1080 / 2, 1920, 1080);

      this.ctx.scale(1 / this.currentImage.zoom, 1 / this.currentImage.zoom);
      this.ctx.translate(this.currentImage.x * this.currentImage.zoom,
                         this.currentImage.y * this.currentImage.zoom);
      this.ctx.rotate(-this.currentImage.rotation);

      this.ctx.drawImage(this.nextImage.canvas, -1920 / 2, -1080 / 2, 1920, 1080);

      this.ctx.restore();
      this.ctx.restore();

      this.output.needsUpdate = true;
      this.outputs.render.setValue(this.output);
      this.outputs.zoom.setValue(zoom);
      this.outputs.x.setValue(x);
      this.outputs.y.setValue(y);
    }
  }

  global.yo = yo;
})(this);
