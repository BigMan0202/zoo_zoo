(function(global) {
  class bgpatternNode extends NIN.ShaderNode {
    constructor(id, options) {
      options.inputs = {
        texture: new NIN.TextureInput(),
        zoom: new NIN.Input(),
        x: new NIN.Input(),
        y: new NIN.Input(),
      };
      super(id, options);
      this.throb = 0;
    }

    update(frame) {
      this.throb *= 0.95;
      if(BEAT && BEAN % 48 == 24) {
        this.throb = 1;
      }
      this.uniforms.frame.value = frame;
      this.uniforms.tDiffuse.value = this.inputs.texture.getValue();
      this.uniforms.zoom.value = this.inputs.zoom.getValue();
      this.uniforms.x.value = this.inputs.x.getValue();
      this.uniforms.y.value = this.inputs.y.getValue();
      this.uniforms.throb.value = this.throb;
    }
  }

  global.bgpatternNode = bgpatternNode;
})(this);
