(function (global) {
  class starskyNode extends NIN.ShaderNode {
    constructor(id, options) {
      options.inputs = {
        background: new NIN.TextureInput(),
      };
      super(id, options);
    }

    update(frame) {
      this.uniforms.frame.value = frame;
      this.uniforms.background.value = this.inputs.background.getValue();
    }
  }

  global.starskyNode = starskyNode;
})(this);
