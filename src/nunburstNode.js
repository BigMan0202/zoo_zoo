(function (global) {
  class nunburstNode extends NIN.ShaderNode {
    constructor(id, options) {
      options.inputs = {
        overlay: new NIN.TextureInput(),
        background: new NIN.TextureInput(),
      };
      super(id, options);
      this.x = (options.x - 960) || 0;
      this.y = (options.y - 540) || 0;

      this.renderTarget = new THREE.WebGLRenderTarget(640, 360, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat
      });
    }

    warmup(renderer) {
      this.update(1000);
      this.render(renderer);
    }

    update(frame) {
      this.uniforms.frame.value = frame;
      this.uniforms.background.value = this.inputs.background.getValue();
      this.uniforms.x.value = this.x / 1920;
      this.uniforms.y.value = this.y / 1080;
    }
  }

  global.nunburstNode = nunburstNode;
})(this);
