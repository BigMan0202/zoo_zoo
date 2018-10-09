(function(global) {
  class bgpatternNode extends NIN.ShaderNode {
    constructor(id, options) {
      options.inputs = {
        texture: new NIN.TextureInput(),
        zoom: new NIN.Input(),
      };
      super(id, options);
    }

    update(frame) {
      this.uniforms.frame.value = frame;
      this.uniforms.tDiffuse.value = this.inputs.texture.getValue();
      this.uniforms.zoom.value = this.inputs.zoom.getValue();
    }
  }

  global.bgpatternNode = bgpatternNode;
})(this);
