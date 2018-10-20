(function (global) {
  class starskyNode extends NIN.ShaderNode {
    constructor(id, options) {
      options.inputs = {
        background: new NIN.TextureInput(),
      };
      super(id, options);
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
    }
  }

  global.starskyNode = starskyNode;
})(this);
