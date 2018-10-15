(function (global) {
  class blurscopeNode extends NIN.ShaderNode {
    constructor(id, options) {
      options.inputs = {
        blurred: new NIN.TextureInput(),
        original: new NIN.TextureInput(),
        x: new NIN.Input(),
        y: new NIN.Input(),
      };
      super(id, options);
    }

    update(frame) {
      this.uniforms.frame.value = frame;
      this.uniforms.blurred.value = this.inputs.blurred.getValue();
      this.uniforms.original.value = this.inputs.original.getValue();
      this.uniforms.x.value = this.inputs.x.getValue();
      this.uniforms.y.value = this.inputs.y.getValue();
    }
  }

  global.blurscopeNode = blurscopeNode;
})(this);
