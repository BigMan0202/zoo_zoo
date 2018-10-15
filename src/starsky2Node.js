(function (global) {
  class starsky2Node extends NIN.ShaderNode {
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

  global.starsky2Node = starsky2Node;
})(this);
